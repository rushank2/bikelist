import styled from 'styled-components';
import spinner from './spinner.gif';

const Img = styled.img`
  width: 200px;
  display: block;
  margin: auto;
`;

export const Spinner = () => (
  <>
    <Img src={spinner} alt="Loading..." />
  </>
);

export default Spinner;
