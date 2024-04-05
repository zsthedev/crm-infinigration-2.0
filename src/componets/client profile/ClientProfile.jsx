import React from "react";
import "./client-profile.scss";
import Select from "react-select";
const ClientProfile = () => {
  return (
    <div id="client-profile">
      <img src="" alt="" />
      <form action="">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name" />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="Phone" />
        </div>
        <div>
          <label htmlFor="">Assigne To</label>
          <input type="text" placeholder="Assigned To" />
        </div>

        <button className="primary-btn">Update</button>
      </form>

      <div className="cta">
        <Select placeholder="Status" />
      </div>
    </div>
  );
};

export default ClientProfile;
