import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <NavIndex>
      <ul className="navCont">
        <li>
          <Link to="/main">
            <img
              className="home"
              src="./images/icon/icon_home_btn.svg"
              alt="홈으로 돌아가기"
            />
            <h3>main</h3>
          </Link>
        </li>
        <li>
          <Link to="/category">
            <img
              className="category"
              src="./images/icon/icon_category_btn.svg"
              alt="category페이지로"
            />
            <h3>Category</h3>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img
              className="about"
              src="./images/icon/icon_about_btn.svg"
              alt="About us 페이지로"
            />
            <h3>About</h3>
          </Link>
        </li>
      </ul>
    </NavIndex>
  );
};

const NavIndex = styled.div`
  position: fixed;
  z-index: 100;
  width: 50px;
  height: 200px;
  bottom: 10vh;
  right: 5vw;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: 3px 2px 5px 2px rgba(0, 0, 0, 0.3);
  padding: 10px 5px;
  box-sizing: border-box;
  .navCont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }
    h3 {
      text-align: center;
      font-size: 8px;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100vw;
    height: 60px;
    top: 0px;
    right: 0;
    border-radius: 0;
    .navCont {
      flex-direction: row;
      gap: 60px;
    }
  }
`;
