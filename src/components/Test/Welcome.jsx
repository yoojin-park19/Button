import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Font, COLOR } from '../../constants';
export const Welcome = (props) => {
  return (
    <WelcomeMessage>
      <p className="firstMessage">{props.description}</p>
    </WelcomeMessage>
  );
};

const WelcomeMessage = styled.section`
  .firstMessage {
    text-align: center;
    line-height: 40px;
    font-size: 28px;
    font-weight: 900;
    text-shadow: 5px 5px 5px gray;
  }
  @media screen and (max-width: 420px) {
    .firstMessage {
      font-size: 16px;
    }
  }
`;
