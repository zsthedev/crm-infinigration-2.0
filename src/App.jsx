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
          value: "/admin/finances/income",
          label: "Income",
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
        </Routes>
      </Router>

      <Toaster />
    </>
  );
};

export default App;
