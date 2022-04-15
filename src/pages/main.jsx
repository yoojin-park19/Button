import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import { MainHeader } from '../components/MainHeader';
import { FirstMain } from '../components/Main/FirstMain';
import { SecondMain } from '../components/Main/SecondMain';
import { ThirdMain } from '../components/Main/ThirdMain';
import { ForthMain } from '../components/Main/ForthMain';
import { MainBackAni } from '../components/Main/MainBackAni';

const MainIndexPage = () => {
  return (
    <>
      <MainHeader />
      <MainPage>
        <MainBackAni />
        <Fade left>
          <FirstMain />
        </Fade>
        <Fade right>
          <SecondMain />
        </Fade>
        <Fade left>
          <ThirdMain />
        </Fade>
        <Fade bottom>
          <ForthMain />
        </Fade>
      </MainPage>
    </>
  );
};
const MainPage = styled.section`
  position: relative;
  background-size: cover;
  overflow: hidden;
`;
export default MainIndexPage;
