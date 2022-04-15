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
    margin-right: 20px;
    font-size: 22px;
    button {
      font-size: 26px;
    }
  }
`;

const TestPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${COLOR.top};
  font-family: ${Font.kr};
  .container {
    width: 60vw;
    height: 95vh;
    margin: 0 auto;
    position: relative;
    background-color: ${COLOR.top};
    box-sizing: border-box;
    padding-top: 50px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .wrap {
    height: 90vh;
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
      height: 90vh;
      padding-top: 10px;
    }
    .wrap {
      height: 70vh;
      width: 90vw;
      padding: 40px 0px;
    }
  }
`;

export default GiftIndexPage;
