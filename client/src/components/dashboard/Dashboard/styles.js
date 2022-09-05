import styled from 'styled-components';
import { Button } from '../../common/Button';
import { TitleH1 } from '../../common/Title';

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const StyledTitleH1 = styled(TitleH1)`
  margin-right: 4rem;
`;

export const SubTitle = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.bigStone};
`;

export const StyledButton = styled(Button)`
  margin: 1.5rem 0;
`;
