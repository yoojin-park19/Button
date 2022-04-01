import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLOR } from '../constants';
import { useState, useEffect } from 'react';
export const MainHeader = () => {
  let [displaytoggle, setDisplaytoggle] = useState(false);
  const mediaTarget = window.innerWidth;
  const resizingHandler = () => {
    if (mediaTarget >= 1023) {
      setDisplaytoggle(true);
    } else if (mediaTarget <= 1023) {
      setDisplaytoggle(false);
    }
  };
  useEffect(() => {
    if (mediaTarget >= 1023) {
      setDisplaytoggle(true);
    } else if (mediaTarget <= 1023) {
      setDisplaytoggle(false);
    }
    window.addEventListener('resize', resizingHandler);
    return () => {
      // 메모리 누수를 줄이기 위한 removeEvent
      window.removeEventListener('resize', resizingHandler);
    };
  }, [mediaTarget]);
  const displayOn = () => {
    setDisplaytoggle(!displaytoggle);
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
      {displaytoggle ? (
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
      ) : null}
    </Mainheader>
  );
};

const Mainheader = styled.section`
  background-color: ${COLOR.deep};
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
  @media screen and (max-width: 720px) {
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
`;
