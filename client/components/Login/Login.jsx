import React, { useState, useEffect } from "react";

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
        <h1>Log in</h1>

        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={handleLoginEmailChange}
        />
        <br />

        <label>Password</label>
        <input
          type="text"
          name="password"
          onChange={handleLoginPasswordChange}
        />
        <br />

        <button type="submit">Log in</button>
      </form></div>
  );
}
export default Login;
