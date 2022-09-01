import React from 'react'
import { Route, Routes } from 'react-router-dom';

import {Layout,Home,Profil,Trending} from '@/pages/public'
import PageError from '@/_utils/PageError';

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="home" element={<Home />} />
        <Route path="profil" element={<Profil />} />
        <Route path="trending" element={<Trending />} />

        <Route path="*" element={<PageError />} />
      </Route>
    </Routes>
  );
}

export default PublicRouter