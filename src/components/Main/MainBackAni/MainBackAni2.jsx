import styled from '@emotion/styled';
import { ItemStarLeft, ItemStarRight } from '../ItemStar';
import { useState } from 'react';

export const MainBackAni2 = (props) => {
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

  for (let i = 1; i < 5; i++) {
    arr.push(i);
    top.push(parseInt(i * 50 + i * 30));
    top2.push(parseInt(i * 76 + i * 42));
    top4.push(parseInt(i * 76 + 50));
    top5.push(parseInt(i * 86 + 60));
    top6.push(parseInt(i * 76));
    top7.push(parseInt(i * 126));
    top_fixed.push(parseInt(136));
    left.push(parseInt(i * 60 + 10));
    left2.push(parseInt(i * 83 + 20));
    left4.push(parseInt(i * 113 + 30));
    left5.push(parseInt(i * 123 + 40));
    left6.push(parseInt(i * 143 + i * 260));
    duration.push(Math.random() * 7.13 + 0.4);
    duration2.push(Math.random() * 7.8 + 0.4);
    duration3.push(Math.random() * 8.12 + 0.2);
    duration4.push(Math.random() * 8.72 + 0.2);
    duration5.push(Math.random() * 9.24 + 0.2);
  }
  for (let i = 1; i < 5; i++) {
    arr1.push(i);
    top3.push(parseInt(i * 186 + i * 22));
    left3.push(parseInt(i * 303 + i * 30));
  }
  return (
    <MainBackAniPage2>
      {arr1.map((item, index) => (
        <ItemStarLeft
          key={index.toString()}
          item={'star_' + index}
          top={top[index]}
          left={left[index]}
          duration={duration[index]}
          width={2}
          height={2}
          scale={1.2}
          background={'#fff'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarLeft
          key={(index + 30).toString()}
          item={'star_' + index}
          top={top2[index]}
          left={left2[index]}
          width={3}
          height={3}
          scale={1.2}
          duration={duration2[index]}
          background={'#fff'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 60).toString()}
          item={'star_' + index}
          top={top2[index]}
          right={left2[index]}
          width={2}
          height={2}
          scale={1.2}
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
          scale={1.6}
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
          scale={1.2}
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
          scale={3}
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
          width={2}
          height={2}
          scale={3}
          duration={duration5[index]}
          background={'#fff'}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 180).toString()}
          item={'star_' + index}
          top={top6[index]}
          right={left4[index]}
          width={2}
          height={2}
          scale={4}
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
          scale={1.2}
          duration={duration3[index]}
          background={`#fff`}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 220).toString()}
          item={'star_' + index}
          top={30}
          right={left2[index]}
          width={3}
          height={3}
          scale={1.2}
          duration={duration2[index]}
          background={`#fff`}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 230).toString()}
          item={'star_' + index}
          top={40}
          right={left3[index]}
          width={2}
          height={2}
          scale={1.2}
          duration={duration3[index]}
          background={`#fff`}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 240).toString()}
          item={'star_' + index}
          top={50}
          right={left5[index]}
          width={2}
          height={2}
          scale={1.6}
          duration={duration6[index]}
          background={`#fff`}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 250).toString()}
          item={'star_' + index}
          top={100}
          right={left4[index]}
          width={1}
          height={1}
          scale={1.8}
          duration={duration4[index]}
          background={`#fff`}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 260).toString()}
          item={'star_' + index}
          top={12}
          right={left5[index]}
          width={2}
          height={2}
          scale={1.2}
          duration={duration5[index]}
          background={`#fff`}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 270).toString()}
          item={'star_' + index}
          top={130}
          right={left2[index]}
          width={3}
          height={3}
          scale={1.2}
          duration={duration6[index]}
          background={`#fff`}
        />
      ))}
      {arr1.map((item, index) => (
        <ItemStarRight
          key={(index + 280).toString()}
          item={'star_' + index}
          top={140}
          right={left3[index]}
          width={1}
          height={1}
          scale={2}
          duration={duration2[index]}
          background={`#fff`}
        />
      ))}
    </MainBackAniPage2>
  );
};

const MainBackAniPage2 = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
`;
