import React from "react";
import ClientProfile from "../../../componets/client profile/ClientProfile";
import Select from "react-select";
import "./lead-activities.scss";
const LeadActivities = () => {
  return (
    <section className="section" id="lead-activities">
      <ClientProfile />
      <div className="selector">
        <Select placeholder={"Task Summary"} />
      </div>
    </section>
  );
};

export default LeadActivities;
