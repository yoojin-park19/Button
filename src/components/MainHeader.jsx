import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Link } from 'react-router-dom';

export const MainHeader = () => {
  return (
    <Mainheader>
      <img src="../images/logo_trans.png" alt="logo" />
      <div className="cont-menu">
        <Link to="#">
          <p>FOR YOU</p>
        </Link>
        <Link to="#">
          <p>FOR PRESENT</p>
        </Link>
        <Link to="#">
          <p>ABOUT US</p>
          <p>나에게 맞는 향수찾기</p>
        </Link>
        <Link to="#">
          <p>선물할 향수찾기</p>
        </Link>
        <Link to="#">
          <p>카테고리별 향수찾기</p>
        </Link>
      </div>
    </Mainheader>
  );
};

const Mainheader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  img {
    margin-top: 20px;
  }
  .cont-menu {
    display: flex;
    gap: 60px;
    font-size: 20px;
  }
`;
