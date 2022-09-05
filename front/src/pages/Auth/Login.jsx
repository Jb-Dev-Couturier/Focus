import React, { useState } from 'react';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../_services/AuthActions';

const Log = (props) => {
  const loading = useSelector((state) => state.authReducer.loading);
  const [signUpModal, setsignUpModal] = useState(props.signup);
  const [signInModal, setsignInModal] = useState(props.signin);
  const [viewPass, setViewPass] = useState('password');
  const [confirmPass, setConfirmPass] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  //creation variable pour data
  const initialState = {
    pseudo: '',
    username: '',
    password: '',
    confirmpass: '',
  };
  const [data, setData] = useState(initialState);



  //modals de connection
  const handleModals = (e) => {
    if (e.target.id === 'register') {
      setsignInModal(false);
      setsignUpModal(true);
      resetForm();
    } else if (e.target.id === 'login') {
      setsignUpModal(false);
      setsignInModal(true);
      resetForm();
    }
  };
  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (signUpModal) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);

      setsignUpModal(false);
    } else {
      dispatch(logIn(data, navigate));
      setsignInModal(true);
    }
  };

  //voir ou ne pas voir le mdp
  const handleViewPass = () => {
    if (viewPass === 'password') {
      setViewPass('text');
    } else if (viewPass === 'text') {
      setViewPass('password');
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

            <form onSubmit={handleSubmit} id="sign-up-form">
              {signUpModal && (
                <>
                  <label htmlFor="pseudo">Pseudo</label>
                  <br />
                  <input
                    type="text"
                    name="pseudo"
                    id="pseudo"
                    value={data.pseudo}
                    onChange={handleChange}
                  />
                  <div className="pseudo error"></div>
                  <br />
                </>
              )}

              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                name="username"
                id="email"
                onChange={handleChange}
                value={data.username}
              />
              <div className="email error"></div>
              <br />
              <div className="box">
                <div className="inputBox">
                  <label htmlFor="password">Mot de passe</label>
                  <br />
                  <input
                    type={viewPass}
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={data.password}
                  />
                  <span id="togglebtn" onClick={handleViewPass}>
                    {viewPass === 'password' ? (
                      <RemoveRedEyeRoundedIcon />
                    ) : (
                      <VisibilityOffRoundedIcon />
                    )}
                  </span>
                </div>
                <div className="password error"></div>
                <br />
              </div>
              {signUpModal && (
                <>
                  <label htmlFor="confirmpass">Confirmer mot de passe</label>
                  <br />
                  <input
                    type={viewPass}
                    name="confirmpass"
                    id="password-conf"
                    onChange={handleChange}
                    value={data.confirmpass}
                  />
                  <div className="password-confirm error"></div>
                  <br />
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    J'accepte les{' '}
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      Conditions Générales
                    </a>
                  </label>
                  <div className="terms error"></div>
                  <br />
                </>
              )}

              <input
                type="submit"
                value={
                  loading
                    ? 'Chargement'
                    : signUpModal
                    ? 'Valider Inscription'
                    : 'Connection'
                }
                disabled={loading}
              />
            </form>
          </div>
        </div>
        <div className="img-container">
          <img src="../img/login.gif" alt="img-log" />
        </div>
      </div>
    </div>
  );
};

export default Log;
