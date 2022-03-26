import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { Link } from 'react-router-dom';

export const SecondMain = () => {
  return (
    <SecondMainPage>
      <img className="back-paint" src="./images/paint.png" alt="배경" />
      <div className="cont-item">
        <h2>It's For your loved ones</h2>
        <p>
          Give your precious people a scent. The scent will be a valuable clue
          for that person to remember you.
        </p>
        <p>
          We recommend gifts according to your preference, mood, purpose and
          price.
        </p>
        <Link to="#">
          <button>Find Your Gift</button>
        </Link>
      </div>
      <img
        className="main-img"
        src="./images/second_item.png"
        alt="recommend gift"
      />
      <img className="back-img" src="./images/watercolor.png" alt="배경" />
      {/* <img className="back-paint2" src="./images/paint.png" alt="배경" /> */}
    </SecondMainPage>
  );
};

const SecondMainPage = styled.section`
  @keyframes rightup {
    from {
      left: -500px;
    }
    to {
      left: -15px;
    }
  }
  @keyframes leftup {
    from {
      right: -500px;
    }
    to {
      right: -50px;
    }
  }
  background-color: ${COLOR.main};
  height: 120vh;
  display: flex;
  justify-content: center;
  gap: 100px;
  position: relative;
  .back-paint {
    position: absolute;
    left: -15px;
    top: -80px;
    width: 550px;
    height: 150px;
    animation: rightup;
    animation-duration: 10s;
  }
  .back-img {
    position: absolute;
    top: 330px;
    right: 300px;
    width: 550px;
    height: 150px;
    transform: rotate(180deg);
  }
  .back-paint2 {
    position: absolute;
    bottom: 230px;
    right: -50px;
    width: 550px;
    height: 150px;
    transform: rotate(180deg);
    animation: leftup;
    animation-duration: 10s;
  }
  .cont-item {
    margin: 100px 0;
    width: 500px;
    h2 {
      margin-bottom: 40px;
      font-size: 60px;
      font-family: ${Font.des};
      color: #fff;
      text-shadow: 8px 4px 4px rgba(0, 0, 0, 0.25);
    }
    p {
      font-size: 30px;
      font-family: ${Font.des};
    }
    button {
      width: 400px;
      height: 80px;
      margin-top: 70px;
      border: 3px solid #fff;
      border-radius: 10px;
      background-color: ${COLOR.deep};
      font-size: 28px;
      font-family: ${Font.des};
      color: #fff;
      &:hover {
        background-color: ${COLOR.figma};
      }
    }
  }
  .main-img {
    margin-top: 10px;
    width: 550px;
    height: 500px;
    z-index: 1;
  }
  @media screen and (max-width: 440px) {
    .back-paint {
      position: absolute;
      left: -15px;
      top: -80px;
      width: 150px;
      height: 150px;
      animation: rightup;
      animation-duration: 10s;
    }
    .cont-item {
      margin: 100px 0;
      width: 390px;
      h2 {
        margin-bottom: 40px;
        font-size: 60px;
        font-family: ${Font.des};
        color: #fff;
        text-shadow: 8px 4px 4px rgba(0, 0, 0, 0.25);
      }
      p {
        font-size: 30px;
        font-family: ${Font.des};
      }
      button {
        width: 387px;
        height: 80px;
        margin-top: 70px;
        border: 3px solid #fff;
        border-radius: 10px;
        background-color: ${COLOR.deep};
        font-size: 28px;
        font-family: ${Font.des};
        color: #fff;
        &:hover {
          background-color: ${COLOR.figma};
        }
      }
    }
    .main-img {
      /* margin-top: 10px;
    width: 550px;
    height: 500px;
    z-index: 1; */
      display: none;
    }
  }
`;
