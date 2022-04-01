import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { Link } from 'react-router-dom';

export const SecondMain = () => {
  return (
    <SecondMainPage>
      <div className="cont-item">
        <h2>It's For your loved ones</h2>
        <p className="kr">당신의 소중한 사람에게 선물할 향수를 추천해드려요.</p>
        <Link to="/test">
          <Button>
            <img src="./images/check.svg" alt="체크" />
            <p>Click to</p>
            <p>Find Your Mood</p>
          </Button>
        </Link>
      </div>
    </SecondMainPage>
  );
};

const SecondMainPage = styled.section`
  height: 90vh;
  display: flex;
  padding-top: 200px;
  justify-content: space-evenly;
  position: relative;
  .cont-item {
    width: 600px;
    position: absolute;
    top: 0;
    left: 100px;
    text-align: center;
    h2 {
      font-size: 120px;
      font-family: ${Font.des};
      color: ${COLOR.trend_main};
      text-shadow: 8px 4px 15px rgba(105, 0, 147, 0.7);
    }
    .kr {
      color: #777;
      font-size: 30px;
      font-family: ${Font.etilte};
    }
  }
  @media screen and (max-width: 720px) {
    height: 80vh;
    .cont-item {
      left: 0px;
      width: 100vw;
      h2 {
        font-size: 50px;
        color: #fff;
      }
      .kr {
        color: #fff;
        font-size: 20px;
      }
    }
  } ;
`;

const Button = styled.button`
  width: 400px;
  height: 80px;
  margin-top: 170px;
  border: none;
  border-radius: 10px;
  font-size: 50px;
  font-family: ${Font.des};
  color: ${COLOR.trend_main};
  background-color: transparent;
  img {
    width: 150px;
    height: 100px;
    &:hover {
      filter: grayscale(80%);
    }
  }
  @media screen and (max-width: 720px) {
    width: 300px;
    margin-top: 170px;
    border: none;
    font-size: 50px;
    color: #fff;
    &:hover {
      color: ${COLOR.right};
    }
    img {
      display: none;
    }
  }
  } ;
`;
