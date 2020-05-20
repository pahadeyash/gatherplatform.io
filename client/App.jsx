import React, { useState } from "react";
import { useRoutes, A } from "hookrouter";
import Routes from "./router/Routes.jsx";

function App() {
  //pulling in defined routes within Routes.jsx
  const routeResult = useRoutes(Routes);

  return (
    <div id="app-wrapper">
      Gather Platform
      <div id="explore-wrapper">Explore</div>
    </div>
  );
}

export default App;
