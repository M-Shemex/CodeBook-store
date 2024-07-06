import { Navigate } from "react-router-dom";
import { Cart } from "../pages";
export const ProtectedRoute = ({ children }) => {
  return sessionStorage.getItem("token") ? children : <Navigate to="/login" />;
};
