import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  display: inline-block;
  padding: 0.3rem 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  outline: none;

  ${({ type }) => {
    switch (type) {
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.palette.black};
          color: ${({ theme }) => theme.palette.white};
          &:hover {
            background-color: ${({ theme }) => theme.palette.blueRibbon};
          }
        `;
      case 'secondary':
        return css`
          border: 1px solid ${({ theme }) => theme.palette.black};
          color: ${({ theme }) => theme.palette.black};
          &:hover {
            color: ${({ theme }) => theme.palette.white};
            border-color: ${({ theme }) => theme.palette.blueRibbon};
            background-color: ${({ theme }) => theme.palette.blueRibbon};
          }
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.palette.black};
          color: ${({ theme }) => theme.palette.white};
          &:hover {
            background-color: ${({ theme }) => theme.palette.blueRibbon};
          }
        `;
    }
  }}
`;
