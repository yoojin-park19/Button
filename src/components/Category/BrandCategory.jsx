/* eslint-disable array-callback-return */
import styled from '@emotion/styled';
import { useState } from 'react';
import { Perfume } from '../../constants/database';
import { Font, COLOR } from '../../constants';
import { Cards } from './CategoryItem';

export const BrandCategory = () => {
  let [int1, setInt1] = useState(0);
  let [int2, setInt2] = useState(0);
  let [int3, setInt3] = useState(0);
  let [int4, setInt4] = useState(0);
  let [int5, setInt5] = useState(0);
  let [int6, setInt6] = useState(0);
  let [int7, setInt7] = useState(0);
  let [int8, setInt8] = useState(0);
  let [int9, setInt9] = useState(0);
  let [int10, setInt10] = useState(0);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  const [active8, setActive8] = useState(false);
  const [active9, setActive9] = useState(false);
  const [active10, setActive10] = useState(false);
  let [brand1, setBrand1] = useState([]);
  let [brand2, setBrand2] = useState([]);
  let [brand3, setBrand3] = useState([]);
  let [brand4, setBrand4] = useState([]);
  let [brand5, setBrand5] = useState([]);
  let [brand6, setBrand6] = useState([]);
  let [brand7, setBrand7] = useState([]);
  let [brand8, setBrand8] = useState([]);
  let [brand9, setBrand9] = useState([]);
  let [brand10, setBrand10] = useState([]);
  function brandcheck1() {
    setActive1(!active1);
    setInt1(int1++);
    if (int1 === 1) {
      setBrand1((brand1 = []));
      setInt1((int1 = 0));
    }
    if (active2) {
      setActive2(!active2);
      setBrand2((brand2 = []));
    }
    if (active3) {
      setActive3(!active3);
      setBrand3((brand3 = []));
    }
    if (active4) {
      setActive4(!active4);
      setBrand4((brand4 = []));
    }
    if (active5) {
      setActive5(!active5);
      setBrand5((brand5 = []));
    }
    if (active6) {
      setActive6(!active6);
      setBrand6((brand6 = []));
    }
    if (active7) {
      setActive7(!active7);
      setBrand7((brand7 = []));
    }
    if (active8) {
      setActive8(!active8);
      setBrand8((brand8 = []));
    }
    if (active9) {
      setActive9(!active9);
      setBrand9((brand9 = []));
    }
    if (active10) {
      setActive10(!active10);
      setBrand10((brand10 = []));
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
    setInt2(int2++);
    if (int2 === 1) {
      setBrand2((brand2 = []));
      setInt2((int2 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setBrand1((brand1 = []));
    } else if (active3) {
      setActive3(!active3);
      setBrand3((brand3 = []));
    } else if (active4) {
      setActive4(!active4);
      setBrand4((brand4 = []));
    } else if (active5) {
      setActive5(!active5);
      setBrand5((brand5 = []));
    } else if (active6) {
      setActive6(!active6);
      setBrand6((brand6 = []));
    } else if (active7) {
      setActive7(!active7);
      setBrand7((brand7 = []));
    } else if (active8) {
      setActive8(!active8);
      setBrand8((brand8 = []));
    } else if (active9) {
      setActive9(!active9);
      setBrand9((brand9 = []));
    } else if (active10) {
      setActive10(!active10);
      setBrand10((brand10 = []));
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
    setInt3(int3++);
    if (int3 === 1) {
      setBrand3((brand3 = []));
      setInt3((int3 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setBrand1((brand1 = []));
    } else if (active2) {
      setActive2(!active2);
      setBrand2((brand2 = []));
    } else if (active4) {
      setActive4(!active4);
      setBrand4((brand4 = []));
    } else if (active5) {
      setActive5(!active5);
      setBrand5((brand5 = []));
    } else if (active6) {
      setActive6(!active6);
      setBrand6((brand6 = []));
    } else if (active7) {
      setActive7(!active7);
      setBrand7((brand7 = []));
    } else if (active8) {
      setActive8(!active8);
      setBrand8((brand8 = []));
    } else if (active9) {
      setActive9(!active9);
      setBrand9((brand9 = []));
    } else if (active10) {
      setActive10(!active10);
      setBrand10((brand10 = []));
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
    setInt4(int4++);
    if (int4 === 1) {
      setBrand4((brand4 = []));
      setInt4((int4 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setBrand1((brand1 = []));
    } else if (active2) {
      setActive2(!active2);
      setBrand2((brand2 = []));
    } else if (active3) {
      setActive3(!active3);
      setBrand3((brand3 = []));
    } else if (active5) {
      setActive5(!active5);
      setBrand5((brand5 = []));
    } else if (active6) {
      setActive6(!active6);
      setBrand6((brand6 = []));
    } else if (active7) {
      setActive7(!active7);
      setBrand7((brand7 = []));
    } else if (active8) {
      setActive8(!active8);
      setBrand8((brand8 = []));
    } else if (active9) {
      setActive9(!active9);
      setBrand9((brand9 = []));
    } else if (active10) {
      setActive10(!active10);
      setBrand10((brand10 = []));
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
    setInt5(int5++);
    if (int5 === 1) {
      setBrand5((brand5 = []));
      setInt5((int5 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setBrand1((brand1 = []));
    } else if (active2) {
      setActive2(!active2);
      setBrand2((brand2 = []));
    } else if (active3) {
      setActive3(!active3);
      setBrand3((brand3 = []));
    } else if (active4) {
      setActive4(!active4);
      setBrand4((brand4 = []));
    } else if (active6) {
      setActive6(!active6);
      setBrand6((brand6 = []));
    } else if (active7) {
      setActive7(!active7);
      setBrand7((brand7 = []));
    } else if (active8) {
      setActive8(!active8);
      setBrand8((brand8 = []));
    } else if (active9) {
      setActive9(!active9);
      setBrand9((brand9 = []));
    } else if (active10) {
      setActive10(!active10);
      setBrand10((brand10 = []));
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
    setInt6(int6++);
    if (int6 === 1) {
      setBrand6((brand6 = []));
      setInt6((int6 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setBrand1((brand1 = []));
    } else if (active2) {
      setActive2(!active2);
      setBrand2((brand2 = []));
    } else if (active3) {
      setActive3(!active3);
      setBrand3((brand3 = []));
    } else if (active4) {
      setActive4(!active4);
      setBrand4((brand4 = []));
    } else if (active5) {
      setActive5(!active5);
      setBrand5((brand5 = []));
    } else if (active7) {
      setActive7(!active7);
      setBrand7((brand7 = []));
    } else if (active8) {
      setActive8(!active8);
      setBrand8((brand8 = []));
    } else if (active9) {
      setActive9(!active9);
      setBrand9((brand9 = []));
    } else if (active10) {
      setActive10(!active10);
      setBrand10((brand10 = []));
    }
    Perfume.map((item, index) => {
      if (item.brand === '크리드') {
        brand6.push(item);
        setBrand6(brand6);
      }
    });
  }
  function brandcheck7() {
    setActive7(!active7);
    setInt7(int7++);
    if (int7 === 1) {
      setBrand7((brand7 = []));
      setInt7((int7 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setBrand1((brand1 = []));
    } else if (active2) {
      setActive2(!active2);
      setBrand2((brand2 = []));
    } else if (active3) {
      setActive3(!active3);
      setBrand3((brand3 = []));
    } else if (active4) {
      setActive4(!active4);
      setBrand4((brand4 = []));
    } else if (active5) {
      setActive5(!active5);
      setBrand5((brand5 = []));
    } else if (active6) {
      setActive6(!active6);
      setBrand6((brand6 = []));
    } else if (active8) {
      setActive8(!active8);
      setBrand8((brand8 = []));
    } else if (active9) {
      setActive9(!active9);
      setBrand9((brand9 = []));
    } else if (active10) {
      setActive10(!active10);
      setBrand10((brand10 = []));
    }
    Perfume.map((item, index) => {
      if (item.brand === '버버리') {
        brand7.push(item);
        setBrand7(brand7);
      }
    });
  }
  function brandcheck8() {
    setActive8(!active8);
    setInt8(int8++);
    if (int8 === 1) {
      setBrand8((brand8 = []));
      setInt8((int8 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setBrand1((brand1 = []));
    } else if (active2) {
      setActive2(!active2);
      setBrand2((brand2 = []));
    } else if (active3) {
      setActive3(!active3);
      setBrand3((brand3 = []));
    } else if (active4) {
      setActive4(!active4);
      setBrand4((brand4 = []));
    } else if (active5) {
      setActive5(!active5);
      setBrand5((brand5 = []));
    } else if (active6) {
      setActive6(!active6);
      setBrand6((brand6 = []));
    } else if (active7) {
      setActive7(!active7);
      setBrand7((brand7 = []));
    } else if (active9) {
      setActive9(!active9);
      setBrand9((brand9 = []));
    } else if (active10) {
      setActive10(!active10);
      setBrand10((brand10 = []));
    }
    Perfume.map((item, index) => {
      if (item.brand === '바이레도') {
        brand8.push(item);
        setBrand8(brand8);
      }
    });
  }
  function brandcheck9() {
    setActive9(!active9);
    setInt9(int9++);
    if (int9 === 1) {
      setBrand9((brand9 = []));
      setInt9((int9 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setBrand1((brand1 = []));
    } else if (active2) {
      setActive2(!active2);
      setBrand2((brand2 = []));
    } else if (active3) {
      setActive3(!active3);
      setBrand3((brand3 = []));
    } else if (active4) {
      setActive4(!active4);
      setBrand4((brand4 = []));
    } else if (active5) {
      setActive5(!active5);
      setBrand5((brand5 = []));
    } else if (active6) {
      setActive6(!active6);
      setBrand6((brand6 = []));
    } else if (active7) {
      setActive7(!active7);
      setBrand7((brand7 = []));
    } else if (active8) {
      setActive8(!active8);
      setBrand8((brand8 = []));
    } else if (active10) {
      setActive10(!active10);
      setBrand10((brand10 = []));
    }
    Perfume.map((item, index) => {
      if (item.brand === '아쿠아디파르마') {
        brand9.push(item);
        setBrand9(brand9);
      }
    });
  }
  function brandcheck10() {
    setActive10(!active10);
    setInt10(int10++);
    if (int10 === 1) {
      setBrand10((brand10 = []));
      setInt10((int10 = 0));
    }
    if (active1) {
      setActive1(!active1);
      setBrand1((brand1 = []));
    } else if (active2) {
      setActive2(!active2);
      setBrand2((brand2 = []));
    } else if (active3) {
      setActive3(!active3);
      setBrand3((brand3 = []));
    } else if (active4) {
      setActive4(!active4);
      setBrand4((brand4 = []));
    } else if (active5) {
      setActive5(!active5);
      setBrand5((brand5 = []));
    } else if (active6) {
      setActive6(!active6);
      setBrand6((brand6 = []));
    } else if (active7) {
      setActive7(!active7);
      setBrand7((brand7 = []));
    } else if (active8) {
      setActive8(!active8);
      setBrand8((brand8 = []));
    } else if (active9) {
      setActive9(!active9);
      setBrand9((brand9 = []));
    }
    Perfume.map((item, index) => {
      if (item.brand === '르라보') {
        brand10.push(item);
        setBrand10(brand10);
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
        <li className="assortList">
          <button onClick={brandcheck7}>버버리</button>
        </li>
        <li className="assortList">
          <button onClick={brandcheck8}>바이레도</button>
        </li>
        <li className="assortList">
          <button onClick={brandcheck9}>아쿠아디파르마</button>
        </li>
        <li className="assortList">
          <button onClick={brandcheck10}>르라보</button>
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
        {active7 ? (
          <div className="cartegory-card">
            {brand7.map((item, index) => (
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
        {active8 ? (
          <div className="cartegory-card">
            {brand8.map((item, index) => (
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
        {active9 ? (
          <div className="cartegory-card">
            {brand9.map((item, index) => (
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
        {active10 ? (
          <div className="cartegory-card">
            {brand10.map((item, index) => (
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
