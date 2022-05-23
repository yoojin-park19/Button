import React from 'react';
import styled from '@emotion/styled';
import { MainHeader } from '../components/MainHeader';
import { FirstMain } from '../components/Main/FirstMain';
import { SecondMain } from '../components/Main/SecondMain';
import { ThirdMain } from '../components/Main/ThirdMain';
import { ForthMain } from '../components/Main/ForthMain';

const MainIndexPage = () => {
  return (
    <Container>
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
