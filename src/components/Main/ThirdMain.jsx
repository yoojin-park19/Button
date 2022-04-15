import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Font } from '../../constants';
import { COLOR } from '../../constants';

export const ThirdMain = () => {
  return (
    <ThridMainPage>
      <div className="cont-item">
        <h2>about Perfume</h2>
        <p className="kr">
          당신이 원하는 향기, 브랜드, 느낌, 예산에 맞춰 향수를 찾아 볼 수
          있습니다.
        </p>
        <Link to="/category">
          <Button>
            <p>보러가기</p>
          </Button>
        </Link>
      </div>
      <img src="./images/background/third.jpg" alt="" />
    </ThridMainPage>
  );
};

const ThridMainPage = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  .cont-item {
    display: flex;
    margin-left: 150px;
    flex-direction: column;
    justify-content: center;
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
  img {
    width: 50%;
  }
  @media screen and (max-width: 720px) {
    display: flex;
    align-items: center;
    background: url('./images/background/third.jpg');
    background-size: cover;
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
        margin-left: 80px;
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
