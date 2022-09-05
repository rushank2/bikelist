import { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import DescriptionTop from '../DescriptionTop';
import { getBike } from '../../../actions/bike';
import { Link } from '../../common/Link';

const StyledLink = styled(Link)`
  margin-bottom: 1.5rem;
`;

const BikeDescription = ({ getBike, bikesData: { bike } }) => {
  const { id } = useParams();
  useEffect(() => {
    getBike(id);
  }, [getBike, id]);

  return (
    <>
      {bike === null ? (
        <Spinner />
      ) : (
        <>
          <StyledLink to="/bikes" type="secondary">
            Back To Bikes
          </StyledLink>
          <DescriptionTop bike={bike} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  bikesData: state.bikesData,
  auth: state.auth
});

export default connect(mapStateToProps, { getBike })(BikeDescription);
