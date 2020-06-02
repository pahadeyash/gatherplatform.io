import React, { useState } from "react";
import { useRoutes, A } from "hookrouter";
import Routes from "./router/Routes.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  //pulling in defined routes within Routes.jsx
  //the selected route will be displayed through routeResult in return statement below
  const routeResult = useRoutes(Routes);

  return (
    <div id="app-wrapper">

      {routeResult}

      {/* <Navbar /> */}
    </div>
  );
}

export default App;
