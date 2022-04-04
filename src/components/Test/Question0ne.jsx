import styled from '@emotion/styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TestList } from '../../constants/testList';
import { COLOR, Font } from '../../constants';

export const Question0nePage = (props) => {
  const [Test, setTest] = useState(0);
  const [checkList, setCheckList] = useState([]);
  const check = (e) => {
    if (e.target.value === 'on') {
      checkList[`${Test}`] = 1;
      setCheckList(checkList);
      setTest(Test + 1);
    } else {
      checkList[`${Test}`] = parseInt(e.target.value);
      setCheckList(checkList);
      setTest(Test + 1);
    }
  };

  return (
    <>
      {Test !== 5 ? (
        <Question0ne>
          <p className="questionTit">{TestList[`${Test}`].Title}</p>
          <form action="">
            <div className="itemContainer">
              <div>
                <input
                  id="1"
                  type="radio"
                  name="test"
                  vaulue="1"
                  onClick={check}
                />
                <label htmlFor="1">
                  {TestList[`${Test}`].Item[0].Question}
                </label>
              </div>
              <div>
                <input
                  id="2"
                  type="radio"
                  name="test"
                  value="2"
                  onClick={check}
                />
                <label htmlFor="2">
                  {TestList[`${Test}`].Item[1].Question}
                </label>
              </div>
              <div>
                <input
                  id="3"
                  type="radio"
                  name="test"
                  value="3"
                  onClick={check}
                />
                <label htmlFor="3">
                  {TestList[`${Test}`].Item[2].Question}
                </label>
              </div>
              <div>
                <input
                  id="4"
                  type="radio"
                  name="test"
                  value="4"
                  onClick={check}
                />
                <label htmlFor="4">
                  {TestList[`${Test}`].Item[3].Question}
                </label>
              </div>
              <div>
                <input
                  id="5"
                  type="radio"
                  name="test"
                  value="5"
                  onClick={check}
                />
                <label htmlFor="5">
                  {TestList[`${Test}`].Item[4].Question}
                </label>
              </div>
              {Test === (2 || 3) ? (
                <div>
                  <input
                    id="6"
                    type="radio"
                    name="test"
                    value="6"
                    onClick={check}
                  />
                  <label htmlFor="6">
                    {TestList[`${Test}`].Item[5].Question}
                  </label>
                </div>
              ) : null}
            </div>
          </form>
          <div className="count">{Test}/5</div>
        </Question0ne>
      ) : (
        <Link
          to={{
            pathname: `/result`,
            state: {
              testList: checkList,
            },
          }}
        >
          <Button>결과보러가기</Button>
        </Link>
      )}
    </>
  );
};
const Button = styled.button`
  width: 300px;
  height: 100px;
  margin: 80px auto;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 2px 1px rgba(202, 171, 32, 0.322);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: ${Font.title};
  background-color: ${COLOR.top};
  color: #fff;
  &:hover {
    background-color: rgba(202, 171, 32, 0.322);
    color: ${COLOR.trend_main};
  }
`;

const Question0ne = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 100px;
  .itemContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    div {
      position: relative;
    }
    input {
      position: absolute;
      width: 1px;
      height: 1px;
      top: -100px;
      left: -100px;
    }
    label {
      display: flex;
      width: 40vw;
      height: 90px;
      box-sizing: border-box;
      margin-bottom: 10px;
      padding: 25px;
      font-size: 20px;
      border-radius: 10px;
      background-color: ${COLOR.top};
      box-shadow: 2px 2px 2px 1px rgba(202, 171, 32, 0.322);
      color: #fff;
      line-height: 40px;
      &:hover {
        background-color: rgba(202, 171, 32, 0.322);
        color: ${COLOR.trend_main};
        &::before {
          content: '';
          display: block;
          background: url('./images/background/backgrounditem.png');
          width: 30px;
          height: 60px;
          margin: -18px 15px 0 0;
        }
      }
    }
  }
  .questionTit {
    text-align: center;
    font-size: 28px;
    line-height: 24px;
    margin-bottom: 50px;
    color: ${COLOR.deep};
  }
  .count {
    margin-top: 80px;
  }
  @media screen and (max-width: 720px) {
    width: 90vw;
    .itemContainer {
      label {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 80vw;
        padding: 5px;
        font-size: 15px;
        line-height: 20px;
        &:hover {
          background-color: rgba(202, 171, 32, 0.322);
          color: ${COLOR.trend_main};
          &::before {
            content: '';
            display: block;
            background: url('./images/background/backgrounditem.png');
            width: 30px;
            height: 60px;
            margin: -18px 15px 0 0;
          }
        }
      }
    }
    .questionTit {
      text-align: center;
      font-size: 19px;
      margin-bottom: 20px;
    }
    .count {
      margin-top: 10px;
    }
  }
`;
