import React from 'react';
import TopBarAdmin from '@/components/Admin/TopBarAdmin';
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
  return (
    <div className="LayoutAdmin">
      <TopBarAdmin />
      <div id="admin" className="Admin">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
