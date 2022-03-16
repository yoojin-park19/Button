import styled from '@emotion/styled';
import { useState } from 'react';

const HomeIndexPage = () => {
  const [active, setActive] = useState(false);

  function check() {
    setActive(!active);
  }

  return (
    <HomePage>
      <img src="../images/logo.png" className="logo" alt="button" />
      <div className="cont-check">
        <button className="check-box" alt="check here" onClick={check} />
        {active ? (
          <img src="../images/check.png" className="check" alt="check" />
        ) : null}
      </div>
    </HomePage>
  );
};

const HomePage = styled.section`
  background: linear-gradient(to bottom, #c4a1fd, #fff);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    margin: 80px 0;
    width: 580px;
    height: 120px;
  }
  .cont-check {
    position: relative;
    .check-box {
      background: url('../images/checkbox.svg') no-repeat;
      background-size: cover;
      width: 110px;
      height: 110px;
    }
    .check {
      width: 150px;
      height: 140px;
      position: absolute;
      top: -50px;
      left: 0;
    }
  }
`;

export default HomeIndexPage;
