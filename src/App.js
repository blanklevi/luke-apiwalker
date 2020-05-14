import React from "react";
import "./App.css";
import { Redirect, Router } from "@reach/router";

import Homepage from "./views/Homepage";
import People from "./views/People";
import Planets from "./views/Planets";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
