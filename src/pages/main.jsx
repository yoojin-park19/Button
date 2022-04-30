import React from 'react';
import styled from '@emotion/styled';
import { MainHeader } from '../components/MainHeader';
import { FirstMain } from '../components/Main/FirstMain';
import { SecondMain } from '../components/Main/SecondMain';
import { ThirdMain } from '../components/Main/ThirdMain';
import { ForthMain } from '../components/Main/ForthMain';
import { useState, useRef, useEffect } from 'react';

const MainIndexPage = () => {
  let scrollRef = useRef();
  let [scrollYY, setScrollYY] = useState(0);
  let [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const wheelHandler = (e) => {
      const { deltaY } = e;
      const pageHeight = window.innerHeight;
      if (0 < deltaY && scrollYY === 0) {
        window.scrollTo({
          top: pageHeight + 100,
          behavior: 'smooth',
        });
        setScrollYY((scrollYY = 1));
      } else if (deltaY > 0 && scrollYY === 1) {
        window.scrollTo({
          top: pageHeight * 2 + 100,
          behavior: 'smooth',
        });
        setScrollYY((scrollYY = 2));
      } else if (deltaY < 0 && scrollYY === 2) {
        window.scrollTo({
          top: pageHeight + 100,
          behavior: 'smooth',
        });
        setScrollYY((scrollYY = 1));
      } else if (deltaY < 0 && scrollYY === 1) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        setScrollYY((scrollYY = 0));
      }
    };
    const scrollRefCurrent = scrollRef.current;
    scrollRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      scrollRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, [scrollRef, scrollYY]);

  return (
    <Container ref={scrollRef}>
      <MainHeader />
      <MainPage>
        <FirstMain />
        <SecondMain />
        <ThirdMain />
        <ForthMain />
      </MainPage>
    </Container>
  );
};
const Container = styled.section``;
const MainPage = styled.section`
  overflow-y: auto;
  position: relative;
  background-size: cover;
  overflow: hidden;
`;
export default MainIndexPage;
