import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { MainHeader } from '../components/MainHeader';
import { Cards } from '../components/Result/Card';
import Perfume from '../constants/database';
const ResultIndexPage = () => {
  const list = [3, 2, 2, 2];
  const dataList = [{}];
  const matchData = [{}];
  matchData.pop();
  dataList.pop();

  function data() {
    Perfume.map((item, index) => {
      dataList.push({
        0: item.strong,
        1: item.top,
        2: item.second,
        3: item.last,
      });
    });
    Score();
  }

  function Score() {
    for (let i = 0; i <= 18; i++) {
      let score = 0;
      for (let j = 0; j <= 3; j++) {
        if (dataList[i][j] === list[j]) {
          score = score + 25;
          if (score === 100) {
            matchData.push({ 100: dataList[i] });
          } else if (score === 75) {
            matchData.push({ 75: dataList[i] });
          }
        }
      }
    }
    console.log(matchData);
  }

  return (
    <>
      <MainHeader />
      <ResultPage>
        <p className="title">당신을 위한 추천 향수는</p>
        <button onClick={data}></button>
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
  button {
    width: 100px;
    height: 50px;
  }
`;

const CardList = styled.ul`
  display: flex;
  gap: 80px;
`;

export default ResultIndexPage;
