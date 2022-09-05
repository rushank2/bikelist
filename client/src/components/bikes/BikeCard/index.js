import { Card, Text } from './styles';
import { TitleH4 } from '../../common/Title';
import { Link } from '../../common/Link';
import bikeImg from '../../../images/bikeImg.png';

const BikeCard = ({ bike: { _id, image, manufacturer, model, year } }) => {
  const img = image ? image : bikeImg;

  return (
    <Card>
      <img src={img} alt="bikeImage" />
      <div>
        <TitleH4>
          {manufacturer} {model}
        </TitleH4>
        {year && <Text>Year: {year}</Text>}
        <Link to={`/bikes/${_id}`} type="primary">
          View More
        </Link>
      </div>
    </Card>
  );
};

export default BikeCard;
