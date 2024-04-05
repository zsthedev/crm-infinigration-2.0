import React from "react";
import FilterLeads from "../../../componets/filter leads/FilterLeads";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./admin-leads.scss";
import Table from "../../../componets/table/Table";
const AdminLeads = () => {
  return (
    <section className="section" id="admin-leads">
      <FilterLeads />
      <div className="actions-row">
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
          <Link className="primary-btn">Forward Leads</Link>
          <Link className="primary-btn">Add Lead</Link>
          <Link className="primary-btn">Upload Leads</Link>
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
            <td className="actions">
              <Link to={"123/activities"}>Activities</Link>
              <Link>Update Status</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AdminLeads;
