import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <section className="section" id="admin-settings">
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Setting Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>Employees</td>
            <td>
              <Link to={"employees"}>View</Link>
            </td>
          </tr>

          <tr>
            <td>02</td>
            <td>Abroad Questions</td>
            <td>
              <Link to={"abroad-questions"}>View</Link>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Leads Setting</td>
            <td>
              <Link to={"leads"}>View</Link>
            </td>
          </tr>

          <tr>
            <td>04</td>
            <td>Triggers</td>
            <td>
              <Link>View</Link>
            </td>
          </tr>

          <tr>
            <td>05</td>
            <td>Abroad Forms</td>
            <td>
              <Link>View</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Settings;
