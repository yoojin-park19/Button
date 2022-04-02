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
            <div>
              <button className="listCont" onClick={Pricelist}>
                가격별로 보기
              </button>
              {activePrice ? null : <PriceCategory />}
            </div>
            <div>
              <button className="listCont" onClick={Brandlist}>
                브랜드별로 보기
              </button>
              {activeBrand ? null : <BrandCategory />}
            </div>
            <div>
              <button className="listCont" onClick={Middlelist}>
                향기별로 보기
              </button>
              {activeMiddle ? null : <MiddleCategory />}
            </div>
            <div>
              <button className="listCont" onClick={Genderlist}>
                성별로 보기
              </button>
              {activeGender ? null : <GenderCategory />}
            </div>
          </div>
        </AssortContainer>
        <div className="itemList"></div>
      </ItemContainer>
    </CategoryMainPage>
  );
};

const CategoryMainPage = styled.section`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const AssortContainer = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  .assortwrap {
    background-color: ${COLOR.top};
    display: flex;
    gap: 20px 0;
    flex-direction: column;
    padding-top: 100px;
  }
  .listCont {
    width: 250px;
    height: 50px;
    border: none;
    color: #fff;
    font-size: 20px;
    text-shadow: 5px 5px 5px rgb(144, 11, 252);
    background-color: transparent;
    text-align: left;
    margin-left: 10px;
    &:hover {
      background-color: ${COLOR.figma};
      width: 260px;
      padding: 10px 0 10px 10px;
    }
  }
  @media screen and (max-width: 720px) {
    position: relative;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    .assortwrap {
      height: 80px;
      width: 100vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      padding: 0;
    }
    .listCont {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 70px;
      height: 50px;
      font-size: 16px;
      text-align: center;
      text-shadow: none;
      &:hover {
        background-color: inherit;
        width: 70px;
        padding: 0;
        color: ${COLOR.sub};
      }
    }
  }
`;

const ItemContainer = styled.section`
  box-sizing: border-box;
  .itemList {
    height: 60px;
    width: 80px;
    margin: 0 80px;
    img {
      width: 18vw;
      border-radius: 10px;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
    }
  }
`;
