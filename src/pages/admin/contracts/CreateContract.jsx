import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getAllPrograms } from "../../../redux/actions/program";
import { getAllLeads } from "../../../redux/actions/leads";
import { createContract } from "../../../redux/actions/contract";
import Loader from "../../loader/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateContract = () => {
  const [installments, setInstallments] = useState([
    { amount: "", stage: "", remarks: "" },
  ]);

  const [program, setProgram] = useState("");
  const [lead, setLead] = useState("");

  const handleAddInstallment = () => {
    setInstallments([...installments, { amount: "", stage: "", remarks: "" }]);
  };

  const handleInstallmentChange = (index, field, value) => {
    const newInstallments = [...installments];
    newInstallments[index][field] = value;
    setInstallments(newInstallments);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createContract(lead.value, program.value, installments));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPrograms());
    dispatch(getAllLeads());
  }, []);

  const { leads } = useSelector((state) => state.leads);
  const { programs } = useSelector((state) => state.program);

  const { loading, message, error } = useSelector((state) => state.contract);

  const leadOptions =
    leads && leads.leads.length > 0
      ? leads.leads.map((l) => ({
          value: l._id,
          label: l.client.name,
        }))
      : "";

  const programOptions =
    programs && programs.length > 0
      ? programs.map((l) => ({
          value: l._id,
          label: l.generalInformation[0].country,
        }))
      : "";
  const navigate = useNavigate();
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });

      navigate("/admin/contracts")
    }

    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
  }, [error, message]);

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
        <div className="installements-container">
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
            </div>
          ))}
        </div>

        <button className="primary-btn">Submit</button>
      </form>
    </section>
  );
};

export default CreateContract;
