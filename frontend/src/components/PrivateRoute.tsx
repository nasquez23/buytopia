import { FC } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
