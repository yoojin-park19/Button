import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { Link } from 'react-router-dom';
export const FirstMain = () => {
  return (
    <FirstMainPage>
      <img src="./images/lavender.jpg" alt="home" />
      <div className="cont-item">
        <h2>It's For You</h2>
        <p>Choose a perfume that suits your mood.</p>
        <p>We recommend perfume to suit the mood you want.</p>
        <Link to="#">
          <button>Find Your Mood</button>
        </Link>
      </div>
      <div className="backgroundImage"></div>
    </FirstMainPage>
  );
};

const FirstMainPage = styled.section`
  background-color: ${COLOR.main};

  background-image: url('./images/lavender_back.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 1100px;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 100px;
  img {
    margin: 100px 100px 0 50px;
    width: 400px;
    height: 400px;
  }
  .cont-item {
    margin: 150px 100px 0 0;
    h2 {
      margin-bottom: 40px;
      font-size: 60px;
      font-family: ${Font.des};
      color: #fff;
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
    }
  }
`;
