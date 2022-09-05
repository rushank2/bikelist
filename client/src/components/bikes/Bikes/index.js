import { useEffect } from 'react';
import { connect } from 'react-redux';
import { TitleH1 } from '../../common/Title';
import Spinner from '../../layout/Spinner';
import BikeCard from '../BikeCard';
import { getBikes } from '../../../actions/bike';

const Bikes = ({ getBikes, bikesData: { bikes, loading } }) => {
  useEffect(() => {
    getBikes();
  }, [getBikes]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <TitleH1>Stolen bikes</TitleH1>
          {bikes.length ? (
            bikes.map((bike) => <BikeCard key={bike._id} bike={bike} />)
          ) : (
            <h4>No bikes found...</h4>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  bikesData: state.bikesData
});

export default connect(mapStateToProps, { getBikes })(Bikes);
