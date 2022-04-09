import React from 'react';
import styled from '@emotion/styled';
import { AboutMain } from '../components/About/AboutMain';
import { Nav } from '../components/About/Nav';
import { Global, css } from '@emotion/react';
import { Font } from '../constants';

const AboutIndexPage = () => {
  return (
    <>
      <GlobalStyle> </GlobalStyle>
      <About>
        <AboutMain />
        <Nav />
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
  position: relative;
  font-family: ${Font.title};
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default AboutIndexPage;
