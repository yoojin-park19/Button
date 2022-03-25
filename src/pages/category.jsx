import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { MainHeader } from '../components/MainHeader';
import { ThirdMain } from '../components/ThirdMain';
import { CategoryMain } from '../components/Category/CategoryMain';

const CategoryndexPage = () => {
  return (
    <>
      <MainHeader />
      <CategoryMain></CategoryMain>
    </>
  );
};
const MainPage = styled.section`
  background-color: ${COLOR.main};
`;
export default CategoryndexPage;
