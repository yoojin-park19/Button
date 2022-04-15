import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Font } from '../../constants';
import { Link } from 'react-router-dom';

export const SecondMain = () => {
  return (
    <SecondMainPage>
      <img src="./images/background/second.jpg" alt="" />
      <div className="cont-item">
        <h2>For your loved ones</h2>
        <p className="kr">
          당신의 소중한 사람의 분위기나 느낌에 따라 선물을 추천해드릴께요.
        </p>
        <Link to="/test">
          <Button>
            <p>보러가기</p>
          </Button>
        </Link>
      </div>
    </SecondMainPage>
  );
};

const SecondMainPage = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  img {
    width: 50%;
  }
  .cont-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 15%;
    width: 400px;
    text-align: center;
    h2 {
      font-size: 90px;
      font-family: ${Font.etitle};
      color: #000;
      text-shadow: 8px 4px 5px #4f355ab1;
    }
    .kr {
      color: #000;
      font-size: 20px;
      line-height: 1.5;
      margin-top: 40px;
      font-family: ${Font.kr};
    }
  }
  @media screen and (max-width: 720px) {
    display: flex;
    align-items: center;
    background: url('./images/background/second.jpg');
    background-size: cover;
    background-position: -220px;
    .cont-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 120px;
      width: 300px;
      text-align: center;
      h2 {
        font-size: 50px;
        color: #fff;
      }
      .kr {
        font-size: 16px;
        color: #fff;
      }
    }
    img {
      display: none;
    }
    @media screen and (max-width: 420px) {
      .cont-item {
        width: 200px;
        margin-left: 25%;
      }
    }
  }
`;

const Button = styled.button`
  width: 400px;
  height: 60px;
  margin-top: 40px;
  font-size: 24px;
  font-family: ${Font.kr};
  color: #fff;
  background-color: ${COLOR.deep};
  border: none;
  border-radius: 10px;
  &:hover {
    color: ${COLOR.right};
    background-color: ${COLOR.sub};
  }
  @media screen and (max-width: 720px) {
    font-size: 16px;
    width: 250px;
    background-color: transparent;
    border: 3px double #fff;
  }
`;
