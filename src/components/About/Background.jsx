import styled from '@emotion/styled';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { BackgroundItemIndex } from './BackgroundItem';

export const BackgroundImg = () => {
  const [arr, setArr] = useState([]);
  let positionY = [];
  let duration = [];
  for (let i = 0; i < 30; i++) {
    arr.push(parseInt(Math.random() * -90) + 130);
  }
  for (let i = 0; i < 80; i++) {
    positionY.push(parseInt(Math.random() * 100));
    duration.push(Math.random() * 80 + 10);
  }
  return (
    <Backgrounds>
      <div className="contianer">
        {arr.map((item, index) => (
          <>
            <BackgroundItemIndex
              key={index.toString()}
              positionY={positionY[index]}
              duration={duration[index]}
              width={30}
              item={`item` + ' ' + `item` + index}
              src={`./images/about/leaf_item.png`}
              alt={``}
            />
            <BackgroundItemIndex
              key={index + 100}
              width={40}
              positionY={positionY[index + 40]}
              duration={duration[index]}
              item={`item` + ' ' + `item` + index}
              src={`./images/about/back_item_flower.png`}
              alt={``}
            />
          </>
        ))}
      </div>
    </Backgrounds>
  );
};

const Backgrounds = styled.ul`
  .contianer {
    position: relative;
    z-index: 10;
    display: flex;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
  }
  position: absolute;
  z-index: 10;
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
`;
