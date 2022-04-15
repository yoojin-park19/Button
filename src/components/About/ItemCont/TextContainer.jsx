import styled from '@emotion/styled';
import { Font } from '../../../constants';

export const TextContainer = (props) => {
  return (
    <>
      <TextContainers width={props.width}>
        <img className="item5" src={props.src} alt="" />
        <ul>
          <li>
            <h3>{props.title} </h3>
          </li>
          <li width={props.width} height={props.height} align={'start'}>
            {props.des}
          </li>
          <li width={props.width} height={props.height} align={'start'}>
            {props.des2}
          </li>
        </ul>
      </TextContainers>
    </>
  );
};
const TextContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 15vw;
  gap: 100px;
  width: 80vw;
  height: 80vh;
  text-align: center;
  font-family: ${Font.title};
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
      width: ${(props) => `${props.width}`}px;
      height: ${(props) => `${props.height}`}px;
      text-align: ${(props) => `${props.align}`};
      h3 {
        font-family: ${Font.title};
        font-size: 20px;
        margin-bottom: 30px;
      }
    }
  }
  .item5 {
    width: 280px;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.6));
  }
  @media screen and (max-width: 420px) {
    gap: 10px;
    width: 280px;
    color: #fff;
    ul {
      position: relative;
      z-index: 20;
      width: 200px;
      margin-top: 100px;
      margin-left: 10px;
      li {
        width: 200px;
        text-align: center;
      }
    }
    .item5 {
      position: absolute;
      z-index: 10;
      top: 20px;
      left: 50%;
      margin-left: -60px;
      width: 120px;
      height: 171px;
    }
  }
`;
