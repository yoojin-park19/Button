import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Font } from '../../constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PriceCategory } from './PriceCategory';
export const CategoryMain = () => {
  const [activePrice, setActivePrice] = useState('false');
  const [activeBrand, setActiveBrand] = useState('false');
  const [activeMiddle, setActiveMiddle] = useState('false');
  const [activeGender, setActiveMiddle] = useState('false');

  function Pricelist() {
    setActivePrice(true);
  }

  function Brandlist() {
    setActiveBrand(true);
  }

  function Middlelist() {
    setActiveMiddle(true);
  }

  function Genderlist() {
    setActiveMiddle(true);
  }

  return (
    <CategoryMainPage>
      <ItemContainer>
        <AssortContainer>
          <button onClick={Pricelist}>가격별로 보기</button>
          {activePrice ? <PriceCategory /> : null}
          <button onClick={Brandlist}>브랜드별로 보기</button>
          <button onClick={Middlelist}>향기별로 보기</button>
          <button onClick={Genderlist}>성별로 보기</button>
        </AssortContainer>
        <div className="itemList"></div>
      </ItemContainer>
    </CategoryMainPage>
  );
};

const CategoryMainPage = styled.section`
  width: 100vw;
  height: calc(100vh - 87px);
  box-sizing: border-box;
  background-color: ${COLOR.main};
`;

const AssortContainer = styled.section`
  button {
    display: block;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 15px;
    background-color: #fff;
  }
`;

const ItemContainer = styled.section`
  box-sizing: border-box;
  .itemList {
    height: 60px;
    width: 80px;
    overflow: hidden;
    margin: 0 80px;
    img {
      width: 18vw;
      border-radius: 10px;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
    }
  }
`;
