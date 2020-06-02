import React from "react";
import { useRoutes, A } from "hookrouter";
import Routes from "../router/Routes.jsx";

const Navbar = () => {
    //allows for switch between different routes
    //<A/> is preset to make the switch between routes through hookrouter
    const routeResult = useRoutes(Routes);

    return (
        <div id="navbar-wrapper">
            <div id="nav-selection-container">

                <A href="/" className="nav-selection" >
                    Explore
            </A>

                <A href="/api/users/login" className="nav-selection"  >
                    Login
            </A>


                <A href="/api/users/register" className="nav-selection"  >
                    Signup
            </A>

            </div>
        </div>
    )
}

export default Navbar;