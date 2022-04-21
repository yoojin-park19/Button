/* eslint-disable array-callback-return */
import styled from '@emotion/styled';
import { useState } from 'react';
import { Perfume } from '../../constants/database';
import { Font, COLOR } from '../../constants';
import { Cards } from './CategoryItem';

export const PriceCategory = () => {
  let [int1, setInt1] = useState(0);
  let [int2, setInt2] = useState(0);
  let [int3, setInt3] = useState(0);
  let [int4, setInt4] = useState(0);
  let [int5, setInt5] = useState(0);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  let [price1, setPrice1] = useState([]);
  let [price2, setPrice2] = useState([]);
  let [price3, setPrice3] = useState([]);
  let [price4, setPrice4] = useState([]);
  let [price5, setPrice5] = useState([]);
  function pricecheck1() {
    setActive1(!active1);
    setInt1(int1++);
    if (int1 === 1) {
      setPrice1((price1 = []));
      setInt1((int1 = 0));
    }
    if (active2) {
      setActive2(!active2);
      setPrice2((price2 = []));
    }
    if (active3) {
      setActive3(!active3);
      setPrice3((price3 = []));
    }
    if (active4) {
      setActive4(!active4);
      setPrice4((price4 = []));
    }
    if (active5) {
      setActive5(!active5);
      setPrice5((price5 = []));
    }
    Perfume.map((item, index) => {
      if (item.price < 100000) {
        price1.push(item);
        setPrice1(price1);
      }
    });
  }
  function pricecheck2() {
    setActive2(!active2);
    setInt2(int2++);
    if (int2 === 1) {
      setPrice2((price2 = []));
      setInt2((int2 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setPrice1((price1 = []));
    }
    if (active3) {
      setActive3(!active3);
      setPrice3((price3 = []));
    }
    if (active4) {
      setActive4(!active4);
      setPrice4((price4 = []));
    }
    if (active5) {
      setActive5(!active5);
      setPrice5((price5 = []));
    }
    Perfume.map((item, index) => {
      if (item.price < 150000 && item.price > 100000) {
        price2.push(item);
        setPrice2(price2);
      }
    });
  }
  function pricecheck3() {
    setActive3(!active3);
    setInt3(int3++);
    if (int3 === 1) {
      setPrice3((price3 = []));
      setInt3((int3 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setPrice1((price1 = []));
    } else if (active2) {
      setActive2(!active2);
      setPrice2((price2 = []));
    } else if (active4) {
      setActive4(!active4);
      setPrice4((price4 = []));
    } else if (active5) {
      setActive5(!active5);
      setPrice5((price5 = []));
    }
    Perfume.map((item, index) => {
      if (item.price < 200000 && item.price > 150000) {
        price3.push(item);
        setPrice3(price3);
      }
    });
  }

  function pricecheck4() {
    setActive4(!active4);
    setInt4(int4++);
    if (int4 === 1) {
      setPrice4((price4 = []));
      setInt4((int4 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setPrice1((price1 = []));
    } else if (active2) {
      setActive2(!active2);
      setPrice2((price2 = []));
    } else if (active3) {
      setActive3(!active3);
      setPrice3((price3 = []));
    } else if (active5) {
      setActive5(!active5);
      setPrice5((price5 = []));
    }
    Perfume.map((item, index) => {
      if (item.price < 300000 && item.price > 200000) {
        price4.push(item);
        setPrice4(price4);
      }
    });
  }
  function pricecheck5() {
    setActive5(!active5);
    setInt5(int5++);
    if (int5 === 1) {
      setPrice5((price5 = []));
      setInt5((int5 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setPrice1((price1 = []));
    } else if (active2) {
      setActive2(!active2);
      setPrice2((price2 = []));
    } else if (active3) {
      setActive3(!active3);
      setPrice3((price3 = []));
    } else if (active4) {
      setActive4(!active4);
      setPrice4((price4 = []));
    }
    Perfume.map((item, index) => {
      if (300000 < item.price) {
        price5.push(item);
        setPrice5(price5);
      }
    });
  }

  // console.log(price1);
  return (
    <PriceCategoryPage>
      <PricePage>
        <li className="assortList">
          <button onClick={pricecheck1}>10만원 미만</button>
        </li>
        <li className="assortList">
          <button onClick={pricecheck2}>10만원 이상 15만원 미만</button>
        </li>
        <li className="assortList">
          <button onClick={pricecheck3}>15만원 이상 20만원 미만</button>
        </li>
        <li className="assortList">
          <button onClick={pricecheck4}>20만원 이상 30만원 미만</button>
        </li>

        <li className="assortList">
          <button onClick={pricecheck5}>30만원 이상</button>
        </li>
      </PricePage>
      <AssortPage>
        {active1 ? (
          <div className="cartegory-card">
            {price1.map((item, index) => (
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
            {price2.map((item, index) => (
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
            {price3.map((item, index) => (
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
        {active4 ? (
          <div className="cartegory-card">
            {price4.map((item, index) => (
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
        {active5 ? (
          <div className="cartegory-card">
            {price5.map((item, index) => (
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
      </AssortPage>
    </PriceCategoryPage>
  );
};

const PriceCategoryPage = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  @media screen and (max-width: 720px) {
    position: relative;
    width: 100px;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PricePage = styled.ul`
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
  top: -170px;
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
