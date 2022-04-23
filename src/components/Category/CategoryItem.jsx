import styled from '@emotion/styled';
import { COLOR, Font } from '../../constants';
import { Link } from 'react-router-dom';

export const Cards = (props) => {
  let str = props.des;
  let length = 100; // 표시할 글자수 기준
  if (str.length > length) {
    str = str.substring(0, 100) + '...';
  }

  return (
    <Card>
      <p className="title">{props.title}</p>
      <p className="etitle">{props.etitle}</p>
      <img src={props.image} alt={props.alt} />
      <div>
        <p className="des">{str}</p>
        <p className="price">50ml 기준 : {props.price} 원</p>
        <p className="brand">{props.brand}</p>
      </div>
    </Card>
  );
};

const Card = styled.li`
  width: 300px;
  height: 500px;
  border: 5px double ${COLOR.top};
  font-family: ${Font.title};
  text-align: center;
  padding: 20px 0;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 150px;
    height: 200px;
    margin: 40px 0;
  }
  p {
    display: block;
    margin-bottom: 10px;
  }
  .title {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
  .etitle {
    font-size: 12px;
    margin-bottom: 20px;
  }
  .des {
    font-size: 14px;
    line-height: 1.4;
    width: 290px;
  }
`;
