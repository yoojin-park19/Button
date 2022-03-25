import styled from '@emotion/styled';
import { useState } from 'react';
import { Perfume } from '../../constants/database';

export const PriceCategory = () => {
  const [active1, setActive1] = useState('false');
  const [active2, setActive2] = useState('false');
  const [active3, setActive3] = useState('false');
  const [active4, setActive4] = useState('false');
  const [active5, setActive5] = useState('false');

  const price1 = [];
  const price2 = [];
  const price3 = [];
  const price4 = [];
  const price5 = [];
  function pricecheck() {
    Perfume.map((item, index) => {
      if (item.price < 100000) {
        price1.push(item);
        setActive1('true');
      } else if (item.price < 150000) {
        price2.push(item);
        setActive2('true');
      } else if (item.price < 200000) {
        price3.push(item);
        setActive3('true');
      } else if (item.price < 300000) {
        price4.push(item);
        setActive4('true');
      } else if (300000 < item.price) {
        price5.push(item);
        setActive5('true');
      }
    });
    console.log(price1);
  }
  return (
    <PricePage>
      <button onclick={pricecheck}>10만원 미만</button>
      {/* {active1 ? (
        <div className="cartegory-card">
          {price1.map(item) => ({
            
          })}</div>
      ) : null} */}
      <button onclick={pricecheck}>10만원 이상 15만원 미만</button>
      <button onclick={pricecheck}>15만원 이상 20만원 미만</button>
      <button onclick={pricecheck}>20만원 이상 30만원 미만</button>
      <button onclick={pricecheck}>30만원 이상</button>
    </PricePage>
  );
};

const PricePage = styled.section``;
