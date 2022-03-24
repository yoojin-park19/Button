import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Link } from 'react-router-dom';

export const Cards = (props) => {
  return (
    <Card>
      <img src={props.image} alt="향수 추천" />
      <p className="title">{props.title}</p>
      <p className="etitle">{props.etitle}</p>
      <p className="price">50ml 기준 : {props.price} 원</p>
      <p classNmae="des">{props.des}</p>
      <p className="brand">{props.brand}</p>
    </Card>
  );
};

const Card = styled.li`
  width: 250px;
  height: 500px;
  padding: 10px 20px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.sub};
  box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  img {
    width: 250px;
    height: 300px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 20px;
  }
  .etitle {
    font-size: 13px;
  }
  .price {
    font-size: 12px;
    margin-bottom: 20px;
  }
  .des {
    font-size: 13px;
  }
  .brand {
    font-size: 12px;
    align-self: flex-start;
    position: absolute;
    bottom: 10px;
    right: 125px;
  }
`;
