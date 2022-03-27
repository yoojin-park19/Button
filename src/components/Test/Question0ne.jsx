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
  box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: ${Font.title};
  background-color: rgba(254, 254, 254, 0.8);
  color: ${COLOR.main};
  &:hover {
    background-color: ${COLOR.right};
    color: ${COLOR.deep};
  }
`;

const Question0ne = styled.section`
  width: 40vw;
  height: 20px;
  .itemContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    div {
      position: relative;
    }
  }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    top: -100px;
    left: -100px;
  }
  label {
    display: block;
    width: 40vw;
    height: 40px;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-left: 40px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    line-height: 40px;
    &:hover {
      background-color: ${COLOR.right};
      color: ${COLOR.deep};
    }
  }
  .questionTit {
    text-align: center;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 420px) {
    width: 90vw;
    .questionTit {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    label {
    display: flex;
    align-items:center;
    width: 90vw;
    height: 60px;
    font-size: 14px;
    line-height: 16px;

  }
`;
