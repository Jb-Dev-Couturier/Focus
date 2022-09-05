import { Navigate } from "react-router-dom";
import { accountServices } from "../_services/account.services";


const AuthAuthority = ({ children }) => {
  
  
  if (!accountServices.isAdmin()) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default AuthAuthority;