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
    setActiveMiddle(!activeGender);
  }

  return (
    <CategoryMainPage>
      <ItemContainer>
        <AssortContainer>
          <div className="assortwrap">
            <button className="listCont" onClick={Pricelist}>
              가격별로 보기
            </button>
            <button className="listCont" onClick={Brandlist}>
              브랜드별로 보기
            </button>
            <button className="listCont" onClick={Middlelist}>
              향기별로 보기
            </button>
            <button className="listCont" onClick={Genderlist}>
              성별로 보기
            </button>
          </div>
          {activePrice ? null : <PriceCategory />}
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
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 20px;
    text-shadow: 3px 3px 3px orchid;
    background-color: transparent;
    &:hover {
      background-color: ${COLOR.sub};
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
