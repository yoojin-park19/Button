import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Font } from '../../constants';
import { Link } from 'react-router-dom';
import { MainBackAni } from '../../components/Main/MainBackAni';

export const SecondMain = () => {
  return (
    <SecondMainPage>
      <div className="img-wrap">
        <MainBackAni />
        <img src="./images/background/second.jpg" alt="London" />
      </div>
      <div className="cont-item">
        <div className="cont-tit">
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
      </div>
    </SecondMainPage>
  );
};

const SecondMainPage = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  .img-wrap {
    width: 50%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .cont-item {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .cont-tit {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
