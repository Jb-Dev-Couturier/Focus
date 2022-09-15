import React from 'react'
import CardDashboard from './CardDashboard/CardDashboard'

import TableUsers from './TableUsers/TableUsers'
import TablePosts from './tablePost/TablePost';

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>DashBoard</h1>
      <CardDashboard />
      <TableUsers />
      <TablePosts />
    </div>
  );
}

export default MainDash