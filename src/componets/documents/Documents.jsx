import React from "react";
import "./documents.scss";
const Documents = ({ programs}) => {
  console.log(programs)
  return (
    <section className="section" id="documents">
      <h2 className="heading">Documents</h2>
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {programs && programs.documents.length > 0
            ? programs.documents.map((d, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{d.title}</td>
                  <td>{d.status}</td>
                  <td className="actions">
                    <button>Upload</button>
                    <button>Approve</button>
                    <button>Decline</button>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </section>
  );
};

export default Documents;
