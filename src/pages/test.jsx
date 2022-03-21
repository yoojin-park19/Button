import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR } from '../constants';
import { MainHeader } from '../components/MainHeader';
import { Font } from '../constants';

const TestIndexPage = () => {
  return (
    <>
      <MainHeader />
      <TestPage>
        <div className="container">
          <TestProgress>
            <div className="bar"></div>
            <p className="amount">
              <span className="number"></span>/ 12
            </p>
          </TestProgress>
          <TestContainer>
            <p className="firstMessage">
              당신의 취향 테스트 페이지 입니다.
              <br />
              생각나는 이미지나 느낌을 골라주시면 됩니다.
            </p>
          </TestContainer>
        </div>
      </TestPage>
    </>
  );
};

const TestPage = styled.section`
  width: 100vw;
  height: 100%;
  background-color: ${COLOR.gray};
  .container {
    width: 60vw;
    height: 90vh;
    margin: 0 auto;
    background-color: ${COLOR.main};
    box-sizing: border-box;
    padding-top: 50px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;
const TestProgress = styled.section`
  font-size: 60px;
  font-family: ${Font.des};
  width: 50vw;
  height: 33px;
  border-radius: 10px;
  background-color: ${COLOR.gray};
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 5px 3px 4px rgba(0, 0, 0, 0.1);
  .bar {
    width: 50px;
    height: 33px;
    border-radius: 10px;
    background-color: ${COLOR.right};
  }
  .amount {
    height: 33px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    color: ${COLOR.blue};
  }
`;
const TestContainer = styled.section`
  margin-top: 100px;
  .firstMessage {
    text-align: center;
    line-height: 40px;
    font-size: 28px;
    font-family: ${Font.title};
    font-weight: 900;
    text-shadow: 5px 5px 5px gray;
  }
`;
export default TestIndexPage;
