import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

function Login() {
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");

  //function to update password in state everytime change happens
  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
    console.log("loginPassword: ", loginPassword);
  };

  //function to update email in state as user types
  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
    console.log("loginEmail: ", loginEmail);
  };

  return (
    <div id="login-wrapper">
      <form
        method="POST"
        action="/api/users/login"
        //  onSubmit={handleSubmit}
      >
        <h1 id="login-header">Login</h1>

        <div id="input-header-container">Email</div>

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

        <div id="input-header-container">Password</div>
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
          <button id="login-button" type="submit">
            Sign in
          </button>
        </div>
      </form>

      <div id="or-container">
        <div id="or-text">OR</div>
      </div>

      <div id="oauth-container">
        <div id="oauth-button">
          <img
            id="google-logo"
            src="https://gatherplatform.s3.us-east-2.amazonaws.com/img/google-icon.png"
          />
          <a href="/api/users/google" className="nav-selection">
            Google
          </a>
        </div>

        <div id="oauth-button" className="facebook">
          <img
            id="facebook-logo"
            src="https://gatherplatform.s3.us-east-2.amazonaws.com/img/facebook-icon.png"
          />
          <a
            id="facebook-link"
            href="/api/users/facebook"
            className="nav-selection"
          >
            Facebook
          </a>
        </div>
      </div>

      <div id="register-section">
        <div id="alternate-link-text">
          Don't have an account?
          <A id="a-link" href="/api/users/register">
            &nbsp; Sign Up
          </A>
        </div>
      </div>
    </div>
  );
}
export default Login;
