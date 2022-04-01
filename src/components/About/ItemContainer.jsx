import styled from '@emotion/styled';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
export const ItemContainer = () => {
  return (
    <>
      <ItemContainers>
        <Title>About us</Title>
        <ItemWrapper>
          <ImgContainer>
            <Fade right cascade>
              <img
                className="item2"
                src="./images/about/back_item2.png"
                alt=""
              />
              <img
                className="item4"
                src="./images/about/back_item4.png"
                alt=""
              />
              <img
                className="item3"
                src="./images/about/back_item3.png"
                alt=""
              />
            </Fade>
          </ImgContainer>
          <TextContainer>
            <img className="item5" src="./images/about/gucci_item.png" alt="" />
            <ul>
              <li>
                <h3>저희 사이트를 </h3>
              </li>
              <li>방문해주셔서 감사합니다.</li>
            </ul>
          </TextContainer>
        </ItemWrapper>
      </ItemContainers>
    </>
  );
};

const ItemContainers = styled.div`
  width: 70vw;
  height: 80vh;
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e8d5c0;
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.3);
`;
const Title = styled.p`
  font-size: 40px;
  font-family: 'Song Myung', serif;
`;

const ItemWrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgContainer = styled.div`
  position: absolute;
  width: 80vw;
  height: 80vh;
  .item2 {
    width: 200px;
    position: absolute;
    top: 0px;
    right: 0;
  }
  .item3 {
    width: 180px;
    position: absolute;
    bottom: -70px;
    left: 0;
    transform: rotate(-40deg);
  }
  .item4 {
    width: 180px;
    position: absolute;
    bottom: 100px;
    left: 0;
  }
`;

const TextContainer = styled.div`
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
