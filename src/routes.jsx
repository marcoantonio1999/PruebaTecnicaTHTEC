import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/access/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
      </Routes>
    </Router>
  );
}
