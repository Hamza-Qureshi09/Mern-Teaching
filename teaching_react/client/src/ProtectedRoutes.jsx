import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ auth }) => {
  return (
    <>
      {auth.activation === true && auth.login === true ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default ProtectedRoutes;
