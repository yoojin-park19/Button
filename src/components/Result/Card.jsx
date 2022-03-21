import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { Link } from 'react-router-dom';

export const Cards = (props) => {
  return (
    <Card>
      <img src={props.img} alt="향수 추천" />
      <p className="name">{props.name}</p>
      <Link>
        <button>보러가기</button>
      </Link>
    </Card>
  );
};

const Card = styled.li`
  width: 250px;
  height: 450px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.sub};
  box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 150px;
    height: 250px;
  }
  .name {
    font-size: 20px;
  }
  button {
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: ${COLOR.deep};
    color: #fff;
    font-weight: 700;
  }
`;
