import { Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../../../hooks";
import { Spin } from "antd";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [auth, loading] = useAuth();

  if (loading) {
    return <Spin />;
  }

  return auth?.isAuthenticated ? children : <Navigate to="/login" />;
};
