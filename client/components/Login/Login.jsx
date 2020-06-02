import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

function Login() {
  const [loginPassword, setLoginPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');

  //function to update password in state everytime change happens
  const handleLoginPasswordChange = e => {
    setLoginPassword(e.target.value);
    console.log('loginPassword: ', loginPassword);
  }

  //function to update email in state as user types
  const handleLoginEmailChange = e => {
    setLoginEmail(e.target.value);
    console.log('loginEmail: ', loginEmail);
  }

  return (
    <div id="login-wrapper">
      <form method="POST" action="/api/users/login"
      //  onSubmit={handleSubmit} 
      >
        <h1 id="login-header">Login</h1>

        <div id="input-header-container">
          Email
        </div>

        <div id="input-field-container">
          <input
            style={{ width: "100%" }}
            className="input-field"
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={handleLoginEmailChange}
          />
        </div>

        <div id="input-header-container">
          Password
        </div>
        <div id="input-field-container">
          <input
            style={{ width: "100%" }}
            className="input-field"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleLoginPasswordChange}
          />
        </div>

        <div id="single-button-container">
          <button id="login-button" type="submit">Sign in</button>
        </div>
      </form>

      <div id="register-section">
        Don't have an account?

        <A href="/api/users/signup">
          Sign Up
            </A>
      </div>
    </div>
  );
}
export default Login;
