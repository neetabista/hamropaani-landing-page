import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

import Banner from "./banner";

const App = () => {
  return (
    <>
      <Router>
        <Banner />
      </Router>
    </>
  );
};

export default App;
