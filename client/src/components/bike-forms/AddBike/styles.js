import styled from 'styled-components';
import { screen } from '../../../styles/breakpoints';

export const MainContainer = styled.div`
  width: 50%;

  ${screen.sm} {
    width: 100%;
  }
`;

export const Form = styled.form`
  margin: 1.2rem 0;
`;

export const ButtonsContainer = styled.div`
  margin-top: 1.2rem;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.palette.red};
  font-size: 0.8rem;
`;
