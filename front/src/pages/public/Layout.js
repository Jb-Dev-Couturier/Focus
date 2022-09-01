import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '@/components/public/TopBar'


const Layout = () => {
  return (
    <div className='Layout'>
        <TopBar/>
        
        <Outlet/>
    </div>
  )
}

export default Layout