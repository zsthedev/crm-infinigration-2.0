import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
