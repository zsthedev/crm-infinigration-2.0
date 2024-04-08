import React from "react";
import { Link } from "react-router-dom";

const FilteredLeads = () => {
  return (
    <section className="section" id="filtered-leads">
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
              <button>Convert to Lead</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default FilteredLeads;
