import React from "react";
import "./contract.scss";
const Contracts = () => {
  return (
    <section className="section" id="contracts">
      <div className="actions-row">
        <input type="text" placeholder="Search" />
        <button className="primary-btn">Add New</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>Date</th>
            <th>Stage</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>Shahzaib Khan</td>
            <td>Today</td>
            <td>Application Submitted</td>
            <td>120,000 PKR</td>
            <td className="actions">
              <button>Send Email</button>
              <button>Send Invoice</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Contracts;
