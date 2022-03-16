import styled from '@emotion/styled';
import { COLOR } from '../constants';

export const TestPage = () => {
  return (
    <Tests>
      <p>test</p>
    </Tests>
  );
};

const Tests = styled.section`
  background-color: ${COLOR.main};
`;
export default TestPage;
