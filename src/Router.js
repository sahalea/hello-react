import React from "react";
import { Router } from "@reach/router";
import Dasboard from "./views/Dashboard";
import Components from "./views/Components";

const Root = () => {
  return (
    <Router>
      <Dasboard path="/" />
      <Components path="/component" />
    </Router>
  );
};

export default Root;
