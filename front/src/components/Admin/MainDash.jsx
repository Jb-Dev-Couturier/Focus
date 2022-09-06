import React from 'react'
import CardDashboard from './CardDashboard/CardDashboard'

import TableUsers from './TableUsers/TableUsers'

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>DashBoard</h1>
        <CardDashboard/>
        <TableUsers/>
    </div>
  )
}

export default MainDash