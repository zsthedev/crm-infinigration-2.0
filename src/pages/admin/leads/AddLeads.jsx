import React, { useCallback, useEffect, useState } from "react";
import Dropzone from "dropzone";
import { useDropzone } from "react-dropzone";
import "./add-leads.scss";
import { useDispatch, useSelector } from "react-redux";
import { GoUpload } from "react-icons/go";
import { createLead } from "../../../redux/actions/leads";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../loader/Loader";
import Select from "react-select";
import { getAllPrograms } from "../../../redux/actions/program";

const AddLeads = () => {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientProgram, setClientProgram] = useState("");
  const [clientSource, setClientSource] = useState("");
  const [leads, setLeads] = useState([]);
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.leads);
  const navigate = useNavigate();

  const { programs } = useSelector((state) => state.program);

  const sourceOptions = [
    { value: "facebook", label: "Facebook" },
    { value: "instagram", label: "Instagram" },
  ];
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/admin/leads");
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message, loading]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newLead = {
      name: clientName,
      phone: clientPhone,
      email: clientEmail,
      program: clientProgram.value,
      source: clientSource.value,
      status: "Created",
    };
    const updatedLeads = [...leads, newLead];
    dispatch(createLead(updatedLeads));

    console.log(updatedLeads);
    setLeads([]);
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  useEffect(() => {
    dispatch(getAllPrograms());
  }, []);

  const programOptions =
    programs && programs.length > 0
      ? programs.map((p) => ({
          value: p._id,
          label: p.generalInformation[0].country,
        }))
      : "";

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return loading ? (
    <Loader />
  ) : (
    <section id="add-leads" className="section">
      <div className="row">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Client Phone"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Client Email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
          />
          <Select
            placeholder="Choose Program"
            value={clientProgram}
            onChange={setClientProgram}
            defaultValue={clientProgram}
            options={programOptions}
          />
          <Select
            placeholder="Choose Source"
            value={clientSource}
            onChange={setClientSource}
            defaultValue={clientSource}
            options={sourceOptions}
          />
          <button className="primary-btn">Submit</button>
        </form>
        <div className="upload-file">
          <div {...getRootProps()}>
            <GoUpload />
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag and drop excel file here, or click to select files</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddLeads;
