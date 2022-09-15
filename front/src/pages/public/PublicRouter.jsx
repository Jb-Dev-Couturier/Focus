import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { accountServices } from '../../_services/account.services';
import { useDispatch } from 'react-redux';
import { getUser } from '../../actions/user.actions';
import { Layout, Home, Profil, Trending } from '../../pages/public';
import PageError from '../../_utils/PageError';
import {
  LayoutAdmin,
  Dashboard,
  PostsList,
  UsersList,
} from '../../pages/Admin';
import AuthAuthority from '../../_helpers/AuthAuthority';
import { UidContext } from '../../components/AppContext';

const PublicRouter = () => {
  const userId = accountServices.getUserId();
  const dispatch = useDispatch();
  dispatch(getUser(userId));

  return (
    <UidContext.Provider value={userId}>

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
    </UidContext.Provider>
  );
};

export default PublicRouter;
