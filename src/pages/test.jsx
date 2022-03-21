import styled from '@emotion/styled';
import { useState } from 'react';
import { TestList } from '../constants/testList';
import { COLOR, Font } from '../constants';
import { MainHeader } from '../components/MainHeader';
import { Welcome } from '../components/Test/Welcome';
import { Question0nePage } from '../components/Test/Question0ne';

const TestIndexPage = () => {
  const test = false;
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
          {test ? (
            <>
              <Welcome description={TestList[0].Title} />
              <Welcome description={TestList[0].Title2} />
            </>
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

const TestPage = styled.section`
  width: 100vw;
  height: 100%;
  background-color: ${COLOR.gray};
  font-family: ${Font.title};
  .container {
    width: 60vw;
    height: 90vh;
    margin: 0 auto;
    position: relative;
    background-color: ${COLOR.main};
    box-sizing: border-box;
    padding-top: 50px;
    padding-left: 5vw;
    padding-right: 5vw;
  }

  .wrap {
    height: 418px;
    width: 50vw;
    padding: 50px 5vw;
    box-sizing: border-box;
    margin: 0 1%;
    border-radius: 10px;
    background-color: rgba(236, 236, 236, 0.6);
    box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.3);
  }
`;
const TestProgress = styled.section`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  height: 33px;
  border-radius: 10px;
  background-color: ${COLOR.gray};
  padding-right: 20px;
  margin-bottom: 50px;
  box-shadow: 5px 5px 3px 4px rgba(0, 0, 0, 0.1);
  font-size: 60px;
  font-family: ${Font.des};
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

export default TestIndexPage;
