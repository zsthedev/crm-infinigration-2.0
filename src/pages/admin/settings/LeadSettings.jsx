import React, { useState } from "react";
import "./settings.scss";
const LeadSettings = () => {
  const [status, setStatus] = useState("");

  return (
    <section className="section" id="leads-settings">
      <div className="actions-row">
        <input type="text" placeholder="Write Statuses with , Separator" />
        <button className="primary-btn">Add Lead Status</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Status Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>Followup</td>
            <td>
              <button className="delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default LeadSettings;
