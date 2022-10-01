import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Tooltip, {tooltipClasses } from '@mui/material/Tooltip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';


//tooltip (material icon)
const TextTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgb(0, 145, 255)',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgb(0, 145, 255)',
    color: 'rgba(244, 244, 244, 0.816)',
  },
}));

const LeftNavAdmin = () => {
  let pathname = window.location.pathname;
  useEffect(() => {
    // eslint-disable-next-line
    pathname = window.location.pathname;
  }, [window.location.pathname]);
  return (
    <div className="containerAdminNavLeft">
      <aside className="left-nav-container-admin">
        <div className="icons">
          <nav className="icons-bis">
            <TextTooltip title="Dashboard" placement="right">
              <Link
                to="/dashboard"
                className={`${
                  pathname.match('/dashboard') ? 'active-left-nav-admin' : ''
                }`}
              >
                <DashboardIcon className="iconsSVGAdmin" />
              </Link>
            </TextTooltip>

            <br />
            <TextTooltip title="Liste Utilisateur" placement="right">
              <Link
                to="/userslist"
                className={`${
                  pathname.match('/userslist') ? 'active-left-nav-admin' : ''
                }`}
              >
                <ManageAccountsIcon className="iconsSVGAdmin" />
              </Link>
            </TextTooltip>
            <br />
            <TextTooltip title="Liste des Posts" placement="right">
              <Link
                to="/postslist"
                className={`${
                  pathname.match('/postslist') ? 'active-left-nav-admin' : ''
                }`}
              >
                <RocketRoundedIcon className="iconsSVGAdmin" />
              </Link>
            </TextTooltip>
            <br />
            <TextTooltip title="Accueil" placement="right">
              <Link
                to="/home"
                className={`${
                  pathname.match('/home') ? 'active-left-nav-admin' : ''
                }`}
              >
                <HomeRoundedIcon className="iconsSVGAdmin" />
              </Link>
            </TextTooltip>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default LeftNavAdmin;
