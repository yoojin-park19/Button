import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { TextContainer } from './ItemCont/TextContainer';
import { Font } from '../../constants';
import { Link } from 'react-router-dom';

export const ItemContainer = (props) => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollFixed, setScrollFixed] = useState(true);
  let count = 0;
  function handleScroll() {
    count += 1;
    if (ScrollY <= 760) {
      setScrollY(window.pageYOffset);
      setScrollFixed(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollFixed(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <>
      {ScrollFixed ? (
        <ItemContainers position={'fixed'}>
          <Title size={40}>ABOUT US</Title>
          <ItemWrapper>
            <ImgContainer>
              <Fade right cascade>
                <img
                  className="item2"
                  src="./images/about/back_item2.png"
                  alt="배경이미지"
                />
                <img
                  className="item4"
                  src="./images/about/back_item4.png"
                  alt="배경이미지"
                />
                <img
                  className="item3"
                  src="./images/about/back_item3.png"
                  alt="배경이미지"
                />
              </Fade>
            </ImgContainer>
            {ScrollY >= 0 && ScrollY < 200 ? (
              <TextContainer
                src={'./images/about/gucci_item.png'}
                title={'안녕하세요'}
                des={'저희 사이트를 방문해주셔서 감사드립니다.'}
                des2={
                  '저희는 향수를 더 친숙하고, 쉽게 접할 수 있도록 만들고 싶어서 이 사이트를 제작하였습니다.'
                }
                width={300}
                height={100}
              />
            ) : null}
            {ScrollY <= 400 && ScrollY >= 200 ? (
              <TextContainer
                src={'./images/about/chanel_item.png'}
                title={'다양하게 준비했어요.'}
                des={
                  '카테고리 페이지에서는 향수를 세분화해서 추천 향수뿐만 아니라, 다양한 향수를 구경하실 수 있어요.'
                }
              />
            ) : null}
            {ScrollY >= 401 ? (
              <TextContainer
                src={'./images/about/deep_item.png'}
                title={'자주 방문해주세요'}
                des={
                  '계속 들어오시고 싶어질 수 있도록 페이지를 꾸준히 업데이트 할게요.'
                }
              />
            ) : null}
          </ItemWrapper>
        </ItemContainers>
      ) : (
        <ItemContainers
          position={'fixed'}
          src={'./images/about/back_item1.png'}
        >
          <Title
            top={-200}
            size={30}
            color={'#efefef'}
            shadow={'2px 2px 1px rgb(0,0,0.1)'}
          >
            Contact us
          </Title>
          <Contact>
            <ul>
              <li className="park">
                <Fade left>
                  <h2>Front-End</h2>
                </Fade>
                <Fade left>
                  <h3>박유진</h3>
                </Fade>
                <Fade left>
                  <p>urreal@naver.com</p>
                </Fade>
                <Fade left>
                  <a href="https://github.com/yoojin-park19">
                    <p className="github">Github 바로가기</p>
                  </a>
                </Fade>
              </li>
              <li className="kim">
                <Fade right>
                  <h2>Front-End</h2>
                </Fade>
                <Fade right>
                  <h3>김상돈</h3>
                </Fade>
                <Fade right>
                  <p>gorist@likelion.org</p>
                </Fade>
                <Fade right>
                  <a href="https://github.com/Sangdon1029">
                    <p className="github">Github 바로가기</p>
                  </a>
                </Fade>
              </li>
            </ul>
            <div></div>
          </Contact>
        </ItemContainers>
      )}
    </>
  );
};

const ItemContainers = styled.div`
  width: 70vw;
  height: 80vh;
  position: ${(props) => `${props.position}`};
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e8d5c0;
  background-image: ${(props) => `url(${props.src})`};
  background-size: 90vw 110vh;
  background-position: -15vw -10vh;
  background-repeat: no-repeat;
  border-radius: 20px;
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 420px) {
    background-color: #6667aa;
    background-position: -73vw 0vh;
    background-size: 1160px;
  }
`;
const Title = styled.p`
  font-size: ${(props) => `${props.size}px`};
  font-family: ${Font.title};
  margin-top: ${(props) => `${props.top}px`};
  color: ${(props) => `${props.color}`};
  text-shadow: ${(props) => `${props.shadow}`};
  @media screen and (max-width: 420px) {
    font-size: 16px;
    color: #fff;
    text-shadow: 2px 2px 1px rgb(0, 0, 0.1);
  }
`;

const ItemWrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgContainer = styled.div`
  position: absolute;
  width: 80vw;
  height: 80vh;
  .item2 {
    width: 200px;
    position: absolute;
    top: 0px;
    right: 0;
  }
  .item3 {
    width: 180px;
    position: absolute;
    bottom: -70px;
    left: 0;
    transform: rotate(-40deg);
  }
  .item4 {
    width: 180px;
    position: absolute;
    bottom: 100px;
    left: 0;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const Contact = styled.div`
  width: 400px;
  position: relative;
  margin-top: 100px;
  text-align: center;
  h2 {
    font-size: 16px;
    font-weight: 400;
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
  }
  .park {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .kim {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .github {
    width: 150px;
    &:hover {
      background-color: #cfcfcf;
    }
  }
  @media screen and (max-width: 420px) {
    color: #fff;
    a {
      color: #fff;
    }
    .kim {
      top: 90px;
      right: 120px;
    }
    .park {
      top: -50px;
      left: 130px;
    }
  }
`;
