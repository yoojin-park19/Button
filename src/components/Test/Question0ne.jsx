import styled from '@emotion/styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TestList } from '../../constants/testList';

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
  width: 100px;
  height: 30px;
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
    top: 10px;
    left: 10px;
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
  }
  .questionTit {
    text-align: center;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;
