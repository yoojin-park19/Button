import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { Link } from 'react-router-dom';
export const FirstMain = () => {
  return (
    <FirstMainPage>
      <div className="cont-item">
        <h2>It's For You</h2>
        <p className="kr">당신에게 어울리는 향수를 추천해드릴께요</p>
        <Link to="/test">
          <Button>
            <img src="./images/check.svg" alt="체크" />
            <p>Click to</p>
            <p>Find Your Mood</p>
          </Button>
        </Link>
      </div>
    </FirstMainPage>
  );
};

const FirstMainPage = styled.section`
  height: 90vh;
  display: flex;
  padding-top: 200px;
  justify-content: space-evenly;
  position: relative;
  .cont-item {
    position: absolute;
    right: 150px;
    text-align: center;
    h2 {
      font-size: 120px;
      font-family: ${Font.des};
      color: ${COLOR.trend_main};
      text-shadow: 8px 4px 15px rgba(105, 0, 147, 0.7);
    }
    .kr {
      color: #777;
      font-size: 30px;
      font-family: ${Font.etilte};
    }
  }
`;

const Button = styled.button`
  width: 400px;
  height: 80px;
  margin-top: 170px;
  border: 3px solid #fff;
  border-radius: 10px;
  font-size: 50px;
  font-family: ${Font.des};
  color: ${COLOR.trend_main};
  background-color: transparent;
  img {
    width: 150px;
    height: 100px;
    &:hover {
      filter: grayscale(80%);
    }
  }
`;

//   @media screen and (max-width: 440px) {
//     display: flex;
//     padding-top: 0px;
//     position: relative;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
//     .cont-item {
//       display: flex;
//       flex-direction: column;
//       padding-top: 0px;
//       position: relative;
//       align-items: center;
//       justify-content: center;
//       width: 440px;
//       margin-top: 50px;
//       z-index: 1;
//       h2 {
//         margin-bottom: 40px;
//         font-size: 40px;
//         font-family: ${Font.des};
//         color: #fff;
//         text-shadow: 8px 4px 4px rgba(0, 0, 0, 0.25);
//       }
//       p {
//         font-size: 20px;
//         font-family: ${Font.des};
//       }
//       button {
//         width: 300px;
//         height: 80px;
//         margin-top: 70px;
//         border: 3px solid #fff;
//         border-radius: 10px;
//         background-color: ${COLOR.deep};
//         font-size: 18px;
//         font-family: ${Font.des};
//         color: #fff;
//         &:hover {
//         }
//       }
//     }
//   }
// `;
