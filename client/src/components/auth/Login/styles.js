import styled from 'styled-components';
import { screen } from '../../../styles/breakpoints';
import { Button } from '../../common/Button';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  width: 30%;
  margin: 0 auto;
  padding: 0;

  ${screen.sm} {
    width: 100%;
    padding: 0 2rem;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 1.2rem;
`;

export const AccountText = styled.span`
  margin: 1rem 0;
`;

export const StyledLink = styled(Link)`
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.palette.blueRibbon};
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.palette.red};
  font-size: 0.8rem;
`;
