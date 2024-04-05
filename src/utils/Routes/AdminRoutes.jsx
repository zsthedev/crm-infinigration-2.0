import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../../pages/admin/dashboard/AdminDashboard";
import Sidebar from "../../componets/sidebar/Sidebar";
import { LuLayoutDashboard } from "react-icons/lu";
import Settings from "../../pages/admin/settings/Settings";
import LeadSettings from "../../pages/admin/settings/LeadSettings";
import EmployeeSettings from "../../pages/admin/settings/EmployeeSettings";
import AdminLeads from "../../pages/admin/leads/AdminLeads";
import LeadActivities from "../../pages/admin/leads/LeadActivities";
import AbroadQuestions from "../../pages/admin/settings/AbroadQuestions";
import AddQuestions from "../../pages/admin/settings/AddQuestions";
import Contracts from "../../pages/admin/contracts/Contracts";
import AdminInvoices from "../../pages/admin/invoices/AdminInvoices";
const AdminRoutes = () => {
  const routes = [
    {
      value: "/admin/dashboard",
      label: "Dashboard",
      icon: { LuLayoutDashboard },
    },
    { value: "/admin/leads", label: "Leads", icon: { LuLayoutDashboard } },
    {
      value: "/admin/contracts",
      label: "Contracts",
      icon: { LuLayoutDashboard },
    },
    {
      value: "/admin/invoices",
      label: "Invoices",
      icon: { LuLayoutDashboard },
    },
    {
      value: "/admin/programs",
      label: "Programs",
      icon: { LuLayoutDashboard },
    },
    { value: "/admin/finances", label: "Finance", icon: { LuLayoutDashboard } },
    { value: "/admin/reports", label: "Reports", icon: { LuLayoutDashboard } },
    {
      value: "/admin/settings",
      label: "Settings",
      icon: { LuLayoutDashboard },
    },
  ];
  return (
    <Router>
      <Routes>
        <Route
          path="/admin/dashboard"
          element={<Sidebar navLists={routes} component={AdminDashboard} />}
        />

        <Route
          path="/admin/settings"
          element={
            <Sidebar
              navLists={routes}
              component={Settings}
              pageTitle="Settings"
            />
          }
        />

        <Route
          path="/admin/settings/leads"
          element={
            <Sidebar
              navLists={routes}
              component={LeadSettings}
              pageTitle="Leads Settings"
            />
          }
        />

        <Route
          path="/admin/settings/employees"
          element={
            <Sidebar
              navLists={routes}
              component={EmployeeSettings}
              pageTitle="Employee Settings"
            />
          }
        />

        <Route
          path="/admin/leads"
          element={
            <Sidebar
              navLists={routes}
              component={AdminLeads}
              pageTitle="Leads"
            />
          }
        />

        <Route
          path="/admin/settings/abroad-questions"
          element={
            <Sidebar
              navLists={routes}
              component={AbroadQuestions}
              pageTitle="Abroad Questions"
            />
          }
        />

        <Route
          path="/admin/settings/abroad-questions/:id"
          element={
            <Sidebar
              navLists={routes}
              component={AddQuestions}
              pageTitle="Add Questions"
            />
          }
        />

        <Route
          path="/admin/leads/:id/activities"
          element={
            <Sidebar
              navLists={routes}
              component={LeadActivities}
              pageTitle="Lead Activities"
            />
          }
        />

        <Route
          path="/admin/contracts"
          element={
            <Sidebar
              navLists={routes}
              component={Contracts}
              pageTitle="Contracts"
            />
          }
        />

        <Route
          path="/admin/invoices"
          element={
            <Sidebar
              navLists={routes}
              component={AdminInvoices}
              pageTitle="Invoices"
            />
          }
        />

        <Route
          path="/admin/programs"
          element={
            <Sidebar
              navLists={routes}
              component={AdminInvoices}
              pageTitle="Programs"
            />
          }
        />

        <Route
          path="/admin/finances"
          element={
            <Sidebar
              navLists={routes}
              component={AdminInvoices}
              pageTitle="Finances"
            />
          }
        />

        <Route
          path="/admin/reports"
          element={
            <Sidebar
              navLists={routes}
              component={AdminInvoices}
              pageTitle="Reports"
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
