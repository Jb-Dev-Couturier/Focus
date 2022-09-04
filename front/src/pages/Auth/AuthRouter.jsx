import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';
import PageError from '../../_utils/PageError';

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Login signin={false} signup={true} />} />
      <Route path="login" element={<Login signin={false} signup={true} />} />
      <Route path="*" element={<PageError />} />
    </Routes>
  );
}

export default AuthRouter