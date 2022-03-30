import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Font } from '../constants';

export const ThirdMain = () => {
  return (
    <ThridMainPage>
      <CardList>
        <Card>
          <p>Find Your Perfume</p>
          <Link to="/test">
            <button>바로가기</button>
          </Link>
        </Card>
        <Card>
          <p>Find Gift</p>
          <Link to="/gift">
            <button>바로가기</button>
          </Link>
        </Card>
        <Card>
          <p>About Perfume</p>
          <Link to="/category">
            <button>바로가기</button>
          </Link>
        </Card>
      </CardList>
    </ThridMainPage>
  );
};

const ThridMainPage = styled.section`
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 440px) {
    height: 100%;
  }
`;

const CardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  @media screen and (max-width: 440px) {
    flex-direction: column;
  }
`;

const Card = styled.section`
  width: 272px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  align-items: center;
  padding: 40px;
  background-color: rgba(248, 245, 245, 0.7);
  box-shadow: 10px 10px 4px rgba(101, 98, 98, 0.25);
  border-radius: 5px;
  box-sizing: border-box;
  &:hover {
    transform: translate(-10px, -10px);
    transition: 0.5s ease-in-out;
  }
  p {
    font-family: ${Font.title};
    font-size: 20px;
  }
  button {
    width: 148px;
    height: 58px;
    background-color: #b6a1fd;
    box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 10px;
    color: #fff;
  }
  @media screen and (max-width: 440px) {
    height: 200px;
  }
`;
