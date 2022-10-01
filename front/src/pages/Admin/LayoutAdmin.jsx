import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
  return (
    <div className="LayoutAdmin">
      
      <div id="admin" className="Admin-Outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
