import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR } from '../constants';
import { BackAnimationIndex } from '../components/Background/BackAnimation';
const HomeIndexPage = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  function check() {
    setActive(!active);
  }
  if (active) {
    setTimeout(function () {
      locateKap();
      console.log('실행');
    }, 1000);
    function locateKap() {
      window.location.href = '/main';
    }
  }

  return (
    <HomePage>
      <BackAnimationIndex />
      <img src="../images/logo.png" className="logo" alt="button" />
      <div className="cont-check">
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
      animation: fadeout 1s linear 0s reverse;
      background-color: ${COLOR.main};
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
