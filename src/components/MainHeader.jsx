import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLOR } from '../constants';
import { useState, useEffect, useCallback } from 'react';
export const MainHeader = () => {
  let [displaytoggle, setDisplaytoggle] = useState(false);

  const resizingHandler = () => {
    if (window.innerWidth <= 1023) {
      setDisplaytoggle(true);
    } else {
      setDisplaytoggle(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setDisplaytoggle(true);
    }
    window.addEventListener('resize', resizingHandler);
    return () => {
      window.removeEventListener('resize', resizingHandler);
    };
  }, []);

  const displayOn = () => {
    setDisplaytoggle((prev) => !prev);
  };

  return (
    <Mainheader>
      <div className="media_align">
        <Link to="/main">
          <img src="../images/logo_trans.png" alt="logo" />
        </Link>
        <button
          onClick={displayOn}
          className={displaytoggle ? 'moreListBtn on' : 'moreListBtn'}
        >
          <img src="./images/icon/icon_menu_btn.svg" alt="더보기" />
        </button>
      </div>
      {displaytoggle ? null : (
        <div className="cont-menu">
          <Link to="/test">
            <p>FOR YOU</p>
          </Link>
          <Link to="/gift">
            <p>FOR PRESENT</p>
          </Link>
          <Link to="/category">
            <p>CATEGORY</p>
          </Link>
          <Link to="/about">
            <p>ABOUT US</p>
          </Link>
        </div>
      )}
    </Mainheader>
  );
};

const Mainheader = styled.section`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  img {
    width: 120px;
    margin-top: 20px;
  }
  .moreListBtn {
    display: none;
  }
  .cont-menu {
    display: flex;
    gap: 60px;
    font-size: 18px;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .media_align {
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 30px;
    }
    .moreListBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      border: none;
      background-color: transparent;
      &.on {
        justify-content: end;
      }
      img {
        margin: 0;
        width: 30px;
      }
    }
    .cont-menu {
      flex-direction: column;
      margin-top: 20px;
      text-align: center;
      padding-bottom: 20px;
    }
  }
  @media screen and (max-width: 720px) {
    background-color: #fff;
`;
