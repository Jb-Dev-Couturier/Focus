import { Navigate } from "react-router-dom";


const AuthGuard = (props) => {
    const {children} = props
    let logged = false
     if(!logged){
        return <Navigate to='/auth/login'/>
     }
  return children;
}

export default AuthGuard