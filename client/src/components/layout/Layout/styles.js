import styled from 'styled-components/macro';
import { screen } from '../../../styles/breakpoints';

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  overflow-y: auto;
  margin: 2rem 0;
  padding: 0 5rem;

  ${screen.sm} {
    height: 70%;
    padding: 0 2rem;
  }
`;
