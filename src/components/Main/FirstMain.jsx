import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Font } from '../../constants';
import { Link } from 'react-router-dom';
export const FirstMain = () => {
  return (
    <FirstMainPage>
      <img className="back-flower" src="./images/flower.png" alt="배경" />
      <img className="main-img" src="./images/lavender.jpg" alt="home" />
      <div className="cont-item">
        <h2>It's For You</h2>
        <p>Choose a perfume that suits your mood.</p>
        <p>We recommend perfume to suit the mood you want.</p>
        <Link to="#">
          <button>Find Your Mood</button>
        </Link>
      </div>
      <img className="back-img" src="./images/lavender_back.png" alt="라벤더" />
    </FirstMainPage>
  );
};

const FirstMainPage = styled.section`
  /* @keyframes showup {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  } */
  background-color: ${COLOR.main};
  height: 130vh;
  display: flex;
  justify-content: center;
  position: relative;
  .main-img {
    margin: 100px 150px 0 0;
    width: 400px;
    height: 400px;
    z-index: 1;
  }
  .cont-item {
    margin-top: 150px;
    margin-left: 200px;
    z-index: 1;
    animation: showup;
    animation-duration: 3s;
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
      width: 250px;
      height: 40px;
      margin-top: 70px;
      border: none;
      background-color: ${COLOR.point};
      font-size: 18px;
      color: #fff;
      &:hover {
        background-color: #797742;
      }
    }
    .back-flower {
      position: absolute;
      top: 200px;
      left: 520px;
      width: 200px;
      height: 400px;
      animation: showup;
      animation-duration: 5s;
    }
    .back-img {
      position: absolute;
      width: 400px;
      height: 530px;
      right: -50px;
      top: 230px;
      transform: rotate(35deg);
      animation: showup;
      animation-duration: 5s;
    }
  }
  @media screen and (max-width: 390px) {
    height: 130vh;
    .main-img {
      border: 1px solid red;
      margin: 100px 150px 0 0;
      width: 100px;
      height: 100px;
    }
  }
`;
