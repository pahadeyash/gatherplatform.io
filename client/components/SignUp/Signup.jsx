import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  //function to update password in state everytime change happens
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log("this is current name in state: ", name);
  };

  //function to update password in state everytime change happens
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("this is current password in state: ", password);
  };

  //function to update password in state everytime change happens
  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
    console.log("this is current password2 in state: ", password2);
  };

  //function to update email in state as user types
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("this is the current email in state: ", email);
  };

  return (
    <div id="signup-wrapper">
      <form
        method="POST"
        action="/api/users/register"
        //  onSubmit={handleSubmit}
      >
        <h1 id="signup-header">Sign Up</h1>

        <div id="input-header-container">Name</div>

        <div id="input-field-container">
          <input
            style={{ width: "100%" }}
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleNameChange}
          />
        </div>

        <div id="input-header-container">Email</div>

        <div id="input-field-container">
          <input
            style={{ width: "100%" }}
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
        </div>

        <div id="input-header-container">Password</div>
        <div id="input-field-container">
          <input
            style={{ width: "100%" }}
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handlePasswordChange}
          />
        </div>

        <div id="input-header-container">Confirm Password</div>
        <div id="input-field-container">
          <input
            style={{ width: "100%" }}
            type="password"
            name="password2"
            placeholder="Re-enter password"
            onChange={handlePassword2Change}
          />
        </div>

        <div id="terms-container">
          By signing up, you are accepting our terms & conditions
        </div>

        <div id="single-button-container">
          <button id="login-button" type="submit">
            Sign up
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
          Have an account?
          <A href="/api/users/login">Log in</A>
        </div>
      </div>
    </div>
  );
}

export default Signup;
