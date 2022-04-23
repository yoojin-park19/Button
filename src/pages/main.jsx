import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import { MainHeader } from '../components/MainHeader';
import { FirstMain } from '../components/Main/FirstMain';
import { SecondMain } from '../components/Main/SecondMain';
import { ThirdMain } from '../components/Main/ThirdMain';
import { ForthMain } from '../components/Main/ForthMain';
import { MainBackAni } from '../components/Main/MainBackAni';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
const MainIndexPage = () => {
  const test = useRef(null);
  let [testY, setTestY] = useState(0);
  let [comparisionY, setComparisionY] = useState([0]);
  function onScroll() {
    setTestY((testY = window.scrollY));
    if (testY < comparisionY[0]) {
      console.log('위로 올렸습니다.');
    } else if (testY > comparisionY[0]) {
      console.log('아래로 내렸습니다.');
    }
    setComparisionY(comparisionY.splice(0, 1, testY));
  }

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
