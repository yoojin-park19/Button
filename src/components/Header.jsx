import styled from '@emotion/styled';
import { COLOR } from '../constants';

export const Header = () => {
  return (
    <Headers>
      <p>header</p>
    </Headers>
  );
};

const Headers = styled.section`
  background-color: ${COLOR.main};
`;
