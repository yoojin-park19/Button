import styled from '@emotion/styled';
// import { COLOR } from '../../constants';
// import { Font } from '../../constants';
// import { Link } from 'react-router-dom';
export const BackgroundItemIndex = (props) => {
  return (
    <BackgroundItems
      duration={props.duration}
      positionY={props.positionY}
      width={props.width}
      height={props.height}
    >
      <img className={props.item} src={props.src} alt={props.alt} />
    </BackgroundItems>
  );
};
const BackgroundItems = styled.li`
  list-style: none;
  @keyframes dropdown {
    0% {
      transform: translate(120vw, 0);
      opacity: 0.6;
    }
    100% {
      transform: ${(props) => `translate(-150vw, ${props.positionY}px)`};
      opacity: 1;
    }
  }
  .item {
    position: absolute;
    right: -50px;
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    animation: dropdown;
    animation-iteration-count: infinite;
    &.item0,
    &.item1,
    &.item2,
    &.item3,
    &.item4,
    &.item5,
    &.item6,
    &.item7,
    &.item8,
    &.item9,
    &.item10,
    &.item11,
    &.item12,
    &.item13,
    &.item14,
    &.item15,
    &.item16,
    &.item17,
    &.item18,
    &.item19,
    &.item20,
    &.item21,
    &.item22,
    &.item23,
    &.item24,
    &.item25,
    &.item26,
    &.item27,
    &.item28,
    &.item29,
    &.item30,
    &.item31,
    &.item32,
    &.item33,
    &.item34,
    &.item35,
    &.item36,
    &.item37,
    &.item38,
    &.item39,
    &.item40,
    &.item41,
    &.item42,
    &.item43,
    &.item44,
    &.item45,
    &.item46,
    &.item47,
    &.item48,
    &.item49,
    &.item50,
    &.item51,
    &.item52,
    &.item53,
    &.item54,
    &.item55,
    &.item56,
    &.item57,
    &.item58,
    &.item59,
    &.item60,
    &.item61,
    &.item62,
    &.item63,
    &.item64,
    &.item65,
    &.item66,
    &.item67,
    &.item68,
    &.item69,
    &.item70,
    &.item71,
    &.item72,
    &.item80 {
      bottom: ${(props) => `${props.positionY}`}vh;
      right: 0;
      animation-duration: ${(props) => `${props.duration}s`};
    }
  }
`;
