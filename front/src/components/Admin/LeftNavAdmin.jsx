import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';

const LeftNavAdmin = () => {
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
            to="/"
            className={`${pathname.match('/') ? 'active-left-nav' : ''}`}
          >
            <HomeRoundedIcon className="iconsSVG" />
          </Link>
          <br />
          <Link
            to="/"
            className={`${pathname.match('/') ? 'active-left-nav' : ''}`}
          >
            <Person2RoundedIcon className="iconsSVG" />
          </Link>
          <br />
          <Link
            to="/"
            className={`${
              pathname.match('/') ? 'active-left-nav' : ''
            }`}
          >
            <RocketRoundedIcon className="iconsSVG" />
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default LeftNavAdmin;
