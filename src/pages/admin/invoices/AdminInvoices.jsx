import React from "react";

const AdminInvoices = () => {
  return (
    <section className="section" id="admin-invoices">
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
            <td className="actions">
              <button>View</button>
              <button>Download</button>
              <button>Send</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AdminInvoices;
