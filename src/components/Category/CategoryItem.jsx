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
      <p className="brand">{props.brand}</p>
      <img src={props.image} alt={props.alt} />
      <p className="title">{props.title}</p>
      <p className="etitle">{props.etitle}</p>
      <p className="des">{props.des}</p>
      <p className="price">50ml 기준 : {props.price} 원</p>
    </Card>
  );
};

const Card = styled.li`
  width: 215px;
  height: 400px;
  border: 3px double ${COLOR.deep};
  font-family: ${Font.title};
  text-align: center;
  padding-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    margin: 40px 0;
  }
  p {
    display: block;
    margin-bottom: 10px;
  }
  .title {
    font-size: 18px;
    font-weight: 800;
    text-align: center;
  }
  .etitle {
    font-size: 12px;
    margin-bottom: 20px;
  }
  .des {
    text-align: start;
    font-size: 12px;
    width: 200px;
    text-overflow: ellipsis;
  }
`;
