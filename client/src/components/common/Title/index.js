import styled from 'styled-components';
import { screen } from '../../../styles/breakpoints';

export const TitleH1 = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.palette.bigStone};

  ${screen.sm} {
    font-size: 1.5rem;
  }
`;

export const TitleH2 = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.palette.bigStone};
`;

export const TitleH3 = styled.h2`
  font-size: 1.875rem;
  color: ${({ theme, color }) => color || theme.palette.bigStone};

  ${screen.sm} {
    font-size: 1rem;
  }
`;

export const TitleH4 = styled.h4`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.blackPearl};
`;
