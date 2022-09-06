import React from 'react';
import { useSelector } from 'react-redux';
import LeftNavAdmin from '../../components/Admin/LeftNavAdmin';
import MainDash from '../../components/Admin/MainDash';
import RightSideDash from '../../components/Admin/RightSide/RightSideDash';

const Dashboard = () => {

  
  return (
    <>
      <LeftNavAdmin />
      <div className="dashboard-body">
        <div className="adminGlass">
          <MainDash />
          <RightSideDash  />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
