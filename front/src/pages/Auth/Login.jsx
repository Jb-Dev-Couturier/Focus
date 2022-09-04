import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Log = (props) => {
  const [signUpModal, setsignUpModal] = useState(props.signup);
  const [signInModal, setsignInModal] = useState(props.signin);

  const handleModals = (e) => {
    if (e.target.id === 'register') {
      setsignInModal(false);
      setsignUpModal(true);
    } else if (e.target.id === 'login') {
      setsignUpModal(false);
      setsignInModal(true);
    }
  };

  return (
    <div className="Login-page">
      <div className="title_login">
        <span>
          <LanguageOutlinedIcon />
        </span>
        <h1> Groupomania</h1>
      </div>
      <div className="log-container">
        <div className="connection-form">
          <div className="form-container">
            <ul>
              <li
                onClick={handleModals}
                id="register"
                className={signUpModal ? 'active-btn' : null}
              >
                S'inscrire
              </li>
              <li
                onClick={handleModals}
                id="login"
                className={signInModal ? 'active-btn' : null}
              >
                Se connecter
              </li>
            </ul>

            {signUpModal && <SignUpForm />}
            {signInModal && <SignInForm />}
          </div>
        </div>
        <div className="img-container">
          <img src="./img/login.gif" alt="img-log" />
        </div>
      </div>
    </div>
  );
};

export default Log;
