import styled from '@emotion/styled';
// import { COLOR } from '../../constants';
// import { Font } from '../../constants';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
export const BackAnimationIndex = (props) => {
  // const [random, setRandom] = useState([]);
  // const [transForm, setTransform] = useState([]);
  // for (let i = 0; i < 30; i++) {
  //   random.push('item' + i);
  //   transForm.push(parseInt(Math.random() * 100));
  // }
  return (
    <BackAnimation>
      {/* {random.map((item, index) => (
        <>
          <li>{transForm[index]}</li>
          <img
            key={index}
            className={item}
            transform={transForm[index]}
            src="./images/background/magnolia.png"
            alt="아이템"
          />
        </>
      ))} */}
    </BackAnimation>
  );
};
const BackAnimation = styled.section`
  @keyframes scatter {
    0% {
      transform: translate(0px, 0px) rotate(5deg);
    }

    100% {
      transform: ${(props) => `translateX(${props.transForm}px)`};
    }
  }
  position: absolute;
  top: 50%;
  width: 100px;
  z-index: -10;
  .item0,
  .item1,
  .item2,
  .item3,
  .item4,
  .item5,
  .item6,
  .item7,
  .item8,
  .item9,
  .item10,
  .item11,
  .item12,
  .item13,
  .item14,
  .item15,
  .item16,
  .item17,
  .item18,
  .item19,
  .item20,
  .item21,
  .item22,
  .item23,
  .item24,
  .item25,
  .item26,
  .item27,
  .item28,
  .item29 {
    position: absolute;
    left: 50%;
    width: 40px;
    height: 40px;
    animation-name: scatter;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  @media screen and (max-width: 390px) {
  }
`;
