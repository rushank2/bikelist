import { connect } from 'react-redux';
import { Button } from '../../common/Button';
import { Link } from '../../common/Link';
import { StyledTitleH3, Table } from './styles';
import { deleteBike } from '../../../actions/bike';

const BikesList = ({ bikes, deleteBike }) => {
  const bikesList = bikes.map((bike) => (
    <tr key={bike._id}>
      <td>{bike.manufacturer}</td>
      <td>{bike.model}</td>
      <td className="hide-sm">{bike.year}</td>
      <td>
        <Link to="/edit-bike" state={bike._id} type="secondary">
          Edit
        </Link>
      </td>
      <td>
        <Button variant="secondary" onClick={() => deleteBike(bike._id)}>Delete</Button>
      </td>
    </tr>
  ));

  return (
    <>
      <StyledTitleH3>My bikes</StyledTitleH3>
      <Table className="table">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th className="hide-sm">Model</th>
            <th className="hide-sm">Year</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>{bikesList}</tbody>
      </Table>
    </>
  );
};

export default connect(null, { deleteBike })(BikesList);
