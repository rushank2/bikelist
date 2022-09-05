import styled, { useTheme } from 'styled-components';
import bikeImg from '../../../images/bikeImg.png';
import { TitleH3 } from '../../common/Title';
import { screen } from '../../../styles/breakpoints';

const StyledTitleH3 = styled(TitleH3)`
  text-transform: uppercase;
`;

const BikeTitle = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  line-height: 2rem;
  color: ${({ theme }) => theme.palette.bigStone};
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 50%;
  margin-bottom: 1rem;

  ${screen.sm} {
    width: 100%;
  }
`;

const DescriptionTop = ({ bike: { image, manufacturer, model, year } }) => {
  const theme = useTheme();
  const img = image ? image : bikeImg;

  return (
    <>
      <StyledTitleH3 color={theme.palette.red}>Stolen</StyledTitleH3>
      <BikeTitle>
        {manufacturer} {model} {year}
      </BikeTitle>
      <Image src={img} alt="bikeImage" />
    </>
  );
};

export default DescriptionTop;
