import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
// eslint-disable-next-line
export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
  </ThemeProvider>
);
