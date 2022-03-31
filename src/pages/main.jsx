import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { MainHeader } from '../components/MainHeader';
import { FirstMain } from '../components/FirstMain';
import { SecondMain } from '../components/SecondMain';
import { ThirdMain } from '../components/ThirdMain';

const MainIndexPage = () => {
  return (
    <>
      <MainHeader />
      <MainPage>
        <FirstMain />
        <Fade bottom>
          <SecondMain />
        </Fade>
        <Fade right>
          <ThirdMain />
        </Fade>
      </MainPage>
    </>
  );
};
const MainPage = styled.section`
  margin-top: 70px;
  background: url('./images/background/eiffel.svg') no-repeat;
`;
export default MainIndexPage;
