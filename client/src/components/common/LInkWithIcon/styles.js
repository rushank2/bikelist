import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  font-weight: 500;

  svg {
    padding-right: 0.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.blueRibbon};
  }
  &:hover svg {
    fill: ${({ theme }) => theme.palette.blueRibbon};
  }
`;