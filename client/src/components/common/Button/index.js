import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 0.3rem 0.75rem;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  line-height: 1.6;

  ${({ variant }) => {
    switch (variant) {
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
          background-color: ${({ theme }) => theme.palette.white};
          border-color: ${({ theme }) => theme.palette.red};
          color: ${({ theme }) => theme.palette.red};
          &:hover {
            color: ${({ theme }) => theme.palette.white};
            background-color: ${({ theme }) => theme.palette.red};
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
