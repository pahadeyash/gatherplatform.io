import React, { useState, useEffect } from "react";

function Signup() {
    // const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    //function to update password in state everytime change happens
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log('this is current password in state: ', password);
    }

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

                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={handleEmailChange}
                // value={values.name}
                />
                <br />

                <label>Password</label>
                <input
                    type="text"
                    name="password"
                    onChange={handlePasswordChange}
                // value={values.lastName}
                />
                <br />

                <label>Confirm Password</label>
                <input
                    type="text"
                    name="password"
                    onChange={handlePasswordChange}
                // value={values.age}
                />
                <br />
                <button type="submit">Submit</button>
            </form></div>
    );
}

export default Signup;
