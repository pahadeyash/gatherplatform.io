import React, { useState, useEffect } from "react";

function Signup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');

    //function to update password in state everytime change happens
    const handleNameChange = e => {
        setName(e.target.value);
        console.log('this is current name in state: ', name);
    }

    //function to update password in state everytime change happens
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log('this is current password in state: ', password);
    }

    //function to update password in state everytime change happens
    const handlePassword2Change = e => {
        setPassword2(e.target.value);
        console.log('this is current password2 in state: ', password2);
    }

    //function to update email in state as user types
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log('this is the current email in state: ', email);
    }

    return (
        <div id="signup-wrapper">
            <form method="POST" action="/api/users/register"
            //  onSubmit={handleSubmit} 
            >
                <h1 id="signup-header">Sign Up</h1>


                <div id="input-header-container">
                    Name
                </div>

                <div id="input-field-container">
                    <input
                        style={{ width: "100%" }}
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        onChange={handleNameChange}
                    />
                </div>

                <div id="input-header-container">
                    Email
                </div>

                <div id="input-field-container">
                    <input
                        style={{ width: "100%" }}
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleEmailChange}
                    />
                </div>

                <div id="input-header-container">
                    Password
                </div>
                <div id="input-field-container">
                    <input
                        style={{ width: "100%" }}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={handlePasswordChange}
                    />
                </div>

                <div id="input-header-container">
                    Confirm Password
                </div>
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
                    <button id="signup-button" type="submit">Sign up</button>
                </div>

            </form></div>
    );
}

export default Signup;
