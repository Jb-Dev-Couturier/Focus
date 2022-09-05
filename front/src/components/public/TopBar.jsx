import React from 'react';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';
import { accountServices } from '../../_services/account.services';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TopBar = () => {
  const userData = useSelector((state) => state.userReducer);
  let navigate = useNavigate();
  const logout = () => {
    accountServices.logout();
    navigate('/auth');
  };
  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <Link to={'/home'}>
              <div className="logo">
                <LanguageOutlinedIcon />
                <h3>Groupomania</h3>
              </div>
            </Link>
          </div>
          <ul>
            <li></li>
            <li className="welcome">
              <Link to="/profil">
                <h5>Bienvenue : {userData.pseudo}</h5>
              </Link>
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

export default TopBar;
