import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Font } from '../../constants';
import { Link } from 'react-router-dom';
export const CategoryMain = () => {
  return (
    <CategoryMainPage>
      <ItemContainer>
        <AssortContainer>
          <button>정렬하기</button>
          <button>정렬하기</button>
          <button>정렬하기</button>
          <button>정렬하기</button>
        </AssortContainer>
        <div className="itemList">
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
          <img className="main-img" src="./images/lavender.jpg" alt="home" />
        </div>
      </ItemContainer>
      <MoreBtn>
        <button>더 보기</button>
      </MoreBtn>
    </CategoryMainPage>
  );
};

const CategoryMainPage = styled.section`
  width: 100vw;
  height: calc(100vh - 87px);
  box-sizing: border-box;
  background-color: ${COLOR.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;
const AssortContainer = styled.section`
  display: flex;
  justify-content: right;
  gap: 20px;
  margin-bottom: 20px;
  button {
    width: 100px;
    border: none;
    background-color: transparent;
  }
`;

const ItemContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .itemList {
    height: 60vh;
    width: 80vw;
    overflow: hidden;
    display: flex;
    gap: 2vw;
    flex-wrap: wrap;
    margin: 0 80px;
    img {
      width: 18vw;
      border-radius: 10px;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
    }
  }
`;
const MoreBtn = styled.section`
  button {
    border: none;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    font-size: 20px;
    box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: ${COLOR.right};
      color: ${COLOR.deep};
    }
  }
`;
