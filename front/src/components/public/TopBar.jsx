import React from 'react';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <Link to={'/public/home'}>
              <div className="logo">
                <LanguageOutlinedIcon />
                <h3>Groupomania</h3>
              </div>
            </Link>
          </div>
          <ul>
            <li></li>
            <li className="welcome">
              <Link to="/public/profil">
                <h5>Bienvenue .....</h5>
              </Link>
            </li>
            <LogoutRoundedIcon />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
