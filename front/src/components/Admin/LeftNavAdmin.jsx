import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';

const LeftNavAdmin = () => {
  let pathname = window.location.pathname;
  useEffect(() => {
    // eslint-disable-next-line
    pathname = window.location.pathname;
  }, [window.location.pathname]);
  return (
    <div className="containerAdminNavLeft">
      <aside className="left-nav-container">
        <div className="icons">
          <nav className="icons-bis">
            <Link
              to="/admin/dashboard"
              className={`${
                pathname.match('/admin/dashboard')
                  ? 'active-left-nav-admin'
                  : ''
              }`}
            >
              <DashboardIcon className="iconsSVGAdmin" />
            </Link>
            <br />
            <Link
              to="/admin/profil"
              className={`${
                pathname.match('/admin/profil') ? 'active-left-nav-admin' : ''
              }`}
            >
              <Person2RoundedIcon className="iconsSVGAdmin" />
            </Link>
            <br />
            <Link
              to="/admin/userslist"
              className={`${
                pathname.match('/admin/userslist')
                  ? 'active-left-nav-admin'
                  : ''
              }`}
            >
              <ManageAccountsIcon className="iconsSVGAdmin" />
            </Link>
            <br />
            <Link
              to="/admin/postslist"
              className={`${
                pathname.match('/admin/postslist')
                  ? 'active-left-nav-admin'
                  : ''
              }`}
            >
              <RocketRoundedIcon className="iconsSVGAdmin" />
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default LeftNavAdmin;
