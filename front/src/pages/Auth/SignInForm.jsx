import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [viewPass, setViewPass] = useState('password');

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');

    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}auth/login`,
      withCredentials: true,
      data: {
        username: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.username;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = '/';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleViewPass = () => {
    if (viewPass === 'password') {
      setViewPass('text');
    } else if (viewPass === 'text') {
      setViewPass('password');
    }
  };
  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span id="togglebtn" onClick={handleViewPass}>
            {viewPass === 'password' ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </span>
        </div>
        <div className="password error"></div>
        <br />
      </div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;
