import { Navigate } from "react-router-dom";
import { accountServices } from "../_services/account.services";


const AuthGuard = ({ children }) => {
  if (!accountServices.isLogged()) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

export default AuthGuard