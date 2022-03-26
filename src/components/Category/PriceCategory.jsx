import styled from '@emotion/styled';
import { useState } from 'react';
import { Perfume } from '../../constants/database';
import { Font, COLOR } from '../../constants';
import { Cards } from './CategoryItem';

export const PriceCategory = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [price1, setPrice1] = useState([]);
  const [price2, setPrice2] = useState([]);
  const [price3, setPrice3] = useState([]);
  const [price4, setPrice4] = useState([]);
  const [price5, setPrice5] = useState([]);
  function pricecheck1() {
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
      if (item.price < 100000) {
        price1.push(item);
        setPrice1(price1);
      }
    });
  }
  function pricecheck2() {
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
      if (item.price < 150000 && item.price > 100000) {
        price2.push(item);
        setPrice2(price2);
      }
    });
  }
  function pricecheck3() {
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
      if (item.price < 200000 && item.price > 150000) {
        price3.push(item);
        setPrice3(price3);
      }
    });
  }

  function pricecheck4() {
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
      if (item.price < 300000 && item.price > 200000) {
        price4.push(item);
        setPrice4(price4);
      }
    });
  }
  function pricecheck5() {
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
      if (300000 < item.price) {
        price5.push(item);
        setPrice5(price5);
      }
    });
  }

  // console.log(price1);
  return (
    <>
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
    </>
  );
};

const PricePage = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 190px;
  top: 120px;
  width: 100px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  .assortList {
    width: 80px;
    padding: 10px;
    border-radius: 5px;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background-color: mistyrose;
      border-radius: 10px;
    }
    button {
      width: 80px;
      color: white;
      border-radius: 10px;
      font-family: ${Font.gowun};
      text-align: center;
      border: none;
      background-color: transparent;
      text-shadow: 3px 3px 3px orchid;
    }
  }
`;
const AssortPage = styled.section`
  list-style: none;
  .cartegory-card {
    background-color: rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    padding: 80px 0 0 100px;
    display: flex;
    gap: 0 50px;
    flex-wrap: wrap;
  }
`;
