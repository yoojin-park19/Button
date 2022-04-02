import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Font } from '../../constants';
import { Link } from 'react-router-dom';
import { ItemStarLeft, ItemStarRight } from './ItemStar';
import { useState } from 'react';

export const MainBackAni = (props) => {
  const [arr, setArr] = useState([]);
  const [arr1, setArr1] = useState([]);

  let top = [];
  let top2 = [];
  let top3 = [];
  let left = [];
  let left2 = [];
  let left3 = [];
  let duration = [];
  let duration2 = [];
  let duration3 = [];

  for (let i = 1; i < 11; i++) {
    arr.push(i);
    top.push(parseInt(i * 50 + i * 30));
    top2.push(parseInt(i * 76 + i * 42));
    left.push(parseInt(i * 60 + i * 30));
    left2.push(parseInt(i * 83 + i * 30));
    duration.push(Math.random() * 10 + 2);
    duration2.push(Math.random() * 20 + 3);
  }
  for (let i = 1; i < 5; i++) {
    arr1.push(i);
    top3.push(parseInt(i * 186 + i * 22));
    left3.push(parseInt(i * 303 + i * 30));
    duration3.push(Math.random() * 10 + 1);
  }
  return (
    <MainBackAniPage>
      {arr.map((item, index) => (
        <ItemStarLeft
          key={index.toString()}
          item={'star_' + index}
          top={top[index]}
          left={left[index]}
          duration={duration[index]}
          width={2}
          height={2}
        />
      ))}
      {arr.map((item, index) => (
        <ItemStarLeft
          key={(index + 30).toString()}
          item={'star_' + index}
          top={top2[index]}
          left={left2[index]}
          width={3}
          height={3}
          duration={duration2[index]}
        />
      ))}
      {arr.map((item, index) => (
        <ItemStarRight
          key={(index + 60).toString()}
          item={'star_' + index}
          top={top2[index]}
          right={left2[index]}
          width={2}
          height={2}
          duration={duration2[index]}
        />
      ))}
      {arr.map((item, index) => (
        <ItemStarRight
          key={(index + 90).toString()}
          item={'star_' + index}
          top={top[index]}
          right={left[index]}
          width={2}
          height={2}
          duration={duration2[index]}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 120).toString()}
          item={'star_' + index}
          top={top3[index]}
          right={left3[index]}
          width={2}
          height={2}
          duration={duration3[index]}
        />
      ))}
    </MainBackAniPage>
  );
};

const MainBackAniPage = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
`;
