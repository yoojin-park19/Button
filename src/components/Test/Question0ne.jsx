import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Font, COLOR } from '../../constants';
import { TestList } from '../../constants/testList';

export const Question0nePage = (props) => {
  console.log(TestList);
  console.log(TestList[1].Item[0].Question);
  return (
    <Question0ne>
      <p className="questionTit">{TestList[1].Title}</p>

      <form action="">
        <div className="itemContainer">
          <div>
            <input id="0" type="radio" name="test" />
            <label htmlFor="0">{TestList[1].Item[0].Question}</label>
          </div>
          <div>
            <input id="1" type="radio" name="test" />
            <label htmlFor="1">{TestList[1].Item[1].Question}</label>
          </div>
        </div>
      </form>
    </Question0ne>
  );
};

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
