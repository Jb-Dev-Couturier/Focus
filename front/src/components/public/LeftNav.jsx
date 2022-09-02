import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';

const LeftNav = () => {
  let pathname = window.location.pathname;
  useEffect(() => {
    // eslint-disable-next-line
    pathname = window.location.pathname;
  }, [window.location.pathname]);
  return (
    <aside className="left-nav-container">
      <div className="icons">
        <nav className="icons-bis">
          <Link
            to="/public/home"
            className={`${
              pathname.match('/public/home') ? 'active-left-nav' : ''
            }`}
          >
            <HomeRoundedIcon className="iconsSVG" />
          </Link>
          <br />
          <Link
            to="/public/profil"
            className={`${
              pathname.match('/public/profil') ? 'active-left-nav' : ''
            }`}
          >
            <Person2RoundedIcon className="iconsSVG" />
          </Link>
          <br />
          <Link
            to="/public/trending"
            className={`${
              pathname.match('/public/trending') ? 'active-left-nav' : ''
            }`}
          >
            <RocketRoundedIcon className="iconsSVG" />
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default LeftNav;
