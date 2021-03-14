import React from "react";
import { gql } from "apollo-boost";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { useQuery } from "react-apollo-hooks";

const Query = gql`
  {
    isLoggedIn @client
  }
`;

// eslint-disable-next-line
export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(Query);

  return (
    <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Router isLoggedIn={isLoggedIn} />
    </>
  </ThemeProvider>
  );
};
  

  

