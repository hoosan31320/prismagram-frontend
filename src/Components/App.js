import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Footer";

const Query = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

// eslint-disable-next-line
export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(Query);

  return (
    <ThemeProvider theme={Theme}>
    <Wrapper>
      <GlobalStyles />
      <Router isLoggedIn={isLoggedIn} />
      <Footer />
    </Wrapper>
  </ThemeProvider>
  );
};
  

  

