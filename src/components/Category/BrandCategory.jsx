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
  const [brand1, setBrand1] = useState([]);
  const [brand2, setBrand2] = useState([]);
  const [brand3, setBrand3] = useState([]);
  const [brand4, setBrand4] = useState([]);
  const [brand5, setBrand5] = useState([]);
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
    }
    Perfume.map((item, index) => {
      if (item.brand === '불가리') {
        brand5.push(item);
        setBrand5(brand5);
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
      </AssortPage>
    </BrandCategoryPage>
  );
};

const BrandCategoryPage = styled.section`
  height: 100vh;
  display: flex;
`;

const BrandPage = styled.ul`
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
  top: -240px;
  padding: 100px;
  background-color: rgba(255, 255, 255, 0.3);
  .cartegory-card {
    box-sizing: border-box;
    display: flex;
    gap: 0 50px;
    flex-wrap: wrap;
  }
`;
