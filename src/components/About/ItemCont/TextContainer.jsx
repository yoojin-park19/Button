import styled from '@emotion/styled';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
export const TextContainer = (props) => {
  return (
    <>
      <TextContainers>
        <img className="item5" src={props.src} alt="" />
        <ul>
          <li>
            <h3>{props.title} </h3>
          </li>
          <li>{props.des}</li>
        </ul>
      </TextContainers>
    </>
  );
};
const TextContainers = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 15vw;
  gap: 100px;
  width: 80vw;
  height: 80vh;
  text-align: center;
  font-family: 'Do Hyeon', sans-serif;
  .fixed {
    display: fixed;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    li {
      margin-bottom: 20px;
      h3 {
        font-family: 'Do Hyeon';

        font-size: 20px;
        margin-bottom: 30px;
      }
    }
  }
  .item5 {
    width: 280px;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.6));
  }
`;
