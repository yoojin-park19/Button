import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import { COLOR } from '../constants';
import { BackAnimationIndex } from '../components/Background/BackAnimation';
const HomeIndexPage = () => {
  const [active, setActive] = useState(false);
  const [backAni, setBackAni] = useState(false);
  let transformX = [];
  let transformY = [];
  let duration = [];
  function check() {
    setBackAni(!backAni);
    setActive(!active);
    return;
  }
  if (active) {
    setTimeout(function () {
      locateKap();
      console.log('실행');
    }, 2500);
    function locateKap() {
      window.location.href = '/main';
    }
  }

  const itemClass = useRef();
  console.log(itemClass);
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 70; i++) {
      transformX.push(parseInt(Math.random() * 3000) * -1 + 1500);
      transformY.push(parseInt(Math.random() * 3000) * -1 + 1500);
      duration.push(parseInt(Math.random() * 90));
      result.push(
        <BackAnimationIndex
          key={i}
          item={backAni ? `item` + i + ' on' : `item` + i}
          transFormX={transformX[i]}
          transFormY={transformY[i]}
          duration={duration[i]}
        />,
      );
    }
    // console.log(result);
    return result;
  };
  return (
    <HomePage>
      <img
        src="../images/newLogo.jpg
        "
        className="logo"
        alt="button"
        onClick={check}
      />
      <div className="cont-check">
        <div>{rendering()}</div>
        {active ? (
          <div>
            <div className="card right fadeout"></div>
          </div>
        ) : null}
      </div>
    </HomePage>
  );
};

const HomePage = styled.section`
  @keyframes fadein {
    100% {
      opacity: 0.1;
      transform: scale(0);
    }
    80% {
      opacity: 0.5;
      transform: scale(5);
    }
    60% {
      opacity: 0.6;
      transform: scale(6);
    }
    40% {
      opacity: 0.8;
      transform: scale(8);
    }
    20% {
      opacity: 0.9;
      transform: scale(9);
    }
    0% {
      opacity: 1;
      transform: scale(10);
    }
  }
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('./images/flowers_circle.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  /* background-color: #fff; */
  overflow: hidden;
  .logo {
    position: absolute;
    top: 35%;
    width: 300px;
    height: 300px;
    z-index: 10;
  }
  .cont-check {
    position: relative;
    top: 50%;
  }
  .card {
    position: absolute;
    width: 300px;
    height: 300px;
    transform: scale(10);
    border-radius: 100%;
    .right {
      position: absolute;
      top: 50px;
      right: 30px;
    }
    &.left {
      right: -110px;
      top: -50px;
      left: 0;
    }
    &.fadeout {
      animation: fadein 2s linear 0s reverse;
      background-color: #fff;
      border-radius: 100px;
      z-index: 30;
    }
  }
  @media screen and (max-width: 720px) {
    .logo {
      position: absolute;
      top: 40%;
      width: 160px;
      height: 160px;
    }
  }
`;

export default HomeIndexPage;
