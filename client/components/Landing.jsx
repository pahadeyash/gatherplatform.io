import React from "react";
import { A } from "hookrouter";

function Landing() {
    return (
        <div id="landing-wrapper">
            <div id="landing-header">
                GATHER
            </div>

            <div id="buttons-container">
                <div id="landing-login-button-container">
                    <A href="/api/users/login" id="landing-login-button" className="nav-selection">
                        Login
                </A>
                </div>

                <A href="/api/users/register" id="landing-signup-button" className="nav-selection">
                    Sign Up
            </A>
            </div >
        </div >
    );
}

export default Landing;
