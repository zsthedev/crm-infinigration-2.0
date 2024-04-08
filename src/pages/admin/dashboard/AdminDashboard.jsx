import React from "react";
import FilterLeads from "../../../componets/filter leads/FilterLeads";
import AdminData from "../../../componets/admin data/AdminData";
import "./admin-dashboard.scss";

const AdminDashboard = () => {
  return (
    <section className="section" id="admin-dashboard">
      <FilterLeads />
      <div className="admin-data-row">
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Total Leads"}
          number={"07"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Pending Leads"}
          number={"03"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Pending Tasks"}
          number={"03"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Unread Communications"}
          number={"0"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Total Profiles"}
          number={"02"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Under Review Documents"}
          number={"05"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Followup"}
          number={"01"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Recommendations Given"}
          number={"05"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Documents Pending"}
          number={"10"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Document Submitted"}
          number={"06"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Application Submitted"}
          number={"03"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Offer Letter"}
          number={"05"}
        />
        <AdminData
          link={"/admin/leads/filtered"}
          description={"Visa Process Started"}
          number={"15"}
        />
      </div>
    </section>
  );
};

export default AdminDashboard;
