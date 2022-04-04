import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import { BackgroundImg } from './Background.jsx';
import { ItemContainer } from './ItemContainer.jsx';
export const AboutMain = () => {
  return (
    <>
      <BackgroundImg />
      <AboutMains>
        <ItemContainer />
      </AboutMains>
    </>
  );
};

const AboutMains = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 300vh;
  background-color: #febfa2;
  box-sizing: border-box;
  padding: 10vh 15vw;
  /* overflow: hidden; */
`;
