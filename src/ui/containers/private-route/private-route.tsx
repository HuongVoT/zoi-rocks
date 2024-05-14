import { Navigate, useLocation } from "react-router-dom";
import React from "react";

export const PrivateRoute: React.FC = () => {
  const isAuthenticated = false;
  const location = useLocation();

  return isAuthenticated ? (
    <Navigate to="/kudos-album" replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
