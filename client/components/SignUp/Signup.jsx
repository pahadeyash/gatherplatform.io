import React from "react";

function Signup() {
    // const [name, setName] = useState('');
    // const [password, password] = useState('');
    // const [email, setEmail] = useState('');


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
                // onChange={handleChange}
                // value={values.name}
                />
                <br />

                <label>Password</label>
                <input
                    type="text"
                    name="password"
                // onChange={handleChange}
                // value={values.lastName}
                />
                <br />

                <label>Confirm Password</label>
                <input
                    type="text"
                    name="password"
                // onChange={handleChange}
                // value={values.age}
                />
                <br />
                <button type="submit">Submit</button>
            </form></div>
    );
}

export default Signup;
