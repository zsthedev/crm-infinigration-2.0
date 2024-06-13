import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Leads = () => {
  const { auth } = useSelector((state) => state.user);
  console.log(auth.user);

  return (
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
          {auth && auth.user.assignedLeads.length > 0
            ? auth.user.assignedLeads.map((l, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{l.client.name}</td>
                  <td>{l.client.program}</td>
                  <td>{l.createdAt.split("T")[0]}</td>
                  <td>Nill</td>
                  <td>{l.status}</td>
                  <td>{l.source}</td>
                  <td className="actions">
                    {auth && auth.user.job.department === "marketing" ? (
                      <button>Assign Lead</button>
                    ) : (
                      ""
                    )}
                    {auth && auth.user.job.department === "sales" ? (
                      <button>Forward Lead</button>
                    ) : (
                      ""
                    )}

                    {auth && auth.user.job.department === "sales" ? (
                      <Link to={`/leads/remarks/123`}>Add Remarks</Link>
                    ) : (
                      ""
                    )}

                    {auth && auth.user.job.department === "operations" ? (
                      <Link to={"/leads/view/123456"}>View</Link>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </section>
  );
};

export default Leads;
