import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { assignLead, getAllLeads } from "../../../redux/actions/leads";
import Select from "react-select";
import { getEmployees } from "../../../redux/actions/admin";
import toast from "react-hot-toast";
import Loader from "../../loader/Loader";

const Leads = () => {
  const [isFOpen, setFOpen] = useState(null); // State to track which row's "Assign Lead" form is open
  const [forward, setForward] = useState(""); // State to hold selected forward option
  const { employees } = useSelector((state) => state.admin);
  const { auth } = useSelector((state) => state.user);
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
    dispatch(getEmployees());
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
        .filter((e) => e._id !== auth.user._id && e.job.department === "sales")
        .map((e) => ({
          value: e._id,
          label: `${e.bioData.name}, (${e.job.department})`,
        }))
    : [];

  const assignSubmitHandler = (e, id) => {
    e.preventDefault();
    dispatch(assignLead(id, forward.value)); // Dispatch assignLead action with lead ID and selected forward value
    setFOpen(null); // Close the "Assign Lead" form after submission
  };

  console.log(auth.user.assignedLeads);

  return loading || !leads ? (
    <Loader />
  ) : (
    <section className="section" id="e_leads">
      {auth && auth.user.job.department === "marketing" ? (
        <div className="actions-row">
          <Link className="primary-btn" to={"/leads/add"}>
            Add New
          </Link>
        </div>
      ) : (
        ""
      )}

      {auth && auth.user.job.department === "sales" && (
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
            {auth.user.assignedLeads && auth.user.assignedLeads.length > 0
              ? auth.user.assignedLeads.map((l, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{l.client.name}</td>
                    <td>{l.client.program}</td>
                    <td>{l.createdAt.split("T")[0]}</td>
                    <td>Nill</td>
                    <td>{l.status}</td>
                    <td>{l.source}</td>
                    <td className="actions">
                      {/* Display "Forward Lead" button for sales department */}
                      <button onClick={() => setFOpen(index)}>
                        Forward Lead
                      </button>

                      <Link to={`/leads/remarks/${l._id}`}>Add Remarks</Link>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      )}

      {auth && auth.user.job.department === "marketing" && (
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
            {leads.leads.map((l, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{l.client.name}</td>
                <td>
                  {l.client.program
                    ? l.client.program.generalInformation[0].country
                    : "Not Selected Yet"}
                </td>
                <td>{l.createdAt.split("T")[0]}</td>
                <td>Nill</td>
                <td>{l.status}</td>
                <td>{l.source}</td>
                <td className="act-row">
                  {/* Display "Assign Lead" button for marketing department */}
                  <button onClick={() => setFOpen(index)}>Assign Lead</button>

                  {/* Conditional rendering of form based on isFOpen */}
                  {isFOpen === index && (
                    <form onSubmit={(e) => assignSubmitHandler(e, l._id)}>
                      <Select
                        placeholder="Assign Leads"
                        options={forwardLeadOptions}
                        value={forward}
                        onChange={setForward}
                      />
                      <button type="submit">Apply</button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Leads;
