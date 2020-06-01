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
                <h1>Sign Up</h1>


                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleNameChange}
                />
                <br />

                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={handleEmailChange}
                />
                <br />

                <label>Password</label>
                <input
                    type="text"
                    name="password"
                    onChange={handlePasswordChange}
                />
                <br />

                <label>Confirm Password</label>
                <input
                    type="text"
                    name="password2"
                    onChange={handlePassword2Change}
                />
                <br />
                <button type="submit">Sign up</button>
            </form></div>
    );
}

export default Signup;
