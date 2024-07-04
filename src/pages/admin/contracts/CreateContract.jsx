import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getAllPrograms } from "../../../redux/actions/program";
import { getAllLeads } from "../../../redux/actions/leads";
import { createContract } from "../../../redux/actions/contract";
import Loader from "../../loader/Loader";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const CreateContract = () => {
  const [installments, setInstallments] = useState([
    { amount: "", stage: "", remarks: "" },
  ]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPrograms());
    dispatch(getAllLeads());
  }, [dispatch]);

  const { leads } = useSelector((state) => state.leads);
  const { programs } = useSelector((state) => state.program);
  const { loading, message, error } = useSelector((state) => state.contract);

  const params = useParams();
  const navigate = useNavigate();

  const [program, setProgram] = useState(
    leads && leads.leads.length > 0 && params.id !== undefined
      ? leads.leads
          .filter((l) => l._id === params.id)
          .map((l) => ({
            value: l.client.program && l.client.program._id,
            label:
              l.client.program &&
              l.client.program.generalInformation[0].country,
          }))
      : []
  );

  const [lead, setLead] = useState(
    leads && leads.leads.length > 0 && params.id !== undefined
      ? leads.leads
          .filter((l) => l._id === params.id)
          .map((l) => ({
            value: l._id,
            label: l.client.name,
          }))
      : []
  );

  const handleAddInstallment = () => {
    setInstallments([...installments, { amount: "", stage: "", remarks: "" }]);
  };

  const handleRemoveInstallment = (index) => {
    const newInstallments = installments.filter((_, i) => i !== index);
    setInstallments(newInstallments);
  };

  const handleInstallmentChange = (index, field, value) => {
    const newInstallments = [...installments];
    newInstallments[index][field] = value;
    setInstallments(newInstallments);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(lead.value, program.value, installments);
    dispatch(createContract(lead.value, program.value, installments));
  };

  const leadOptions =
    leads && leads.leads.length > 0
      ? leads.leads.map((l) => ({
          value: l._id,
          label: l.client.name,
        }))
      : [];

  const programOptions =
    programs && programs.length > 0
      ? programs.map((p) => ({
          value: p._id,
          label: p.generalInformation[0].country,
        }))
      : [];

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });

      navigate("/admin/contracts");
    }

    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
  }, [error, message, dispatch, navigate]);

  return loading ? (
    <Loader />
  ) : (
    <section className="section" id="create-contract">
      <form action="" onSubmit={submitHandler}>
        <h2 className="heading">Create Contract</h2>
        <Select
          placeholder="Choose Lead"
          options={leadOptions}
          onChange={setLead}
          value={lead}
          defaultValue={lead}
        />
        <Select
          placeholder="Choose Program"
          options={programOptions}
          onChange={setProgram}
          value={program}
          defaultValue={program}
        />
        <h2 className="heading">Installments</h2>
        <div className="installments-container">
          <button
            type="button"
            className="primary-btn"
            onClick={handleAddInstallment}
          >
            Add Installment
          </button>
          {installments.map((installment, index) => (
            <div key={index} className="installment">
              <input
                type="number"
                placeholder="Enter Amount"
                value={installment.amount}
                onChange={(e) =>
                  handleInstallmentChange(index, "amount", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Enter Stage"
                value={installment.stage}
                onChange={(e) =>
                  handleInstallmentChange(index, "stage", e.target.value)
                }
              />
              <textarea
                placeholder="Enter Remarks"
                value={installment.remarks}
                onChange={(e) =>
                  handleInstallmentChange(index, "remarks", e.target.value)
                }
              />
              <button
                type="button"
                className="danger-btn"
                onClick={() => handleRemoveInstallment(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button className="primary-btn">Submit</button>
      </form>
    </section>
  );
};

export default CreateContract;
