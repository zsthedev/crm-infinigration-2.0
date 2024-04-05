import React from "react";
import FilterLeads from "../../../componets/filter leads/FilterLeads";
import AdminData from "../../../componets/admin data/AdminData";
import "./admin-dashboard.scss";

const AdminDashboard = () => {
  return (
    <section className="section" id="admin-dashboard">
      <FilterLeads />
      <div className="admin-data-row">
        <AdminData description={"Total Leads"} number={"07"} />
        <AdminData description={"Pending Leads"} number={"03"} />
        <AdminData description={"Pending Tasks"} number={"03"} />
        <AdminData description={"Unread Communications"} number={"0"} />
        <AdminData description={"Total Profiles"} number={"02"} />
        <AdminData description={"Under Review Documents"} number={"05"} />
        <AdminData description={"Followup"} number={"01"} />
        <AdminData description={"Recommendations Given"} number={"05"} />
        <AdminData description={"Documents Pending"} number={"10"} />
        <AdminData description={"Document Submitted"} number={"06"} />
        <AdminData description={"Application Submitted"} number={"03"} />
        <AdminData description={"Offer Letter"} number={"05"} />
        <AdminData description={"Visa Process Started"} number={"15"} />
      </div>
    </section>
  );
};

export default AdminDashboard;
