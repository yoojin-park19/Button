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
        <Fade bottom>
          <FirstMain />
        </Fade>
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
  background-color: ${COLOR.main};
`;
export default MainIndexPage;
