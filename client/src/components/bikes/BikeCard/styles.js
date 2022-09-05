import styled from 'styled-components/macro';
import { screen } from '../../../styles/breakpoints';

export const Card = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  align-items: center;
  grid-gap: 2rem;
  padding: 1rem;
  line-height: 1.8;
  margin-top: 1rem;
  border: ${({ theme }) => `1px solid ${theme.palette.silver}`};
  border-radius: 4px;

  ${screen.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 1rem 0;
  }
`;

export const Text = styled.span`
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.palette.blackPearl};
  margin: 1rem 0;
`;
