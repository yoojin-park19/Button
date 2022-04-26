import styled from '@emotion/styled';
import { useState } from 'react';
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
    }, 2000);
    function locateKap() {
      window.location.href = '/main';
    }
  }

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
    return result;
  };
  return (
    <HomePage>
      <MainCont>
        <BackAniCont>
          <div className="cont-check">
            <div>{rendering()}</div>
          </div>
          {active ? (
            <div>
              <div className="card right fadeout"></div>
            </div>
          ) : null}
        </BackAniCont>
        <Container>
          <img
            src="../images/icon/button.png
        "
            className="logo"
            alt="button"
            onClick={check}
          />
        </Container>
      </MainCont>
    </HomePage>
  );
};
const HomePage = styled.section`
  background-color: #000;
  z-index: -30;
`;
const MainCont = styled.div`
  position: relative;
`;
const BackAniCont = styled.div`
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
    z-index: -10;
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
  }
`;
const Container = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('./images/background/home.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  z-index: 1;
  position: relative;
  overflow: hidden;
  .logo {
    position: absolute;
    border-radius: 100%;
    top: 48%;
    width: 100px;
    height: 100px;
    z-index: 10;
  }
`;

export default HomeIndexPage;
