/* eslint-disable array-callback-return */
import styled from '@emotion/styled';
import { useState } from 'react';
import { Perfume } from '../../constants/database';
import { Font, COLOR } from '../../constants';
import { Cards } from './CategoryItem';

export const GenderCategory = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  let [int1, setInt1] = useState(0);
  let [int2, setInt2] = useState(0);
  let [int3, setInt3] = useState(0);
  let [gender1, setGender1] = useState([]);
  let [gender2, setGender2] = useState([]);
  let [gender3, setGender3] = useState([]);

  function gendercheck1() {
    setActive1(!active1);
    setInt1(int1++);
    if (int1 === 1) {
      setGender1((gender1 = []));
      setInt1((int1 = 0));
    }
    if (active2) {
      setActive2(!active2);
      setGender2((gender2 = []));
    }
    if (active3) {
      setActive3(!active3);
      setGender3((gender3 = []));
    }
    Perfume.map((item, index) => {
      if (item.gender === 1) {
        gender1.push(item);
        setGender1(gender1);
      }
    });
  }

  function gendercheck2() {
    setActive2(!active2);
    setInt2(int2++);
    if (int2 === 1) {
      setGender2((gender2 = []));
      setInt2((int2 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setGender1((gender1 = []));
    }
    if (active3) {
      setActive3(!active3);
      setGender3((gender3 = []));
    }
    Perfume.map((item, index) => {
      if (item.gender === 2) {
        gender2.push(item);
        setGender2(gender2);
      }
    });
  }

  function gendercheck3() {
    setActive3(!active3);
    setInt3(int3++);
    if (int3 === 1) {
      setGender3((gender3 = []));
      setInt3((int3 = 0));
    }
    if (active2) {
      setActive2(!active2);
      setGender2((gender2 = []));
    }
    if (active1) {
      setActive1(!active1);
      setGender1((gender1 = []));
    }
    Perfume.map((item, index) => {
      if (item.gender === 3) {
        gender3.push(item);
        setGender3(gender3);
      }
    });
  }

  return (
    <MiddleCategoryPage>
      <MiddlePage>
        <li className="assortList">
          <button onClick={gendercheck1}>여성용 향수</button>
        </li>
        <li className="assortList">
          <button onClick={gendercheck2}>남성용 향수</button>
        </li>
        <li className="assortList">
          <button onClick={gendercheck3}>유니섹슈얼</button>
        </li>
      </MiddlePage>
      <AssortPage>
        {active1 ? (
          <div className="cartegory-card">
            {gender1.map((item, index) => (
              <div key={index}>
                <Cards
                  image={item.image}
                  alt={item.alt}
                  title={item.title}
                  etitle={item.etitle}
                  des={item.des}
                  price={item.price}
                  brand={item.brand}
                />
              </div>
            ))}
          </div>
        ) : null}
        {active2 ? (
          <div className="cartegory-card">
            {gender2.map((item, index) => (
              <div key={index}>
                <Cards
                  image={item.image}
                  alt={item.alt}
                  title={item.title}
                  etitle={item.etitle}
                  des={item.des}
                  price={item.price}
                  brand={item.brand}
                />
              </div>
            ))}
          </div>
        ) : null}
        {active3 ? (
          <div className="cartegory-card">
            {gender3.map((item, index) => (
              <Cards
                image={item.image}
                alt={item.alt}
                title={item.title}
                etitle={item.etitle}
                des={item.des}
                price={item.price}
                brand={item.brand}
              />
            ))}
          </div>
        ) : null}
      </AssortPage>
    </MiddleCategoryPage>
  );
};

const MiddleCategoryPage = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  @media screen and (max-width: 720px) {
    position: absolute;
    left: 0;
    width: 100px;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MiddlePage = styled.ul`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  .assortList {
    button {
      width: 250px;
      height: 50px;
      color: white;
      font-family: ${Font.gowun};
      text-align: left;
      font-size: 16px;
      border: none;
      background-color: transparent;
      &:hover {
        background-color: ${COLOR.figma};
        width: 250px;
        height: 50px;
      }
    }
  }
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: absolute;
    top: 0px;
    z-index: 999;
    left: -20px;
    width: 100vw;
    .assortList {
      display: flex;
      width: 100vw;
      height: 80px;
      button {
        width: 100%;
        height: 80px;
        color: white;
        font-family: ${Font.gowun};
        text-align: center;
        font-size: 13px;
        border: none;
        background-color: ${COLOR.figma};
        color: #000;
        &:hover {
          background-color: ${COLOR.right};
          width: 100%;
          height: 80px;
        }
      }
    }
  }
`;

const AssortPage = styled.section`
  max-height: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  width: 100vw;
  list-style: none;
  position: relative;
  top: -220px;
  padding: 100px;
  background-color: #fff;
  .cartegory-card {
    box-sizing: border-box;
    display: flex;
    gap: 0 50px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 720px) {
    position: absolute;
    overflow-y: scroll;
    width: 100vw;
    list-style: none;
    top: 0px;
    padding: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .cartegory-card {
      position: absolute;
      top: 100px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 50px;
      flex-wrap: wrap;
    }
  }
`;
