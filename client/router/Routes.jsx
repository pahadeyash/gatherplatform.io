import React from "react";
import Explore from "../components/Explore.jsx";
import Login from "../components/Login/Login.jsx";
import Signup from "../components/SignUp/Signup.jsx";
import Landing from "../components/Landing.jsx";

//all routes for navbar will be defined here
const routes = {
    "/": () => <Landing />,
    "/api/users/login": () => <Login />,
    "/api/users/register": () => <Signup />
};

export default routes;