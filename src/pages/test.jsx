import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR, Font } from '../constants';
import { MainHeader } from '../components/MainHeader';
import { Question0nePage } from '../components/Test/Question0ne';

const TestIndexPage = () => {
  const [test, setTest] = useState(true);
  return (
    <>
      <MainHeader />
      <TestPage>
        <div className="container">
          {test ? (
            <Welcome>
              <h1>당신을 위한 향수를 추천해드릴께요.</h1>
              <button onClick={() => setTest(false)}>
                <img src="./images/background/backgrounditem.png" alt="클릭" />
                Click to Find your mood
              </button>
            </Welcome>
          ) : (
            <>
              <div className="wrap">
                <Question0nePage />
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
      font-size: 26px;
    }
  }
`;

const TestPage = styled.section`
  width: 100vw;
  height: 110vh;
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
    padding-top: 30px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .wrap {
    height: 80vh;
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
      padding-top: 50px;
    }
    .wrap {
      height: 100vh;
      width: 90vw;
      padding: 20px 0px;
    }
  }
  @media screen and (max-width: 420px) {
    .container {
      padding-top: 30px;
    }
    .wrap {
      height: 75vh;
      padding: 5px 0px;
    }
  }
`;

export default TestIndexPage;
