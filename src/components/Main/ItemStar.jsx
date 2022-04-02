import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Font } from '../../constants';
import { Link } from 'react-router-dom';

export const ItemStarLeft = (props) => {
  return (
    <ItemStarsLefts
      top={props.top}
      left={props.left}
      duration={props.duration}
      width={props.width}
      height={props.height}
    >
      <div
        className={'star' + ' ' + props.item}
        top={props.top}
        left={props.left}
        width={props.width}
        height={props.height}
        duration={props.duration}
      ></div>
    </ItemStarsLefts>
  );
};
export const ItemStarRight = (props) => {
  return (
    <ItemStarsRights
      top={props.top}
      right={props.right}
      duration={props.duration}
      width={props.width}
      height={props.height}
    >
      <div
        className={'star' + ' ' + props.item}
        top={props.top}
        right={props.right}
        width={props.width}
        height={props.height}
        duration={props.duration}
      ></div>
    </ItemStarsRights>
  );
};

const ItemStarsLefts = styled.div`
  @keyframes twinkle {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  position: absolute;

  .star {
    position: absolute;
    z-index: 20;
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    background-color: #fff;
    border-radius: 100%;
    animation: twinkle;
    animation-iteration-count: infinite;
    &.star_0,
    &.star_1,
    &.star_2,
    &.star_3,
    &.star_4,
    &.star_5,
    &.star_6,
    &.star_7,
    &.star_8,
    &.star_9,
    &.star_10,
    &.star_11,
    &.star_12,
    &.star_13,
    &.star_14,
    &.star_15,
    &.star_16,
    &.star_17,
    &.star_18,
    &.star_19,
    &.star_20,
    &.star_21,
    &.star_22,
    &.star_23,
    &.star_24,
    &.star_25,
    &.star_26,
    &.star_27,
    &.star_28,
    &.star_29,
    &.star_30,
    &.star_31,
    &.star_32 {
      animation-duration: ${(props) => `${props.duration}s`};
      top: ${(props) => `${props.top}px`};
      left: ${(props) => `${props.left}px`};
    }
  }
`;
const ItemStarsRights = styled.div`
  @keyframes twinkle {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .star {
    position: absolute;
    z-index: 20;
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    background-color: #fff;
    border-radius: 100%;
    animation: twinkle;
    animation-iteration-count: infinite;
    &.star_0,
    &.star_1,
    &.star_2,
    &.star_3,
    &.star_4,
    &.star_5,
    &.star_6,
    &.star_7,
    &.star_8,
    &.star_9,
    &.star_10,
    &.star_11,
    &.star_12,
    &.star_13,
    &.star_14,
    &.star_15,
    &.star_16,
    &.star_17,
    &.star_18,
    &.star_19,
    &.star_20,
    &.star_21,
    &.star_22,
    &.star_23,
    &.star_24,
    &.star_25,
    &.star_26,
    &.star_27,
    &.star_28,
    &.star_29,
    &.star_30,
    &.star_31,
    &.star_32 {
      animation-duration: ${(props) => `${props.duration}s`};
      top: ${(props) => `${props.top}px`};
      right: ${(props) => `${props.right}px`};
    }
  }
`;
