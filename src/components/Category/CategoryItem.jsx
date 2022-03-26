import styled from '@emotion/styled';
import { COLOR, Font } from '../../constants';
import { Link } from 'react-router-dom';

export const Cards = (props) => {
  let str = props.des;
  let length = 13; // 표시할 글자수 기준
  if (str.length > length) {
    str = str.substr(0, length - 2) + '...';
  }

  return (
    <Card>
      <img src={props.image} alt={props.alt} />
      <p className="brand">{props.brand}</p>
      <p className="title">{props.title}</p>
      <p className="etitle">{props.etitle}</p>
      <p className="price">50ml 기준 : {props.price} 원</p>
      <p className="des">{props.des}</p>
      <p>보러가기</p>
    </Card>
  );
};

const Card = styled.li`
  width: 200px;
  height: 400px;
  font-family: 'gowun';
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 60px;
    margin-bottom: 40px;
  }
  p {
    display: block;
    margin-bottom: 10px;
  }
  .title {
    font-size: 16px;
    font-weight: 800;
    text-align: center;
  }
  .etitle {
    font-size: 13px;
  }
  .des {
    text-align: start;
    font-size: 12px;
    width: 200px;
    /* border: 1px solid red; */
    /* overflow: hidden; */
    /* white-space: nowrap; */
    text-overflow: ellipsis;
  }
`;
