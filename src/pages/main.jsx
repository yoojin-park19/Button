import { MainHeader } from '../components/MainHeader';
import { FirstMain } from '../components/FirstMain';
import { SecondMain } from '../components/SecondMain';
import { ThirdMain } from '../components/ThirdMain';
import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR } from '../constants';
import { MainHeader } from '../components/MainHeader';
const MainIndexPage = () => {
  return (
    <>
      <MainHeader />
      <FirstMain />
      <SecondMain />
      <ThirdMain />
    </>
  );
};

export default MainIndexPage;
