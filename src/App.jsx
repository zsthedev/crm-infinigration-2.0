import React, { useEffect } from "react";
import AdminRoutes from "./utils/Routes/AdminRoutes";
import MarketingRoutes from "./utils/Routes/MarketingRoutes";
import "./style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./pages/loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";
import { loadUser } from "./redux/actions/auth";
import { LuLayoutDashboard } from "react-icons/lu";
import Sidebar from "./componets/sidebar/Sidebar";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import Settings from "./pages/admin/settings/Settings";
import LeadSettings from "./pages/admin/settings/LeadSettings";
import EmployeeSettings from "./pages/admin/settings/EmployeeSettings";
import AdminLeads from "./pages/admin/leads/AdminLeads";
import AbroadQuestions from "./pages/admin/settings/AbroadQuestions";
import AddQuestions from "./pages/admin/settings/AddQuestions";
import LeadActivities from "./pages/admin/leads/LeadActivities";
import Contracts from "./pages/admin/contracts/Contracts";
import AdminInvoices from "./pages/admin/invoices/AdminInvoices";
import Programs from "./pages/admin/programs/Programs";
import AdminFinances from "./pages/admin/finances/AdminFinances";
import Reports from "./pages/admin/reports/Reports";
import FilteredLeads from "./pages/admin/leads/FilteredLeads";
import AddLeads from "./pages/admin/leads/AddLeads";
import CreateContract from "./pages/admin/contracts/CreateContract";
import AddNewProgram from "./pages/admin/programs/AddNewProgram";
import AddNewEmployee from "./pages/admin/settings/employees/AddNewEmployee";
import ChangePassword from "./pages/admin/settings/employees/ChangePassword";
import EmployeeProfile from "./pages/admin/settings/employees/EmployeeProfile";
import ProgramDetails from "./pages/admin/programs/ProgramDetails";
import PaymentsReceived from "./pages/admin/finances/PaymentsReceived";
import CreditNotes from "./pages/admin/finances/CreditNotes";
import PaymentsMade from "./pages/admin/finances/PaymentsMade";
import Bills from "./pages/admin/finances/Bills";
import Expense from "./pages/admin/finances/Expense";
const App = () => {
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
    {
      value: "/admin/finances",
      label: "Finance",
      icon: { LuLayoutDashboard },
      subLinks: [
        {
          value: "/admin/finances/payments-received",
          label: "Payments Received",
        },

        {
          value: "/admin/finances/credit-notes",
          label: "Credit Notes",
        },

        {
          value: "/admin/finances/expense",
          label: "Expenses",
        },

        {
          value: "/admin/finances/bills",
          label: "Bills",
        },

        {
          value: "/admin/finances/payments-made",
          label: "Payments Made",
        },

        {
          value: "/admin/finances/vendor-credits",
          label: "Vendor Credits",
        },
      ],
    },
    { value: "/admin/reports", label: "Reports", icon: { LuLayoutDashboard } },
    {
      value: "/admin/settings",
      label: "Settings",
      icon: { LuLayoutDashboard },
    },
  ];
  const { loading, error, message, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const user = useSelector((state) => state.user.auth?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect={
                  user && user.role === "admin" ? "/admin/dashboard" : "/"
                }
              >
                <Login />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect={
                  user && user.role === "admin" ? "/admin/dashboard" : "/login"
                }
              >
                <Login />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
                <Sidebar navLists={routes} component={AdminDashboard} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={Settings}
                  pageTitle="Settings"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings/leads"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={LeadSettings}
                  pageTitle="Leads Settings"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings/employees"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={EmployeeSettings}
                  pageTitle="Employee Settings"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings/employees/add"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={AddNewEmployee}
                  pageTitle="Add New Employee"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings/employees/:id/changepassword"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={ChangePassword}
                  pageTitle="Change Password"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings/employees/:id/profile"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={EmployeeProfile}
                  pageTitle="Profile Settings"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/leads"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={AdminLeads}
                  pageTitle="Leads"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings/abroad-questions"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={AbroadQuestions}
                  pageTitle="Abroad Questions"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings/abroad-questions/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={AddQuestions}
                  pageTitle="Add Questions"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/leads/:id/activities"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={LeadActivities}
                  pageTitle="Lead Activities"
                />
              </ProtectedRoute>
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
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={AdminInvoices}
                  pageTitle="Invoices"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/programs"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={Programs}
                  pageTitle="Programs"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/program/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={ProgramDetails}
                  pageTitle="Programs"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/finances"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={AdminFinances}
                  pageTitle="Finances"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/finances/payments-received"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={PaymentsReceived}
                  pageTitle="Payments Received"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/finances/credit-notes"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={CreditNotes}
                  pageTitle="Credit Notes"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/finances/expense"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={Expense}
                  pageTitle="Expenses"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/finances/bills"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={Bills}
                  pageTitle="Bills"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/finances/payments-made"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={PaymentsMade}
                  pageTitle="Payments Made"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/finances/vendor-credits"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={CreditNotes}
                  pageTitle="Vendor Credits"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/reports"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={Reports}
                  pageTitle="Reports"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/leads/filtered"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={FilteredLeads}
                  pageTitle="Total Leads"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/leads/add"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={AddLeads}
                  pageTitle="Create New Lead"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/contracts/add"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={CreateContract}
                  pageTitle="Create New Contract"
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/programs/add"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                redirect="/"
                redirectAdmin="/"
              >
                <Sidebar
                  navLists={routes}
                  component={AddNewProgram}
                  pageTitle="Create New Program"
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>

      <Toaster />
    </>
  );
};

export default App;
