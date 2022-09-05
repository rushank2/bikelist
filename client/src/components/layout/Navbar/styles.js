import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 5rem;
  border-bottom: solid 1px ${({ theme }) => theme.palette.silver};
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
`;
