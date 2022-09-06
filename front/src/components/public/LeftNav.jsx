import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';


//tooltip (material icon)
const TextTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));


const LeftNav = () => {
   const userData = useSelector((state) => state.userReducer);
  let pathname = window.location.pathname;
  useEffect(() => {
    // eslint-disable-next-line
    pathname = window.location.pathname;
  }, [window.location.pathname]);
  return (
    <aside className="left-nav-container">
      <div className="icons">
        <nav className="icons-bis">
          <TextTooltip title="Accueil" placement="right">
            <Link
              to="/home"
              className={`${pathname.match('/home') ? 'active-left-nav' : ''}`}
            >
              <HomeRoundedIcon className="iconsSVG" />
            </Link>
          </TextTooltip>
          <br />
          <TextTooltip title="Profil" placement="right">
            <Link
              to="/profil"
              className={`${
                pathname.match('/profil') ? 'active-left-nav' : ''
              }`}
            >
              <Person2RoundedIcon className="iconsSVG" />
            </Link>
          </TextTooltip>
          <br />
          <TextTooltip title="Top Tendances" placement="right">
            <Link
              to="/trending"
              className={`${
                pathname.match('/trending') ? 'active-left-nav' : ''
              }`}
            >
              <RocketRoundedIcon className="iconsSVG" />
            </Link>
          </TextTooltip>
          <br />
          {userData.isAdmin === true && (
            <TextTooltip title="Dashboard" placement="right">
              <Link
                to="/dashboard"
                className={`${
                  pathname.match('/dashboard') ? 'active-left-nav' : ''
                }`}
              >
                <DashboardIcon className="iconsSVG" />
              </Link>
            </TextTooltip>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default LeftNav;
