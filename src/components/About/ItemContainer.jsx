import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { TextContainer } from './ItemCont/TextContainer';
export const ItemContainer = (props) => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollFixed, setScrollFixed] = useState(false);
  let count = 0;
  console.log(`ScrollY:` + ScrollY);

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

  console.log('scrolled' + count);
  return (
    <>
      {ScrollFixed ? (
        <ItemContainers position={'fixed'}>
          <Title>About us</Title>
          <ItemWrapper>
            <ImgContainer>
              <Fade right cascade>
                <img
                  className="item2"
                  src="./images/about/back_item2.png"
                  alt=""
                />
                <img
                  className="item4"
                  src="./images/about/back_item4.png"
                  alt=""
                />
                <img
                  className="item3"
                  src="./images/about/back_item3.png"
                  alt=""
                />
              </Fade>
            </ImgContainer>
            {ScrollY >= 0 && ScrollY < 100 ? (
              <TextContainer
                src={'./images/about/gucci_item.png'}
                title={'안녕하세요'}
                des={'오늘도 좋은 향수와 함께하세요.'}
              />
            ) : null}
            {ScrollY <= 200 && ScrollY >= 100 ? (
              <TextContainer
                src={'./images/about/chanel_item.png'}
                title={'두번째 페이지'}
                des={'오늘도 좋은 향수와 함께하세요.'}
              />
            ) : null}
            {ScrollY >= 201 ? (
              <TextContainer
                src={'./images/about/deep_item.png'}
                title={'세번째 페이지'}
                des={'오늘도 좋은 향수와 함께하세요.'}
              />
            ) : null}
          </ItemWrapper>
        </ItemContainers>
      ) : (
        <ItemContainers position={'relative'}>
          <Title>About us</Title>
          <ItemWrapper>
            <ImgContainer>
              <Fade right cascade>
                <img
                  className="item2"
                  src="./images/about/back_item2.png"
                  alt=""
                />
                <img
                  className="item4"
                  src="./images/about/back_item4.png"
                  alt=""
                />
                <img
                  className="item3"
                  src="./images/about/back_item3.png"
                  alt=""
                />
              </Fade>
            </ImgContainer>
            {ScrollY >= 0 && ScrollY < 5 ? (
              <TextContainer
                src={'./images/about/gucci_item.png'}
                title={'안녕하세요'}
                des={'오늘도 좋은 향수와 함께하세요.'}
              />
            ) : null}
            {ScrollY <= 8 && ScrollY >= 5 ? (
              <TextContainer
                src={'./images/about/chanel_item.png'}
                title={'두번째 페이지'}
                des={'오늘도 좋은 향수와 함께하세요.'}
              />
            ) : null}
            {ScrollY >= 9 ? (
              <TextContainer
                src={'./images/about/deep_item.png'}
                title={'세번째 페이지'}
                des={'오늘도 좋은 향수와 함께하세요.'}
              />
            ) : null}
          </ItemWrapper>
        </ItemContainers>
      )}
    </>
  );
};

const ItemContainers = styled.div`
  width: 70vw;
  height: 80vh;
  position: ${(props) => `${props.position}`};
  /* position: fixed; */
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e8d5c0;
  box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.3);
`;
const Title = styled.p`
  font-size: 40px;
  font-family: 'Song Myung', serif;
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
`;
