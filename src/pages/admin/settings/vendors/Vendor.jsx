import React from "react";
import { Link } from "react-router-dom";
import "./vendor.scss";

const Vendor = () => {
  return (
    <section className="section" id="vendor">
      <div className="actions-row">
        <input type="text" placeholder="Search Vendor"/>
        <form action="">
          <input type="text" placeholder="Enter Vendor Name" />
          <button className="primary-btn">Add</button>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
    </section>
  );
};

export default Vendor;
