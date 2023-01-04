import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

const Private = ({ children }) => {
  const { loggedIn } = useAuth();
  return loggedIn ? children : <Navigate to={"/login"} />;
};

export default Private;
