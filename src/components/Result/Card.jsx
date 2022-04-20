import styled from '@emotion/styled';
import { COLOR } from '../../constants';

export const Cards = (props) => {
  return (
    <Card>
      <img src={props.image} alt="향수 추천" />
      <p className="title">{props.title}</p>
      <p className="etitle">{props.etitle}</p>
      <p className="price">50ml 기준 : {props.price} 원</p>
      <p className="des">{props.des}</p>
      <p className="brand">{props.brand}</p>
    </Card>
  );
};

const Card = styled.li`
  max-width: 300px;
  height: 600px;
  padding: 10px 20px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  border: 13px double ${COLOR.top};
  background-color: #fff;
  box-shadow: 8px 14px 14px rgba(0, 0, 0, 0.25);
  position: relative;
  color: #000;
  img {
    width: 180px;
    height: 250px;
    margin-bottom: 30px;
  }
  .title {
    font-size: 20px;
  }
  .etitle {
    font-size: 13px;
    margin-bottom: 20px;
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
    right: 150px;
  }
`;
