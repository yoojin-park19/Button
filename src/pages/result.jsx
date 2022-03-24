import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR } from '../constants';
import { Font } from '../constants';
import { MainHeader } from '../components/MainHeader';
import { Cards } from '../components/Result/Card';
import { Perfume } from '../constants/database';
const ResultIndexPage = (props) => {
  const [active, setActive] = useState(false);
  const testList = props.location.state.testList;
  const dataList = [];
  let match100 = [];
  let match75 = [];
  const [matchData, setMatchData] = useState([]);

  function data() {
    setActive(true);
    Perfume.map((item) => {
      dataList.push({
        0: item.strong,
        1: item.top,
        2: item.second,
        3: item.last,
      });
    });
    console.log(dataList);
    Score();
  }

  function Score() {
    for (let i = 0; i <= 18; i++) {
      let score = 0;
      for (let j = 0; j <= 3; j++) {
        if (dataList[i][j] === testList[j]) {
          score = score + 25;
        }
        if (score === 100) {
          match100.push({ [i]: dataList[i] });
        } else if (score === 75) {
          match75.push({ [i]: dataList[i] });
        }
      }
    }
    Rander(match100, match75);
  }

  function Rander(match100, match75) {
    const count = Object.keys(match100).length;
    const count75 = Object.keys(match75).length;

    if (count === 3) {
      for (let i = 0; i <= 2; i++) {
        let idx100 = parseInt(Object.keys(match100[i]).join(''));
        const matchData100 = Perfume.filter((v) => v.index === idx100);
        matchData.push(matchData100);
        setMatchData(matchData);
      }
    } else if (count === 2) {
      for (let i = 0; i <= 2; i++) {
        let idx100 = parseInt(Object.keys(match100[i]).join(''));
        const matchData100 = Perfume.filter((v) => v.index === idx100);
        matchData.push(matchData100);
      }
      if (count75) {
        let idx = parseInt(Object.keys(match75[0]).join(''));
        const matchData75 = Perfume.filter((v) => v.index === idx);
        matchData.push(matchData75);
        setMatchData(matchData);
      } else {
        matchData.push(11111);
        setMatchData(matchData);
      }
    } else if (count === 1) {
      let i = parseInt(Object.keys(match100[0]).join(''));
      const matchData100 = Perfume.filter((v) => v.index === i);
      matchData.push(matchData100);
      if (count75) {
        for (let i = 0; i <= count75; i++) {
          let idx75 = parseInt(Object.keys(match75[i]).join(''));
          const matchData75 = Perfume.filter((v) => v.index === idx75);
          matchData.push(matchData75);
          setMatchData(matchData);
        }
      } else {
        matchData.push(22222);
        setMatchData(matchData);
      }
    } else {
      if (count75) {
        for (let i = 0; i <= count75; i++) {
          let idx75 = parseInt(Object.keys(match75[i]).join(''));
          const matchData75 = Perfume.filter((v) => v.index === idx75);
          matchData.push(matchData75);
          setMatchData(matchData);
        }
      } else {
        matchData.push(33333);
        setMatchData(matchData);
      }
    }
  }

  let firstOne = matchData[0];
  let SecondOne = matchData[1];
  let ThirdOne = matchData[2];
  console.log(firstOne);
  console.log(matchData);

  return (
    <>
      <MainHeader />
      <ResultPage>
        <p className="head">당신을 위한 추천 향수는</p>
        {active ? null : (
          <button className="btn-start" onClick={data}>
            Click to see your new vibe
          </button>
        )}
        {active ? (
          <CardList>
            {firstOne.map((item, index) => (
              <div key={index}>
                <Cards
                  image={item.image}
                  title={item.title}
                  etitle={item.etitle}
                  des={item.des}
                  price={matchData[0].price}
                  brand={matchData[0].brand}
                />
              </div>
            ))}
            {SecondOne.map((item, index) => (
              <div key={index}>
                <Cards
                  image={item.image}
                  title={item.title}
                  etitle={item.etitle}
                  des={item.des}
                  price={matchData[0].price}
                  brand={matchData[0].brand}
                />
              </div>
            ))}
            {ThirdOne ? (
              <>
                {ThirdOne.map((item, index) => (
                  <div key={index}>
                    <Cards
                      image={item.image}
                      title={item.title}
                      etitle={item.etitle}
                      des={item.des}
                      price={matchData[0].price}
                      brand={matchData[0].brand}
                    />
                  </div>
                ))}
              </>
            ) : null}
          </CardList>
        ) : (
          <div className="dim">
            <CardList>
              <Cards image="/images/lavender.jpg" title="라벤더 향수" />
              <Cards image="/images/lavender.jpg" title="라벤더 향수" />
              <Cards image="/images/lavender.jpg" ntitle="라벤더 향수" />
            </CardList>
          </div>
        )}
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
  .head {
    padding: 0 50px;
    margin-bottom: 50px;
    font-size: 28px;
    font-family: ${Font.des};
    text-align: center;
    line-height: 2;
    border-bottom: 2px double #000;
  }
  .dim {
    filter: blur(5px);
  }
  .btn-start {
    z-index: 10;
    border: none;
    background-color: transparent;
    position: relative;
    top: 150px;
    color: #fff;
    font-size: 30px;
  }
`;

const CardList = styled.ul`
  display: flex;
  gap: 80px;
`;

export default ResultIndexPage;
