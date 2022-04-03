import styled from '@emotion/styled';
import { useState } from 'react';
import { Perfume } from '../../constants/database';
import { Font, COLOR } from '../../constants';
import { Cards } from './CategoryItem';

export const BrandCategory = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [brand1, setBrand1] = useState([]);
  const [brand2, setBrand2] = useState([]);
  const [brand3, setBrand3] = useState([]);
  const [brand4, setBrand4] = useState([]);
  const [brand5, setBrand5] = useState([]);
  const [brand6, setBrand6] = useState([]);
  function brandcheck1() {
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
    if (active6) {
      setActive6(!active6);
    }
    Perfume.map((item, index) => {
      if (item.brand === '조말론') {
        brand1.push(item);
        setBrand1(brand1);
      }
    });
  }
  function brandcheck2() {
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
    if (active6) {
      setActive6(!active6);
    }
    Perfume.map((item, index) => {
      if (item.brand === '샤넬') {
        brand2.push(item);
        setBrand2(brand2);
      }
    });
  }
  function brandcheck3() {
    setActive3(!active3);
    if (active1) {
      setActive1(!active1);
    } else if (active2) {
      setActive2(!active2);
    } else if (active4) {
      setActive4(!active4);
    } else if (active5) {
      setActive5(!active5);
    } else if (active6) {
      setActive5(!active6);
    }
    Perfume.map((item, index) => {
      if (item.brand === '딥디크') {
        brand3.push(item);
        setBrand3(brand3);
      }
    });
  }

  function brandcheck4() {
    setActive4(!active4);
    if (active1) {
      setActive1(!active1);
    } else if (active2) {
      setActive2(!active2);
    } else if (active3) {
      setActive3(!active3);
    } else if (active5) {
      setActive5(!active5);
    } else if (active6) {
      setActive5(!active6);
    }
    Perfume.map((item, index) => {
      if (item.brand === '구찌') {
        brand4.push(item);
        setBrand4(brand4);
      }
    });
  }
  function brandcheck5() {
    setActive5(!active5);
    if (active1) {
      setActive1(!active1);
    } else if (active2) {
      setActive2(!active2);
    } else if (active3) {
      setActive3(!active3);
    } else if (active4) {
      setActive4(!active4);
    } else if (active6) {
      setActive5(!active6);
    }
    Perfume.map((item, index) => {
      if (item.brand === '불가리') {
        brand5.push(item);
        setBrand5(brand5);
      }
    });
  }

  function brandcheck6() {
    setActive6(!active6);
    if (active1) {
      setActive1(!active1);
    } else if (active2) {
      setActive2(!active2);
    } else if (active3) {
      setActive3(!active3);
    } else if (active4) {
      setActive4(!active4);
    } else if (active5) {
      setActive5(!active5);
    }
    Perfume.map((item, index) => {
      if (item.brand === '크리드') {
        brand6.push(item);
        setBrand6(brand6);
      }
    });
  }

  // console.log(price1);
  return (
    <BrandCategoryPage>
      <BrandPage>
        <li className="assortList">
          <button onClick={brandcheck1}>조말론</button>
        </li>
        <li className="assortList">
          <button onClick={brandcheck2}>샤넬</button>
        </li>
        <li className="assortList">
          <button onClick={brandcheck3}>딥디크</button>
        </li>
        <li className="assortList">
          <button onClick={brandcheck4}>구찌</button>
        </li>
        <li className="assortList">
          <button onClick={brandcheck5}>불가리</button>
        </li>
        <li className="assortList">
          <button onClick={brandcheck6}>크리드</button>
        </li>
      </BrandPage>
      <AssortPage>
        {active1 ? (
          <div className="cartegory-card">
            {brand1.map((item, index) => (
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
            {brand2.map((item, index) => (
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
            {brand3.map((item, index) => (
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
            {brand4.map((item, index) => (
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
            {brand5.map((item, index) => (
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
        {active6 ? (
          <div className="cartegory-card">
            {brand6.map((item, index) => (
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
    </BrandCategoryPage>
  );
};

const BrandCategoryPage = styled.section`
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

const BrandPage = styled.ul`
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
    left: -23px;
    width: 100%;
    .assortList {
      display: flex;
      width: 80px;
      height: 80px;
      button {
        width: 150px;
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
          width: 150px;
          height: 80px;
        }
      }
    }
  }
`;

const AssortPage = styled.section`
  height: 1000px;
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
    height: 1000px;
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
