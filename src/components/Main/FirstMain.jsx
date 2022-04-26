import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Font } from '../../constants';
import { Link } from 'react-router-dom';
import { MainBackAni } from '../../components/Main/MainBackAni';
import { useState, useEffect } from 'react';

export const FirstMain = () => {
  const [isMobile, setisMobile] = useState(false);
  const resizingHandler = () => {
    if (window.innerWidth <= 720) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth <= 720) {
      setisMobile(true);
    }
    window.addEventListener('resize', resizingHandler);
    return () => {
      window.removeEventListener('resize', resizingHandler);
    };
  }, []);

  return (
    <FirstMainPage>
      {isMobile ? <MainBackAni /> : null}
      <div className="cont-item">
        <div className="cont-tit">
          <h2>For You</h2>
          <p className="kr">
            당신의 그날의 기분, 원하는 분위기, 선호하는 향기에 따라 향수를 추천
            드릴께요.
          </p>
          <Link to="/test">
            <Button>
              <p>보러가기</p>
            </Button>
          </Link>
        </div>
      </div>
      <div className="img-wrap">
        {isMobile ? null : <MainBackAni />}
        <img src="./images/background/first.jpg" alt="france" />
      </div>
    </FirstMainPage>
  );
};

const FirstMainPage = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
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
  .img-wrap {
    width: 50%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 720px) {
    display: flex;
    align-items: center;
    background: url('./images/background/first.jpg');
    justify-content: center;
    .cont-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .cont-tit {
        width: 320px;
        h2 {
          font-size: 50px;
          color: #fff;
        }
        .kr {
          font-size: 16px;
          color: #fff;
        }
      }
    }
    .img-wrap {
      display: none;
      img {
        display: none;
      }
    }
    @media screen and (max-width: 420px) {
      .cont-item {
        width: 200px;
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
