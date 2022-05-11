import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR, Font } from '../constants';
import { MainHeader } from '../components/MainHeader';
import { QuestionGiftPage } from '../components/Test/QuestionGift';

const GiftIndexPage = () => {
  const [test, setTest] = useState(true);
  return (
    <>
      <MainHeader />
      <TestPage>
        <div className="container">
          {test ? (
            <Welcome>
              <h1>소중한 사람을 위한 향수를 추천해드릴께요.</h1>
              <button onClick={() => setTest(false)}>
                <img src="./images/background/backgrounditem.png" alt="클릭" />
                Click to Find your mood
              </button>
            </Welcome>
          ) : (
            <>
              <div className="wrap">
                <QuestionGiftPage />
              </div>
            </>
          )}
        </div>
      </TestPage>
    </>
  );
};
const Welcome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  gap: 50px;
  text-align: center;
  color: #fff;
  font-family: ${Font.title};
  font-size: 28px;
  button {
    color: #fff;
    background-color: transparent;
    border: none;
    font-size: 30px;
    font-family: ${Font.des};
    &:hover {
      color: ${COLOR.sub};
    }
    img {
      margin-right: 10px;
      &:hover {
        filter: hue-rotate(90deg);
      }
    }
  }
  @media screen and (max-width: 720px) {
    line-height: 1.5;
    gap: 80px;
    font-size: 28px;
    button {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 420px) {
    font-size: 22px;
    button {
      display: flex;
      flex-direction: row;
      font-size: 26px;
      img {
        margin-top: -20px;
      }
    }
  }
`;

const TestPage = styled.section`
  width: 100vw;
  height: 110vh;
  display: flex;
  background-color: ${COLOR.top};
  font-family: ${Font.kr};
  padding-bottom: 20px;

  .container {
    width: 60vw;
    margin: 0 auto;
    position: relative;
    background-color: ${COLOR.top};
    box-sizing: border-box;
    padding-top: 30px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .wrap {
    width: 50vw;
    padding: 50px 5vw;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 720px) {
    .container {
      width: 100vw;
      height: 150vh;
      padding-top: 50px;
    }
    .wrap {
      width: 90vw;
      padding: 20px 0px;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100vw;
    height: 100vh;
    .container {
      padding-top: 30px;
      height: 80vh;
    }
    .wrap {
      padding: 5px 0px;
    }
  }
`;

export default GiftIndexPage;
