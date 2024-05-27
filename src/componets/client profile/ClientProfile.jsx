import React, { useState } from "react";
import "./client-profile.scss";
import Select from "react-select";
const ClientProfile = ({ client }) => {
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [phone, setPhone] = useState(client.phone);
  const [assignedTo, setAssignedTo] = useState(client.phone);
  return (
    <div id="client-profile">
      <div className="img-box">
        <img src="" alt="" />
        <input type="file" />
        <button className="primary-btn">Update Picture</button>
      </div>
      <form action="">
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Assigne To</label>
          <input type="text" placeholder="Assigned To" readOnly/>
        </div>

        <button className="primary-btn">Update</button>
      </form>

      {/* <div className="cta">
        <Select placeholder="Status" />
      </div> */}
    </div>
  );
};

export default ClientProfile;
