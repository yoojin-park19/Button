import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { Link } from 'react-router-dom';
export const FirstMain = () => {
  return (
    <FirstMainPage>
      <Img>
        <img className="back-flower" src="./images/flower.png" alt="배경" />
        <img
          className="back-img"
          src="./images/lavender_back.png"
          alt="라벤더"
        />
      </Img>
      <div className="cont-item">
        <h2>It's For You</h2>
        <p>Choose a perfume that suits your mood.</p>
        <p>We recommend perfume to suit the mood you want.</p>
        <Link to="/test">
          <button>Find Your Mood</button>
        </Link>
      </div>
    </FirstMainPage>
  );
};
const Img = styled.div`
  @keyframes showup {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  background: url('./images/lavender.jpg');
  background-size: cover;
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50px;
  z-index: 1;
  .back-flower {
    position: absolute;
    bottom: -150px;
    right: -200px;
    width: 200px;
    height: 400px;
    animation: showup;
    animation-duration: 8s;
  }
  .back-img {
    position: absolute;
    width: 400px;
    height: 530px;
    right: -350px;
    bottom: 0px;
    transform: rotate(35deg);
    animation: showup;
    animation-duration: 8s;
    z-index: -1;
  }
  @media screen and (max-width: 720px) {
    background: none;

    position: relative;
    width: 1px;
    height: 1px;
    border-radius: 0px;
    z-index: 1;
    .back-img {
      display: none;
    }
    .back-flower {
      position: absolute;
      transform: rotate(270deg);
      bottom: 50px;
      right: -250px;
      width: 100px;
      height: 200px;
      animation: showup;
      animation-duration: 8s;
    }
  }
`;
const FirstMainPage = styled.section`
  background-color: ${COLOR.main};
  height: 100vh;
  display: flex;
  padding-top: 200px;
  justify-content: space-evenly;
  position: relative;
  .cont-item {
    margin-top: 50px;
    z-index: 1;
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
  @media screen and (max-width: 440px) {
    display: flex;
    padding-top: 0px;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .cont-item {
      display: flex;
      flex-direction: column;
      padding-top: 0px;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 440px;
      margin-top: 50px;
      z-index: 1;
      h2 {
        margin-bottom: 40px;
        font-size: 40px;
        font-family: ${Font.des};
        color: #fff;
        text-shadow: 8px 4px 4px rgba(0, 0, 0, 0.25);
      }
      p {
        font-size: 20px;
        font-family: ${Font.des};
      }
      button {
        width: 300px;
        height: 80px;
        margin-top: 70px;
        border: 3px solid #fff;
        border-radius: 10px;
        background-color: ${COLOR.deep};
        font-size: 18px;
        font-family: ${Font.des};
        color: #fff;
        &:hover {
        }
      }
    }
  }
`;
