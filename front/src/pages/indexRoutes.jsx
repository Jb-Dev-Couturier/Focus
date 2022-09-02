import { Route, Routes } from 'react-router-dom';
import PublicRouter from './public/PublicRouter';
import AdminRouter from './Admin/AdminRouter';
import Login from './Auth/Login';

const IndexRoutes = (uid) => {
  return (
    <Routes>
      <Route path="/" element={<Login signin={false} signup={true} uid={uid}/>} />

      <Route path="/public/*" element={<PublicRouter />} />
      <Route path="/admin/*" element={<AdminRouter />} />
    </Routes>
  );
};

export default IndexRoutes;
