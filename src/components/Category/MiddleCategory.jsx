/* eslint-disable array-callback-return */
import styled from '@emotion/styled';
import { useState } from 'react';
import { Perfume } from '../../constants/database';
import { Font, COLOR } from '../../constants';
import { Cards } from './CategoryItem';

export const MiddleCategory = () => {
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
  let [middle1, setMiddle1] = useState([]);
  let [middle2, setMiddle2] = useState([]);
  let [middle3, setMiddle3] = useState([]);
  let [middle4, setMiddle4] = useState([]);
  let [middle5, setMiddle5] = useState([]);
  function middlecheck1() {
    setActive1(!active1);
    setInt1(int1++);
    if (int1 === 1) {
      setMiddle1((middle1 = []));
      setInt1((int1 = 0));
    }
    if (active2) {
      setActive2(!active2);
      setMiddle2((middle2 = []));
    }
    if (active3) {
      setActive3(!active3);
      setMiddle3((middle3 = []));
    }
    if (active4) {
      setActive4(!active4);
      setMiddle4((middle4 = []));
    }
    if (active5) {
      setActive5(!active5);
      setMiddle5((middle5 = []));
    }
    Perfume.map((item, index) => {
      if (item.second === 1) {
        middle1.push(item);
        setMiddle1(middle1);
      }
    });
  }
  function middlecheck2() {
    setActive2(!active2);
    setInt2(int2++);
    if (int2 === 1) {
      setMiddle2((middle2 = []));
      setInt2((int2 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setMiddle1((middle1 = []));
    }
    if (active3) {
      setActive3(!active3);
      setMiddle3((middle3 = []));
    }
    if (active4) {
      setActive4(!active4);
      setMiddle4((middle4 = []));
    }
    if (active5) {
      setActive5(!active5);
      setMiddle5((middle5 = []));
    }
    Perfume.map((item, index) => {
      if (item.second === 2) {
        middle2.push(item);
        setMiddle2(middle2);
      }
    });
  }
  function middlecheck3() {
    setActive3(!active3);
    setInt3(int3++);
    if (int3 === 1) {
      setMiddle3((middle3 = []));
      setInt3((int3 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setMiddle1((middle1 = []));
    } else if (active2) {
      setActive2(!active2);
      setMiddle2((middle2 = []));
    } else if (active4) {
      setActive4(!active4);
      setMiddle4((middle4 = []));
    } else if (active5) {
      setActive5(!active5);
      setMiddle5((middle5 = []));
    }
    Perfume.map((item, index) => {
      if (item.second === 3) {
        middle3.push(item);
        setMiddle3(middle3);
      }
    });
  }

  function middlecheck4() {
    setActive4(!active4);
    setInt4(int4++);
    if (int4 === 1) {
      setMiddle4((middle4 = []));
      setInt4((int4 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setMiddle1((middle1 = []));
    } else if (active2) {
      setActive2(!active2);
      setMiddle2((middle2 = []));
    } else if (active3) {
      setActive3(!active3);
      setMiddle3((middle3 = []));
    } else if (active5) {
      setActive5(!active5);
      setMiddle5((middle5 = []));
    }
    Perfume.map((item, index) => {
      if (item.second === 4) {
        middle4.push(item);
        setMiddle4(middle4);
      }
    });
  }
  function middlecheck5() {
    setActive5(!active5);
    setInt5(int5++);
    if (int5 === 1) {
      setMiddle5((middle5 = []));
      setInt5((int5 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setMiddle1((middle1 = []));
    } else if (active2) {
      setActive2(!active2);
      setMiddle2((middle2 = []));
    } else if (active3) {
      setActive3(!active3);
      setMiddle3((middle3 = []));
    } else if (active4) {
      setActive4(!active4);
      setMiddle4((middle4 = []));
    }
    Perfume.map((item, index) => {
      if (item.second === 5) {
        middle5.push(item);
        setMiddle5(middle5);
      }
    });
  }

  // console.log(price1);
  return (
    <MiddleCategoryPage>
      <MiddlePage>
        <li className="assortList">
          <button onClick={middlecheck1}>프루티 계열</button>
        </li>
        <li className="assortList">
          <button onClick={middlecheck2}>플로럴 계열</button>
        </li>
        <li className="assortList">
          <button onClick={middlecheck3}>아로마 계열</button>
        </li>
        <li className="assortList">
          <button onClick={middlecheck4}>아쿠아 계열</button>
        </li>

        <li className="assortList">
          <button onClick={middlecheck5}>스위트 계열</button>
        </li>
      </MiddlePage>
      <AssortPage>
        {active1 ? (
          <div className="cartegory-card">
            {middle1.map((item, index) => (
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
            {middle2.map((item, index) => (
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
            {middle3.map((item, index) => (
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
            {middle4.map((item, index) => (
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
            {middle5.map((item, index) => (
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
    </MiddleCategoryPage>
  );
};

const MiddleCategoryPage = styled.section`
  height: 250px;
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
      width: 240px;
      height: 50px;
      color: white;
      font-family: ${Font.gowun};
      text-align: left;
      font-size: 16px;
      border: none;
      background-color: transparent;
      &:hover {
        background-color: ${COLOR.figma};
        width: 240px;
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
  top: -290px;
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
