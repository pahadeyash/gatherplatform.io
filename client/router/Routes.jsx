import React from "react";
import Explore from "../components/Explore.jsx";
import Login from "../components/Login/Login.jsx";
import Signup from "../components/SignUp/Signup.jsx";

//all routes for navbar will be defined here
const routes = {
    "/": () => <Explore />,
    "/api/users/login": () => <Login />,
    "/api/users/register": () => <Signup />
};

export default routes;