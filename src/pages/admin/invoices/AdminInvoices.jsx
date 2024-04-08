import React, { useState } from "react";
import Select from "react-select";
import "./invoices.scss";
import CustomSelect from "../../../componets/CustomSelect/CustomSelect";
const AdminInvoices = () => {
  const [filter, setFilter] = useState();
  const options = [
    { value: "bank", label: "Bank" },
    { value: "cash", label: "Cash" },
  ];

  const [open, isOpen] = useState(false);
  return (
    <section className="section" id="admin-invoices">
      <div className="actions-row">
        <CustomSelect
          placeholder="Bank"
          options={options}
          defaultValue={filter}
          value={filter}
          onChange={setFilter}
        />
        <button className="primary-btn">Apply</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Date</th>
            <th>Due Date</th>
            <th>Total</th>
            <th>Installement 01</th>
            <th>Installement 02</th>
            <th>Installement 03</th>
            <th>Paid</th>
            <th>Outstanding</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01</td>
            <td>Today</td>
            <td>Tomorrow</td>
            <td>100,000</td>
            <td className="span-td">
              30,000 <span className="success">Paid</span>
            </td>
            <td className="span-td">
              30,000 <span className="pending">Pending</span>
            </td>

            <td className="span-td">
              40,000 <span className="fail">Not Sent</span>
            </td>

            <td>30,000</td>
            <td>70,000</td>
            <td className="act-row">
              <div className="a-row">
                <button>View</button>
                <button>Download</button>
                <button onClick={() => isOpen(!open)}>Send</button>
              </div>

              <form action="" style={{ display: open ? "flex" : "none" }}>
                <CustomSelect placeholder="Select Installement" color="" />
                <button>Send</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AdminInvoices;
