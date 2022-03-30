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
    for (let i = 0; i < 50; i++) {
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
      <img src="../images/logo.png" className="logo" alt="button" />
      <div className="cont-check">
        <div>{rendering()}</div>

        <button className="check-box" alt="check here" onClick={check} />
        {active ? (
          <img src="../images/check.png" className="check" alt="check" />
        ) : null}
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
  @keyframes fadeout {
    100% {
      opacity: 0;
      transform: scale(0);
    }
    75% {
      opacity: 0.1;
      transform: scale(2);
    }
    50% {
      opacity: 0.2;
      transform: scale(4);
    }
    25% {
      opacity: 0.3;
      transform: scale(6);
    }
    0% {
      opacity: 0.4;
      transform: scale(8);
    }
  }
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #c4a1fd, #fff);
  background-image: url('./images/flowers_circle.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  overflow: hidden;
  .logo {
    margin: 200px 0 0;
    width: 580px;
    height: 120px;
  }
  .cont-check {
    position: relative;
    z-index: 10;
    .check-box {
      background: url('../images/checkbox.svg') no-repeat;
      background-size: cover;
      background-color: #fff;
      position: absolute;
      top: 100px;
      left: -50px;
      width: 110px;
      height: 110px;
    }
    .check {
      width: 150px;
      height: 140px;
      position: absolute;
      top: 50px;
      left: -50px;
    }
  }
  .card {
    position: absolute;
    width: 250px;
    height: 250px;
    opacity: 0.4;
    transform: scale(8);

    &.right {
      top: 0px;
      left: -70px;
    }
    &.fadeout {
      animation: fadeout 1.2s linear 0s reverse;
      background-color: ${COLOR.main};
      border-radius: 100px;
    }
    &.left {
      top: 40px;
      right: -110px;
      top: -50px;
      left: 0;
    }
  }
  @media screen and (max-width: 390px) {
    width: 100vw;
    height: 100vh;
    background-color: black;
    .logo {
      width: 100vw;
    }
  }
`;

export default HomeIndexPage;
