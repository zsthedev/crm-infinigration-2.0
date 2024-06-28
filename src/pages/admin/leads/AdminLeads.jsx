import React, { useState } from "react";
import FilterLeads from "../../../componets/filter leads/FilterLeads";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./admin-leads.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  assignLead,
  getAllLeads,
  updateLeadStatus,
} from "../../../redux/actions/leads";
import Loader from "../../loader/Loader";
import toast from "react-hot-toast";
import { getEmployees } from "../../../redux/actions/admin";
import FilteredLeads from "../../../componets/filter leads/FilteredLeads";

const AdminLeads = () => {
  const [isOpen, setOpen] = useState(false);
  const [isFOpen, setFOpen] = useState(false);
  const [forward, setForward] = useState("");
  const [status, setStatus] = useState("");
  const { employees } = useSelector((state) => state.admin);
  const { auth } = useSelector((state) => state.user);

  const [date, setDate] = useState("");
  const [employee, setEmployee] = useState("");
  const [delay, setDelay] = useState("");

  const { loading, error, message, leads } = useSelector(
    (state) => state.leads
  );

  const dispatch = useDispatch();

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

  const forwardLeadOptions = employees
    ? employees
        .filter((e) => e._id !== auth.user._id)
        .map((e) => ({
          value: e._id,
          label: `${e.bioData && e.bioData.name}, (${e.job && e.job.department})`,
        }))
    : [];

  const updateStatusHandler = (e) => {
    e.preventDefault();
    const id = e.target.id;
    dispatch(updateLeadStatus(id, status.value));
  };

  const assignSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(assignLead(e.target.id, forward.value));
  };

  return loading || !leads || !leads.leads ? (
    <Loader /> || !employees
  ) : (
    <section className="sections" id="admin-leads">
      <FilterLeads
        date={date}
        onDateChange={(e) => setDate(e.target.value)}
        employee={employee}
        onEmployeeChange={setEmployee}
        delay={delay}
        onDelayChange={(e) => setDelay(e.target.value)}
      />

      {date != "" || employee != "" || delay != "" ? (
        <FilteredLeads date={date} delay={delay} employee={employee} />
      ) : (
        <>
          <div className={"actions-row"}>
            {/* <div>
              <input type="text" placeholder="Search by Name" />
            </div> */}

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
                      <td>{l.client.program ? l.client.program.generalInformation[0].country : "Not Selected Yet"}</td>
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
                          <Link to={`/admin/contracts/add/${l._id}`}>
                            Convert to Contract
                          </Link>
                          <button onClick={() => setFOpen(!isFOpen)}>
                            Assign Lead
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

                        <form
                          onSubmit={assignSubmitHandler}
                          style={{ display: isFOpen ? "" : "none" }}
                          id={l._id}
                        >
                          <Select
                            placeholder="Assign Leads"
                            options={forwardLeadOptions}
                            value={forward}
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
        </>
      )}
    </section>
  );
};

export default AdminLeads;
