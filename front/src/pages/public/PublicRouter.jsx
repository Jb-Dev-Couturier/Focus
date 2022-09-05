import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getUser } from '../../actions/user.actions';
import { Layout, Home, Profil, Trending } from '../../pages/public';
import PageError from '../../_utils/PageError';
import {
  LayoutAdmin,
  Dashboard,
  AdminProfil,
  PostsList,
  UsersList,
} from '../../pages/Admin';
import AuthAuthority from '../../_helpers/AuthAuthority';

const PublicRouter = ({ uid }) => {
  const dispatch = useDispatch();
  dispatch(getUser(uid));

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="home" element={<Home />} />
        <Route path="profil" element={<Profil />} />
        <Route path="trending" element={<Trending />} />

        <Route path="*" element={<PageError />} />
      </Route>

      <Route element={<LayoutAdmin />}>
        <Route
          index
          element={
            <AuthAuthority>
              <Dashboard />
            </AuthAuthority>
          }
        />
        <Route
          path="dashboard"
          element={
            <AuthAuthority>
              <Dashboard />
            </AuthAuthority>
          }
        />
        <Route
          path="profiladmin"
          element={
            <AuthAuthority>
              <AdminProfil />
            </AuthAuthority>
          }
        />
        <Route
          path="userslist"
          element={
            <AuthAuthority>
              <UsersList />
            </AuthAuthority>
          }
        />
        <Route
          path="postslist"
          element={
            <AuthAuthority>
              <PostsList />
            </AuthAuthority>
          }
        />

        <Route path="*" element={<PageError />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
