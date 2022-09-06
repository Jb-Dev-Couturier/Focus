import React from 'react';
import LeftNavAdmin from '../../components/Admin/LeftNavAdmin';
import MainDash from '../../components/Admin/MainDash';

const Dashboard = () => {
  return (
    <>
      <LeftNavAdmin />
      <div className="dashboard-body">
        <div className="adminGlass">
          <MainDash/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
