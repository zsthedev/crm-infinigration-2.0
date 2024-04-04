import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../../pages/admin/dashboard/AdminDashboard";
import Sidebar from "../../componets/sidebar/Sidebar";
import { LuLayoutDashboard } from "react-icons/lu";
const AdminRoutes = () => {
  const routes = [
    {
      value: "/admin/dashboard",
      label: "Dashboard",
      icon: { LuLayoutDashboard },
    },
    { value: "/admin/leads", label: "Leads", icon: { LuLayoutDashboard } },
    { value: "/admin/leads", label: "Contracts", icon: { LuLayoutDashboard } },
    { value: "/admin/leads", label: "Invoices", icon: { LuLayoutDashboard } },
    { value: "/admin/leads", label: "Programs", icon: { LuLayoutDashboard } },
    { value: "/admin/leads", label: "Finance", icon: { LuLayoutDashboard } },
    { value: "/admin/leads", label: "Reports", icon: { LuLayoutDashboard } },
    { value: "/admin/leads", label: "Employees", icon: { LuLayoutDashboard } },
  ];
  return (
    <Router>
      <Routes>
        <Route
          path="/admin/dashboard"
          element={<Sidebar navLists={routes} component={AdminDashboard} />}
        />
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
