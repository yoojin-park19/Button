import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLOR, Font } from '../../constants';

export const ForthMain = () => {
  return (
    <ForthMainPage>
      <DevInfo>
        <p className="title">Button</p>
        <a href="https://github.com/yoojin-park19/Button">
          <p>Github : https://github.com/yoojin-park19/Button</p>
        </a>
        <a href="https://button-iota.vercel.app/">
          <p>Button : https://button-iota.vercel.app/</p>
        </a>
      </DevInfo>
      <Button>
        <Link to="/about">
          <p>자세히 보러가기</p>
        </Link>
      </Button>
    </ForthMainPage>
  );
};

const ForthMainPage = styled.section`
  display: flex;
  justify-content: space-between;
  border-top: 10px double #fff;
  background-color: ${COLOR.deep};
  font-family: ${Font.title};
  @media screen and (max-width: 720px) {
    height: 100%;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const DevInfo = styled.section`
  padding: 20px;
  .title {
    color: #fff;
    font-size: 20px;
  }
  a {
    color: #fff;
  }
`;

const Button = styled.button`
  margin: 20px;
  border-radius: 10px;
  border: none;
  width: 65px;
  font-family: ${Font.kr};
  :hover {
    background-color: ${COLOR.right};
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
