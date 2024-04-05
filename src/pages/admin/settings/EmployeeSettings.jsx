import React from "react";
import { Link } from "react-router-dom";

const EmployeeSettings = () => {
  return (
    <section className="section" id="employee-settings">
      <div className="actions-row">
        <button className="primary-btn">Add New Employee</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
            <th>Links</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>Shahzaib Khan</td>
            <td>shahzaibnahk</td>
            <td className="actions">
              <Link>Change Password</Link>
              <Link>Update Profile</Link>
              <Link>Send Email</Link>
            </td>
            <td>
              <Link>Login</Link>
            </td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default EmployeeSettings;
