import styled from '@emotion/styled';
export const BackAnimationIndex = (props) => {
  return (
    <BackAnimation
      transFormX={props.transFormX}
      transFormY={props.transFormY}
      duration={props.duration}
    >
      <img
        className={props.item}
        src="./images/background/backgrounditem.png"
        alt="아이템"
      />
    </BackAnimation>
  );
};

const BackAnimation = styled.div`
  position: relative;
  top: 50vh;
  left: 50vw;
  width: 100px;
  z-index: 0;
  .item0,
  .item1,
  .item2,
  .item3,
  .item4,
  .item5,
  .item6,
  .item7,
  .item8,
  .item9,
  .item10,
  .item11,
  .item12,
  .item13,
  .item14,
  .item15,
  .item16,
  .item17,
  .item18,
  .item19,
  .item20,
  .item21,
  .item22,
  .item23,
  .item24,
  .item25,
  .item26,
  .item27,
  .item28,
  .item29,
  .item30,
  .item31,
  .item32,
  .item33,
  .item34,
  .item35,
  .item36,
  .item37,
  .item38,
  .item39,
  .item40,
  .item41,
  .item42,
  .item43,
  .item44,
  .item45,
  .item46,
  .item47,
  .item48,
  .item49,
  .item50,
  .item51,
  .item52,
  .item53,
  .item54,
  .item55,
  .item56,
  .item57,
  .item58,
  .item59,
  .item60,
  .item61,
  .item62,
  .item63,
  .item64,
  .item65,
  .item66,
  .item67,
  .item68,
  .item69,
  .item70,
  .item71,
  .item72,
  .item80 {
    @keyframes scatter {
      0% {
        transform: translate(0px, 0px) rotate(5deg);
      }
      100% {
        transform: ${(props) =>
          `translateX(${props.transFormX.i}px) translateY(${props.transFormY.i}px)`};
      }
    }
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25px;
    height: 25px;
    &.on {
      transform: ${(props) =>
        `translateX(${props.transFormX}px) translateY(${props.transFormY}px)`};
      transition: ${(props) => props.duration * 0.4 + 2}s;
    }
  }
  @media screen and (max-width: 720px) {
    top: 50vh;
    left: 40vw;
  }
  @media screen and (max-width: 420px) {
    top: 50vh;
    left: 40vw;
  }
`;
