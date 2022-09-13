import React from "react";
import styled from "styled-components";
import PageTransition from "../components/PageTransition";

const HomeWrapper = styled.section`
  width: 100vw;
  position: absolute;
  left: 50%;
  top: 50%;
`;

const Home = () => {
  return (
    <PageTransition>
      <HomeWrapper>Home</HomeWrapper>
    </PageTransition>
  );
};

export default Home;
