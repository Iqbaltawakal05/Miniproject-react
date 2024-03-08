import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return <Navigate to="/Login" />;
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;