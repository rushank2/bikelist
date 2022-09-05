import styled from 'styled-components';
import { TitleH3 } from '../../common/Title';

export const StyledTitleH3 = styled(TitleH3)`
  margin: 1.5rem 0;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 4px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.silver};

  thead tr {
    background-color: ${({ theme }) => theme.palette.silver};
    color: ${({ theme }) => theme.palette.black};
  }

  tbody tr {
    border-bottom: 1px solid ${({ theme }) => theme.palette.silver};
  }

  th,
  td {
    padding: 1rem;
    text-align: left;
  }
`;
