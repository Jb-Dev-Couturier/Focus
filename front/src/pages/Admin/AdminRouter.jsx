import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LayoutAdmin, Dashboard, AdminProfil, PostsList ,UsersList} from '../../pages/Admin';
import PageError from '../../_utils/PageError';

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profil" element={<AdminProfil />} />
        <Route path="userslist" element={<UsersList />} />
        <Route path="postslist" element={<PostsList />} />

        <Route path="*" element={<PageError />} />
      </Route>
    </Routes>
  );
}

export default AdminRouter;
