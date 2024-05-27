import React, { useState } from "react";
import FilterLeads from "../../../componets/filter leads/FilterLeads";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./admin-leads.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllLeads, updateLeadStatus } from "../../../redux/actions/leads";
import Loader from "../../loader/Loader";
import toast from "react-hot-toast";
import { getEmployees } from "../../../redux/actions/admin";

const AdminLeads = () => {
  const [isOpen, setOpen] = useState(false);
  const [isFOpen, setFOpen] = useState(false);

  const [forward, setForward] = useState("");

  const dispatch = useDispatch();

  const [status, setStatus] = useState("");
 
  const statusOptions = [
    {
      value: "requirements",
      label: "Requirements Gathering",
    },

    {
      value: "documents",
      label: "Documents Verification",
    },
  ];
  useEffect(() => {
    getEmployees();
  }, []);
  const { employees } = useSelector((state) => state.admin);
  
  const forwardLeadOptions =
    employees &&
    employees.employees.map((e) => ({
      value: e._id,
      label: `${e.bioData.name} (${e.job.department})`,
    }));

  console.log(forwardLeadOptions);

  const updateStatusHandler = (e) => {
    e.preventDefault();
    const id = e.target.id;
    dispatch(updateLeadStatus(id, status.value));
  };

  const { loading, error, message, leads } = useSelector(
    (state) => state.leads
  );
  useEffect(() => {
    dispatch(getAllLeads());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, loading]);

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const forwardLeadHandler = (e) => {
    e.preventDefault();
  };

  return loading || !leads || !leads.leads ? (
    <Loader /> || !employees
  ) : (
    <section className="sections" id="admin-leads">
      <FilterLeads />
      <div className={"actions-row"}>
        <div>
          <Select
            placeholder="Total Leads"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                outline: "none",
                backgroundColor: "#fff",
                color: "#363636",
                fontSize: "14px",
                borderRadius: "4px",
                padding: "2px",
                width: "300px",
              }),
            }}
          />
          <input type="text" placeholder="Search by Name" />
        </div>

        <div>
          <Link className="primary-btn" to={"add"}>
            Add Leads
          </Link>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>Program Selected</th>
            <th>Created At</th>
            <th>Delayed by</th>
            <th>Status</th>
            <th>Source</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.leads && leads.leads.length > 0
            ? leads.leads.map((l, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{l.client.name}</td>
                  <td>{l.client.program}</td>
                  <td>{l.createdAt.split("T")[0]}</td>
                  <td>Nill</td>
                  <td>{l.status}</td>
                  <td>{l.source}</td>
                  <td className="act-row">
                    <div className="a-row">
                      <Link to={`${l._id}/activities`}>Activities</Link>
                      <button onClick={() => setOpen(!isOpen)}>
                        Update Status
                      </button>
                      <Link to={"/admin/contracts/add"}>
                        Convert to Contract
                      </Link>
                      <button onClick={() => setFOpen(!isFOpen)}>
                        Forward Lead
                      </button>
                    </div>

                    <form
                      action=""
                      style={{ display: isOpen ? "" : "none" }}
                      onSubmit={updateStatusHandler}
                      id={l._id}
                    >
                      <Select
                        placeholder="Change Status"
                        value={status}
                        onChange={setStatus}
                        options={statusOptions}
                        defaultValue={status}
                      />
                      <button>Apply</button>
                    </form>

                    <form action="" style={{ display: isFOpen ? "" : "none" }}>
                      <Select
                        placeholder="Forward Leads"
                        options={forwardLeadOptions}
                        defaultValue={forward}
                        onChange={setForward}
                      />
                      <button>Apply</button>
                    </form>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </section>
  );
};

export default AdminLeads;
