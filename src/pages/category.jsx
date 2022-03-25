import React from 'react';
import styled from '@emotion/styled';
import { MainHeader } from '../components/MainHeader';
import { CategoryMain } from '../components/Category/CategoryMain';

const CategoryndexPage = () => {
  return (
    <MainPage>
      <MainHeader />
      <CategoryMain />
    </MainPage>
  );
};
const MainPage = styled.section``;
export default CategoryndexPage;
