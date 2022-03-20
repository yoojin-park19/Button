import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { Link } from 'react-router-dom';

export const SecondMain = () => {
  return (
    <SecondMainPage>
      <div className="cont-item">
        <h2>It's For your loved ones</h2>
        <p>
          Give your precious people a scent. The scent will be a valuable clue
          for that person to remember you.
        </p>
        <p>
          We recommend gifts according to your preference, mood, purpose and
          price.
        </p>
        <Link to="#">
          <button>Find Your Gift</button>
        </Link>
      </div>
      <img src="./images/second_item.png" alt="recommend gift" />
    </SecondMainPage>
  );
};

const SecondMainPage = styled.section`
  background-color: ${COLOR.main};
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 100px;
  .cont-item {
    margin: 100px;
    width: 500px;
    h2 {
      margin-bottom: 40px;
      font-size: 60px;
      font-family: ${Font.des};
      color: #fff;
    }
    p {
      font-size: 30px;
      font-family: ${Font.des};
    }
    button {
      width: 250px;
      height: 40px;
      margin-top: 70px;
      border: none;
      background-color: ${COLOR.point};
      font-size: 18px;
      color: #fff;
    }
  }
  img {
    margin: 10px 100px 0 0;
    width: 480px;
    height: 480px;
  }
`;
