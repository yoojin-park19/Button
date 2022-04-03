import React from 'react';
import styled from '@emotion/styled';
import { AboutMain } from '../components/About/AboutMain';
import { Global, css } from '@emotion/react';
const AboutIndexPage = () => {
  return (
    <>
      <GlobalStyle> </GlobalStyle>
      <About>
        <AboutMain />
      </About>
    </>
  );
};
const style = css`
  body {
    background-color: #febfa2;
  }
`;

const About = styled.section`
  background-color: #febfa2;
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default AboutIndexPage;
