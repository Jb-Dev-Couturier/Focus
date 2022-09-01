import React from 'react';
import TopBarAdmin from '@/components/Admin/TopBarAdmin';
import LeftNavAdmin from '@/components/Admin/LeftNavAdmin';
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
  return (
    <div className="LayoutAdmin">
      <TopBarAdmin />
      <div className="home">
        <LeftNavAdmin />
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
