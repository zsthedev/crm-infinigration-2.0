import React, { useEffect, useState } from "react";
import "./profiling.scss";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  updateClientProfile,
  uploadClientProfile,
} from "../../redux/actions/leads";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getAllPrograms } from "../../redux/actions/program";
const Profiling = ({ client }) => {
  const [cnic, setCnic] = useState(client.cnic);
  const [email, setEmail] = useState(client.email);
  const [program, setProgram] = useState(client.email);
  const [dob, setDob] = useState(
    client.dob != null ? client.dob.split("T")[0] : "Nill"
  );
  const { programs } = useSelector((state) => state.program);

  useEffect(() => {
    dispatch(getAllPrograms());
  }, []);

  const programOptions =
    programs && programs.length > 0
      ? programs.map((p) => ({
          value: p._id,
          label: p.generalInformation[0].country,
        }))
      : [];

  const dispatch = useDispatch();
  const params = useParams();
  const submitHandler = (e) => {
    e.preventDefault();

    if (cnic === "" && dob === "") {
      return toast.error("Please enter any feild");
    }

    if (cnic.length > 13) {
      return toast.error("Invalid CNIC");
    }

    dispatch(updateClientProfile(cnic, dob, params.id));
  };
  const { error, loading, message } = useSelector((state) => state.leads);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, loading, message]);

  return (
    <div className="section" id="profiling">
      <h2 className="heading">Profile</h2>

      <form action="" onSubmit={submitHandler}>
        <div className="la">
          <label htmlFor="">CNIC</label>
          <input
            type="text"
            placeholder="Enter CNIC"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
          />
        </div>

        <div className="la">
          <label htmlFor="">Date of Birth</label>
          <input
            type="date"
            placeholder="Enter Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="la">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter Date of Birth"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="se">
          <Select
            options={programOptions}
            value={program}
            onChange={setProgram}
            placeholder="Choose Country"
          ></Select>
        </div>

        <button className="primary-btn">Update Profile</button>
      </form>
    </div>
  );
};

export default Profiling;
