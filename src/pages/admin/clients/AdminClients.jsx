import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients } from "../../../redux/actions/clients";
import "./admin.scss"; // Make sure to import the CSS file
import { Link } from "react-router-dom";

const AdminClients = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClients());
  }, [dispatch]);

  const { loading, clients } = useSelector((state) => state.clients);

  return (
    <section className="section" id="admin_clients">
      <div className={"actions-row"}>
        {/* <div>
              <input type="text" placeholder="Search by Name" />
            </div> */}

        <div>
          <Link className="primary-btn" to={"/admin/clients/add"}>
            Add Clients
          </Link>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Subagent</th>
            <th>Signing Date</th>
            <th>Name</th>
            <th>TTL Amount</th>

            <th>Psp No</th>
            <th>Email</th>
            <th>Remarks</th>
            <th>Contact No</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {clients && clients.length > 0
            ? clients.map((c, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{c.subAgent}</td>
                  <td>{c.signingDate.split("T")[0]}</td>
                  <td>{c.name}</td>
                  <td>{c.ttlAmount} PKR</td>

                  <td>{c.passport}</td>
                  <td>{c.email}</td>
                  <td>{c.remarks}</td>
                  <td>{c.contactNo}</td>
                  <td>{c.status}</td>
                  <td>{c.action}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </section>
  );
};

export default AdminClients;
