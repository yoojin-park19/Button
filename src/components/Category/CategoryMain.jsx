import styled from '@emotion/styled';
import { COLOR } from '../../constants';

import { useState } from 'react';
import { PriceCategory } from './PriceCategory';
import { BrandCategory } from './BrandCategory';
import { MiddleCategory } from './MiddleCategory';
import { GenderCategory } from './GenderCategory';
export const CategoryMain = () => {
  const [activePrice, setActivePrice] = useState('false');
  const [activeBrand, setActiveBrand] = useState('false');
  const [activeMiddle, setActiveMiddle] = useState('false');
  const [activeGender, setActiveGender] = useState('false');

  const Pricelist = () => {
    setActivePrice(!activePrice);
  };

  function Brandlist() {
    setActiveBrand(!activeBrand);
  }

  function Middlelist() {
    setActiveMiddle(!activeMiddle);
  }

  function Genderlist() {
    setActiveGender(!activeGender);
  }

  return (
    <CategoryMainPage>
      <ItemContainer>
        <AssortContainer>
          <div className="assortwrap">
            <button className="listCont" onClick={Pricelist}>
              가격별로 보기
            </button>
            {activePrice ? null : <PriceCategory />}
            <button className="listCont" onClick={Brandlist}>
              브랜드별로 보기
            </button>
            {activeBrand ? null : <BrandCategory />}
            <button className="listCont" onClick={Middlelist}>
              향기별로 보기
            </button>
            {activeMiddle ? null : <MiddleCategory />}
            <button className="listCont" onClick={Genderlist}>
              성별로 보기
            </button>
            {activeGender ? null : <GenderCategory />}
          </div>
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
  overflow: hidden;
`;

const AssortContainer = styled.section`
  width: 15vw;
  position: relative;
  display: flex;
  .assortwrap {
    margin-top: 100px;
    display: flex;
    gap: 20px 0;
    flex-direction: column;
  }
  .listCont {
    display: block;
    width: 170px;
    height: 50px;
    border: none;
    color: #fff;
    font-size: 20px;
    text-shadow: 3px 3px 3px orchid;
    background-color: transparent;
    text-align: left;
    margin-left: 10px;
    &:hover {
      background-color: ${COLOR.sub};
      width: 160px;
    }
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
