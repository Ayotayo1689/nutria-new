import React, { FC, } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authRoutes,} from "routes/index.routes";


const PrivateRoutes: FC = (props) => {
  let isAuthenticated = localStorage.getItem("token")
  return isAuthenticated ? <Outlet /> : <Navigate to={authRoutes.login} />;
};

export default PrivateRoutes;
