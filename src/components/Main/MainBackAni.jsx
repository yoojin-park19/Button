import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Font } from '../../constants';
import { Link } from 'react-router-dom';
import { ItemStarLeft, ItemStarRight } from './ItemStar';
import { useState } from 'react';

export const MainBackAni = (props) => {
  const [arr, setArr] = useState([]);
  const [arr1, setArr1] = useState([]);
  for (let i = 1; i < 6; i++) {
    window['top' + i] = [];
  }
  let top = [];
  let top2 = [];
  let top3 = [];
  let top4 = [];
  let top5 = [];
  let top6 = [];
  let top7 = [];
  let top_fixed = [];
  let left = [];
  let left2 = [];
  let left3 = [];
  let left4 = [];
  let left5 = [];
  let left6 = [];
  let duration = [];
  let duration2 = [];
  let duration3 = [];
  let duration4 = [];
  let duration5 = [];
  let duration6 = [];

  for (let i = 1; i < 11; i++) {
    arr.push(i);
    top.push(parseInt(i * 50 + i * 30));
    top2.push(parseInt(i * 76 + i * 42));
    top4.push(parseInt(i * 76 + 600));
    top5.push(parseInt(i * 76 + 1000));
    top6.push(parseInt(i * 76));
    top7.push(parseInt(i * 126));
    top_fixed.push(parseInt(136));
    left.push(parseInt(i * 60 + i * 30));
    left2.push(parseInt(i * 83 + i * 30));
    left4.push(parseInt(i * 83 + i * 30));
    left5.push(parseInt(i * 83 + i * 160));
    left6.push(parseInt(i * 83 + i * 160));
    duration.push(Math.random() * 20 + 2);
    duration2.push(Math.random() * 20 + 3);
    duration4.push(Math.random() * 20 + 1);
    duration5.push(Math.random() * 20 + 1);
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
          background={'#fff'}
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
          background={'#fff'}
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
          background={'#fff'}
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
          background={'#fff'}
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
          background={'#fff'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 150).toString()}
          item={'star_' + index}
          top={top4[index]}
          right={left4[index]}
          width={1}
          height={1}
          duration={duration4[index]}
          background={'#fff'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 150).toString()}
          item={'star_' + index}
          top={top5[index]}
          right={left5[index]}
          width={3}
          height={3}
          duration={duration5[index]}
          background={'#fff'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 180).toString()}
          item={'star_' + index}
          top={top6[index]}
          right={left6[index]}
          width={1}
          height={1}
          duration={duration5[index]}
          background={'#fff'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 210).toString()}
          item={'star_' + index}
          top={top6[index]}
          right={left4[index]}
          width={1}
          height={1}
          duration={duration3[index]}
          background={`#fff`}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 240).toString()}
          item={'star_' + index}
          top={top6[index]}
          right={left2[index]}
          width={1}
          height={1}
          duration={duration2[index]}
          background={'#fff'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 270).toString()}
          item={'star_' + index}
          top={top7[index]}
          right={left2[index]}
          width={1}
          height={1}
          duration={duration3[index]}
          background={'yellow'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 300).toString()}
          item={'star_' + index}
          top={top_fixed[index]}
          right={left5[index]}
          width={2}
          height={2}
          duration={duration5[index]}
          background={'yellow'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 300).toString()}
          item={'star_' + index}
          top={210}
          right={left3[index]}
          width={3}
          height={3}
          duration={duration2[index]}
          background={'yellow'}
        />
      ))}
      {arr.map((item, index) => (
        <ItemStarRight
          key={(index + 330).toString()}
          item={'star_' + index}
          top={322}
          right={left5[index]}
          width={2}
          height={2}
          duration={duration5[index]}
          background={'yellow'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 360).toString()}
          item={'star_' + index}
          top={522}
          right={left4[index]}
          width={1}
          height={1}
          duration={duration2[index]}
          background={'#fff'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 390).toString()}
          item={'star_' + index}
          top={722}
          right={left6[index]}
          width={2}
          height={2}
          duration={duration3[index]}
          background={'yellow'}
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
