import React from "react";
import Explore from "../components/Explore.jsx";
import Login from "../components/Login.jsx";

//all routes for navbar will be defined here
const routes = {
    "/": () => <Explore />,
    "/Login": () => <Login />
};

export default routes;