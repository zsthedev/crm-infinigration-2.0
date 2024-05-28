import React, { useEffect } from "react";
import "./contract.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllContracts } from "../../../redux/actions/contract";
const Contracts = () => {
  const dispatch = useDispatch();
  const { contracts } = useSelector((state) => state.contract);

  useEffect(() => {
    dispatch(getAllContracts());
  }, []);

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
          {contracts && contracts.contracts.length > 0
            ? contracts.contracts.map((c, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{c.lead.client.name}</td>
                  <td>{c.createdAt.split("T")[0]}</td>
                  <td>{c.lead.status}</td>
                  <td>{c.program.generalInformation[0].totalCost} Lacs (PKR)</td>
                  <td className="actions">
                    <button>Send Email</button>
                    <button>Send Invoice</button>
                    <Link to={`/admin/contract/${c._id}`}>View</Link>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </section>
  );
};

export default Contracts;
