import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import {Layout,Home,Profil,Trending} from '../../pages/public'
import PageError from '../../_utils/PageError';
import { LayoutAdmin, Dashboard, AdminProfil, PostsList ,UsersList} from '../../pages/Admin';

const PublicRouter = () => {
  const admin = useSelector((state) => state.authReducer.authData);
  return (
    <Routes>
      {!admin.userAdmin && (
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="home" element={<Home />} />
          <Route path="profil" element={<Profil />} />
          <Route path="trending" element={<Trending />} />

          <Route path="*" element={<PageError />} />
        </Route>
      )}
      {admin.userAdmin && (
        <Route element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profil" element={<AdminProfil />} />
          <Route path="userslist" element={<UsersList />} />
          <Route path="postslist" element={<PostsList />} />

          <Route path="*" element={<PageError />} />
        </Route>
      )}
    </Routes>
  );
}

export default PublicRouter