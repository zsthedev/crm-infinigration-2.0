import React, { useState } from "react";
import FilterLeads from "../../../componets/filter leads/FilterLeads";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./admin-leads.scss";
import Table from "../../../componets/table/Table";
const AdminLeads = () => {
  const [isOpen, setOpen] = useState(false);
  const [isFOpen, setFOpen] = useState(false);
  return (
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
          <tr>
            <td>01</td>
            <td>Shahzaib Khan</td>
            <td>USA</td>
            <td>2-April-2024</td>
            <td>Nill</td>
            <td>Requirement Gathering</td>
            <td>Facebook</td>
            <td className="act-row">
              <div className="a-row">
                <Link to={"123/activities"}>Activities</Link>
                <button onClick={() => setOpen(!isOpen)}>Update Status</button>
                <Link to={"/admin/contracts/add"}>Convert to Contract</Link>
                <button onClick={() => setFOpen(!isFOpen)}>Forward Lead</button>
              </div>

              <form action="" style={{ display: isOpen ? "" : "none" }}>
                <Select placeholder="Change Status" />
                <button>Apply</button>
              </form>

              <form action="" style={{ display: isFOpen ? "" : "none" }}>
                <Select placeholder="Forward Leads" />
                <button>Apply</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AdminLeads;
