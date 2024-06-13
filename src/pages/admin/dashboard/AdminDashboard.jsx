import React, { useEffect, useState } from "react";
import FilterLeads from "../../../componets/filter leads/FilterLeads";
import AdminData from "../../../componets/admin data/AdminData";
import "./admin-dashboard.scss";
import FilteredLeads from "../../../componets/filter leads/FilteredLeads";
import { useDispatch } from "react-redux";
import { getAllLeads } from "../../../redux/actions/leads";

const AdminDashboard = () => {
  const [date, setDate] = useState("");
  const [employee, setEmployee] = useState("");
  const [delay, setDelay] = useState("");

  console.log(date);
  console.log(employee);
  console.log(delay);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLeads());
  }, []);
  return (
    <section className="section" id="admin-dashboard">
      <FilterLeads
        date={date}
        onDateChange={(e) => setDate(e.target.value)}
        employee={employee}
        onEmployeeChange={setEmployee}
        delay={delay}
        onDelayChange={(e) => setDelay(e.target.value)}
      />

      {date != "" || employee != "" || delay != "" ? (
        <FilteredLeads date={date} delay={delay} employee={employee} />
      ) : (
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
      )}
    </section>
  );
};

export default AdminDashboard;
