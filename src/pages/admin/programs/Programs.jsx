import React from "react";

const Programs = () => {
  return (
    <section className="section" id="programs">
      <div className="actions-row">
        <button className="primary-btn">Add New</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Estimated Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>Austrailian Immigration</td>
            <td>150,000 PKR</td>
            <td>Active</td>
            <td>6 Months</td>
            <td className="actions">
              <button>View</button>
              <button>Disable</button>
              <button>Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Programs;
