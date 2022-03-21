import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { Link } from 'react-router-dom';
export const FirstMain = () => {
  return (
    <FirstMainPage>
      <Img>
        <img className="back-flower" src="./images/flower.png" alt="배경" />
      </Img>
      <div className="cont-item">
        <h2>It's For You</h2>
        <p>Choose a perfume that suits your mood.</p>
        <p>We recommend perfume to suit the mood you want.</p>
        <Link to="/test">
          <button>Find Your Mood</button>
        </Link>
        <img
          className="back-img"
          src="./images/lavender_back.png"
          alt="라벤더"
        />
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
  margin: 100px 100px 0 50px;
  width: 400px;
  height: 400px;
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
`;
const FirstMainPage = styled.section`
  background-color: ${COLOR.main};
  background-position: 1100px;
  height: 130vh;
  display: flex;
  justify-content: center;
  position: relative;
  .cont-item {
    margin: 150px 120px 0 0;
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
  }

  .back-img {
    position: absolute;
    width: 400px;
    height: 530px;
    right: -50px;
    top: 230px;
    transform: rotate(35deg);
    animation: showup;
    animation-duration: 8s;
    z-index: -1;
  }
`;
