import styled from '@emotion/styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TestListForGift } from '../../constants/testList';
import { COLOR, Font } from '../../constants';

export const QuestionGiftPage = (props) => {
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
        <QuestionGift>
          <p className="questionTit">{TestListForGift[`${Test}`].Title}</p>
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
                  {TestListForGift[`${Test}`].Item[0].Question}
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
                  {TestListForGift[`${Test}`].Item[1].Question}
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
                  {TestListForGift[`${Test}`].Item[2].Question}
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
                  {TestListForGift[`${Test}`].Item[3].Question}
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
                  {TestListForGift[`${Test}`].Item[4].Question}
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
                    {TestListForGift[`${Test}`].Item[5].Question}
                  </label>
                </div>
              ) : null}
            </div>
          </form>
          <div className="count">{Test}/5</div>
        </QuestionGift>
      ) : (
        <Link
          to={{
            pathname: `/giftResult`,
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
  width: 450px;
  height: 100px;
  margin: 80px auto;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 2px 1px rgba(202, 171, 32, 0.322);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: ${Font.kr};
  background-color: ${COLOR.top};
  color: #fff;
  &:hover {
    background-color: rgba(202, 171, 32, 0.322);
    color: ${COLOR.trend_main};
  }
  @media screen and (max-width: 720px) {
    font-size: 24px;
  }
  @media screen and (max-width: 420px) {
    width: 300px;
    height: 100px;
  }
`;

const QuestionGift = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      width: 45vw;
      height: 65px;
      box-sizing: border-box;
      margin-bottom: 10px;
      padding: 12px 25px;
      font-size: 20px;
      border-radius: 10px;
      background-color: ${COLOR.top};
      box-shadow: 2px 2px 2px 1px rgba(202, 171, 32, 0.322);
      color: #fff;
      line-height: 40px;
      &:hover {
        background-color: rgba(202, 171, 32, 0.322);
        color: ${COLOR.trend_main};
        font-size: 19px;
        line-height: 45px;
        &::before {
          content: '';
          display: block;
          background: url('./images/background/backgrounditem.png');
          background-size: contain;
          width: 20px;
          height: 40px;
          margin: -5px 15px 0 0;
        }
      }
    }
  }
  .questionTit {
    text-align: center;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 50px;
    color: ${COLOR.deep};
  }
  .count {
    margin-top: 20px;
  }
  @media screen and (max-width: 720px) {
    .itemContainer {
      padding-bottom: 20px;
      label {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 80vw;
        padding: 5px;
        font-size: 20px;
        line-height: 20px;
        &:hover {
          font-size: 18px;
        }
      }
    }
    .questionTit {
      text-align: center;
      font-size: 24px;
      margin: 40px 0;
    }
    .count {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 420px) {
    .questionTit {
      font-size: 18px;
    }
    .itemContainer {
      label {
        height: 70px;
        width: 80vw;
        padding: 15px;
        font-size: 14px;
        &:hover {
          background-color: rgba(202, 171, 32, 0.322);
          color: ${COLOR.trend_main};
          font-size: 14px;
          line-height: 15px;
          &::before {
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
`;
