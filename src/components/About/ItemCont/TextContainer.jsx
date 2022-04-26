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
          <li width={props.width} height={props.height} align={'center'}>
            {props.des}
          </li>
          <li width={props.width} height={props.height} align={'center'}>
            {props.des2}
          </li>
          <li width={props.width} height={props.height} align={'center'}>
            {props.des3}
          </li>
          <li
            className="animation"
            width={props.width}
            height={props.height}
            align={'center'}
          >
            {props.des4}
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
  font-family: ${Font.des};
  .fixed {
    display: fixed;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    height: 300px;
    .animation {
      font-family: ${Font.ko};
    }
    li {
      margin-bottom: 20px;
      width: ${(props) => `${props.width}`}px;
      height: ${(props) => `${props.height}`}px;
      text-align: ${(props) => `${props.align}`};
      h3 {
        text-shadow: 4px 3px 4px rgba(106, 105, 106, 0.6);
        font-family: ${Font.des};
        font-size: 26px;
        margin-bottom: 30px;
      }
    }
  }
  .item5 {
    width: 280px;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.6));
  }
  @media screen and (max-width: 720px) {
    margin-left: 30px;
    gap: 0px;
    width: 70vw;
    height: 80vh;
    font-family: ${Font.des};
    .item5 {
      width: 160px;
      filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.6));
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      width: 240px;
      height: 230px;
      .animation {
        font-family: ${Font.ko};
      }
      li {
        margin-bottom: 20px;
        width: ${(props) => `${props.width}`}px;
        height: ${(props) => `${props.height}`}px;
        text-align: ${(props) => `${props.align}`};
        h3 {
          text-shadow: 4px 3px 4px rgba(106, 105, 106, 0.6);
          font-family: ${Font.des};
          font-size: 26px;
          margin-bottom: 30px;
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    gap: 10px;
    width: 280px;
    color: #fff;
    ul {
      position: relative;
      z-index: 20;
      width: 200px;
      margin-top: 220px;
      margin-left: 10px;
      li {
        width: 270px;
        text-align: center;
        h3 {
          font-size: 20px;
          font-family: ${Font.kr};
        }
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
