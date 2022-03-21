import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { MainHeader } from '../components/MainHeader';
import { Cards } from '../components/Result/Card';
const ResultIndexPage = () => {
  return (
    <>
      <MainHeader />
      <ResultPage>
        <p className="title">당신을 위한 추천 향수는</p>
        <CardList>
          <Cards img="/images/lavender.jpg" name="라벤더 향수" />
          <Cards img="/images/lavender.jpg" name="라벤더 향수" />
          <Cards img="/images/lavender.jpg" name="라벤더 향수" />
        </CardList>
      </ResultPage>
    </>
  );
};

const ResultPage = styled.section`
  background-color: ${COLOR.main};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    width: 400px;
    margin-bottom: 50px;
    font-size: 28px;
    font-family: ${Font.des};
    text-align: center;
    line-height: 2;
    border-bottom: 2px double #000;
  }
`;

const CardList = styled.ul`
  display: flex;
  gap: 80px;
`;

export default ResultIndexPage;
