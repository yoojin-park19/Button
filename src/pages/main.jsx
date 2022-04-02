import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { MainHeader } from '../components/MainHeader';
import { FirstMain } from '../components/FirstMain';
import { SecondMain } from '../components/SecondMain';
import { ThirdMain } from '../components/ThirdMain';
import { MainBackAni } from '../components/Main/MainBackAni';

const MainIndexPage = () => {
  return (
    <>
      <MainHeader />
      <MainPage>
        <MainBackAni />
        <Fade right>
          <FirstMain />
        </Fade>
        <Fade left>
          <SecondMain />
        </Fade>
        <Fade bottom>
          <ThirdMain />
        </Fade>
      </MainPage>
    </>
  );
};
const MainPage = styled.section`
  /* margin-top: 70px; */
  position: relative;
  background: url('./images/background/background_demo.jpg') no-repeat;
  background-size: cover;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    margin-top: 0px;
    padding-top: 30px;
  background: url('./images/background/background_demo.jpg') no-repeat;
    background-size: cover;
    background-position: -127px;
    background-color: ${COLOR.deep};
  }
`;
export default MainIndexPage;
