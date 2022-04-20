import styled from '@emotion/styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  function calcul() {
    dataList.map((item) => {
      if (item[4] < 100000) {
        item[4] = 1;
      } else if (item[4] < 150000) {
        item[4] = 2;
      } else if (item[4] < 200000) {
        item[4] = 3;
      } else if (item[4] < 300000) {
        item[4] = 4;
      } else if (300000 <= item[4]) {
        item[4] = 5;
      }
    });
    Score();
  }

  function data() {
    setActive(true);
    Perfume.map((item) => {
      dataList.push({
        0: item.strong,
        1: item.top,
        2: item.second,
        3: item.last,
        4: item.price,
      });
    });
    calcul();
  }

  function Score() {
    for (let i = 0; i <= 18; i++) {
      let score = 0;
      for (let j = 0; j <= 4; j++) {
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
        matchData.push(333333);
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
        matchData.push(333333);
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
        matchData.push(333333);
        setMatchData(matchData);
      }
    }
  }
  // Issue#49
  let reduceDuple = [...new Set(matchData.map(JSON.stringify))].map(JSON.parse);
  let firstOne = reduceDuple[0];
  let SecondOne = reduceDuple[1];
  let ThirdOne = reduceDuple[2];
  return (
    <>
      <MainHeader />
      <ResultPage>
        <p className="head">당신을 위한 추천 향수는</p>
        {active ? null : (
          <Button onClick={data}>
            <img src="./images/background/flower.png" alt="시작 버튼" />
            <p>Click to see your new mood</p>
          </Button>
        )}
        {active ? (
          <ResultShowPage>
            <CardList>
              {firstOne.map((item, index) => (
                <div key={index}>
                  <Cards
                    image={item.image}
                    title={item.title}
                    etitle={item.etitle}
                    des={item.des}
                    price={item.price}
                    brand={item.brand}
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
                    price={item.price}
                    brand={item.brand}
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
                        price={item.price}
                        brand={item.brand}
                      />
                    </div>
                  ))}
                </>
              ) : null}
            </CardList>
            <Link to="/test">
              <button className="btn-again">Find Again</button>
            </Link>
          </ResultShowPage>
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
  background-color: ${COLOR.top};
  height: 100vh;
  padding: 10px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .head {
    padding: 0 70px;
    margin-bottom: 50px;
    font-size: 28px;
    font-family: ${Font.title};
    color: #fff;
    text-align: center;
    line-height: 2;
    border-bottom: 2px double #fff;
  }
  .dim {
    filter: blur(25px);
  }
  .btn-again {
    margin: 50px 0;
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 13px;
    background-color: #fff;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      background-color: ${COLOR.right};
    }
  }
  @media screen and (max-width: 720px) {
    padding: 50px 0;
    height: 100%;
    .dim {
      filter: blur(100px);
    }
    .head {
      display: none;
      padding: 0 10px;
      margin-bottom: 0px;
      font-size: 14px;
    }
    .btn-again {
      display: none;
    }
  }
`;

const ResultShowPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardList = styled.ul`
  display: flex;
  gap: 80px;
  @media screen and (max-width: 720px) {
    gap: 30px;
    flex-direction: column;
  }
`;

const Button = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  z-index: 999;
  cursor: pointer;
  img {
    width: 500px;
    position: absolute;
    top: -70px;
    left: -250px;
  }
  p {
    width: 400px;
    position: absolute;
    top: 150px;
    right: -190px;
    font-size: 30px;
    font-family: ${Font.etitle};
    &:hover {
      color: ${COLOR.trend_main};
    }
  }
  @media screen and (max-width: 720px) {
    img {
      width: 450px;
      left: -220px;
    }
    p {
      position: absolute;
      top: 130px;
      right: -190px;
      font-size: 20px;
      &:hover {
        color: ${COLOR.trend_main};
      }
    }
  }
`;
export default ResultIndexPage;
