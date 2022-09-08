import React from 'react';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';
import { accountServices } from '../../_services/account.services';
import { useNavigate } from 'react-router-dom';

const TopBarAdmin = () => {
  let navigate = useNavigate();
  const logout = () => {
    accountServices.logout();
    navigate('/auth');
  };
  return (
    <header className="adminNavBar">
      <nav>
        <div className="nav-container">
          <div className="logo">
            <Link to={'/'}>
              <div className="logo">
                <LanguageOutlinedIcon />
                <h3>Groupomania</h3>
              </div>
            </Link>
          </div>
          <ul>
            <li></li>
            <li className="welcome">
              <h5>Dashboard Administrateur</h5>
            </li>
            <span onClick={logout}>
              <LogoutRoundedIcon className="logOut" />
            </span>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default TopBarAdmin;
