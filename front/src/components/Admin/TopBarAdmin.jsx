import React from 'react';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';

const TopBarAdmin = () => {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <Link to={'/admin/'}>
              <div className="logo">
                <LanguageOutlinedIcon />
                <h3>Groupomania</h3>
              </div>
            </Link>
          </div>
          <ul>
            <li></li>
            <li className="welcome">
              <h5>Bienvenue Administrateur</h5>
            </li>
            <LogoutRoundedIcon />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default TopBarAdmin;
