import { Route, Routes, Navigate } from 'react-router-dom';
import PublicRouter from './public/PublicRouter';
import AdminRouter from './Admin/AdminRouter';
import Login from './Auth/Login';
import { useSelector } from 'react-redux';

const IndexRoutes = (uid) => {
  const user = useSelector((state) => state.authReducer.authData);
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? (
            <Navigate to={user ? '../admin' : '../public'} />
          ) : (
            <Navigate to="auth" />
          )
        }
      />
      <Route
        path="/public/*"
        element={user ? <PublicRouter /> : <Navigate to="../auth" />}
      />

      <Route
        path="/auth"
        element={
          user ? (
            <Navigate to={user ? '../admin' : '../public'} />
          ) : (
            <Login signin={false} signup={true} uid={uid} />
          )
        }
      />

      <Route
        path="/admin/*"
        element={user ? <AdminRouter /> : <Navigate to="../auth" />}
      />
    </Routes>
  );
};

export default IndexRoutes;
