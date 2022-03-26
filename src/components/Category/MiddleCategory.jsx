import styled from '@emotion/styled';
import { useState } from 'react';
import { Perfume } from '../../constants/database';
import { Font, COLOR } from '../../constants';
import { Cards } from './CategoryItem';

export const MiddleCategory = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [middle1, setMiddle1] = useState([]);
  const [middle2, setMiddle2] = useState([]);
  const [middle3, setMiddle3] = useState([]);
  const [middle4, setMiddle4] = useState([]);
  const [middle5, setMiddle5] = useState([]);
  function middlecheck1() {
    setActive1(!active1);
    if (active2) {
      setActive2(!active2);
    }
    if (active3) {
      setActive3(!active3);
    }
    if (active4) {
      setActive4(!active4);
    }
    if (active5) {
      setActive5(!active5);
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
    if (active1) {
      setActive1(!active1);
    }
    if (active3) {
      setActive3(!active3);
    }
    if (active4) {
      setActive4(!active4);
    }
    if (active5) {
      setActive5(!active5);
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
    if (active1) {
      setActive1(!active1);
    } else if (active2) {
      setActive2(!active2);
    } else if (active4) {
      setActive4(!active4);
    } else if (active5) {
      setActive5(!active5);
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
    if (active1) {
      setActive1(!active1);
    } else if (active2) {
      setActive2(!active2);
    } else if (active3) {
      setActive3(!active3);
    } else if (active5) {
      setActive5(!active5);
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
    if (active1) {
      setActive1(!active1);
    } else if (active2) {
      setActive2(!active2);
    } else if (active3) {
      setActive3(!active3);
    } else if (active4) {
      setActive4(!active4);
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
  height: 100vh;
  display: flex;
`;

const MiddlePage = styled.ul`
  text-align: left;
  margin-left: 20px;
  .assortList {
    button {
      width: 150px;
      height: 40px;
      color: white;
      font-family: ${Font.gowun};
      text-align: left;
      border: none;
      background-color: transparent;
      &:hover {
        background-color: ${COLOR.sub};
      }
    }
  }
`;

const AssortPage = styled.section`
  height: 100vh;
  width: 73vw;
  list-style: none;
  position: relative;
  top: -310px;
  padding: 100px;
  background-color: rgba(255, 255, 255, 0.3);
  .cartegory-card {
    box-sizing: border-box;
    display: flex;
    gap: 0 50px;
    flex-wrap: wrap;
  }
`;
