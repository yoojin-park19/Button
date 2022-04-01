import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Perfume } from '../../constants/database';
import { BackgroundImg } from './Background.jsx';
import { ItemContainer } from './ItemContainer.jsx';
import { Font, COLOR } from '../../constants';
import Fade from 'react-reveal/Fade';
export const AboutMain = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log('scrolled');
  };
  return (
    <>
      <BackgroundImg />
      <AboutMains>
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
      </AboutMains>
    </>
  );
};

const AboutMains = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #febfa2;
  box-sizing: border-box;
  padding: 10vh 15vw;
  overflow: hidden;
`;
