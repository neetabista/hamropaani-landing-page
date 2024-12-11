import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Banner from "./banner";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Banner />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
