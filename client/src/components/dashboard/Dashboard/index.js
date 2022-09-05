import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from '../../common/Link';
import { TopContainer, StyledTitleH1, SubTitle, StyledButton } from './styles';
import BikesList from '../BikesList';
import { getBikes, deleteAccount } from '../../../actions/bike';

const Dashboard = ({
  getBikes,
  deleteAccount,
  auth: { user },
  bikesData: { bikes }
}) => {
  useEffect(() => {
    getBikes();
  }, [getBikes]);

  let userBikes = [];
  if (user && bikes.length > 0) {
    userBikes = bikes?.filter((bike) => bike.user._id === user._id);
  }

  return (
    <>
      <TopContainer>
        <StyledTitleH1>Dashboard</StyledTitleH1>
        <SubTitle>
          <i className="fas fa-user" /> Welcome {user && user.name}
        </SubTitle>
      </TopContainer>
      <Link to="/add-bike">Add a stolen bike</Link>
      <>
        {userBikes && <BikesList bikes={userBikes} />}
        <StyledButton variant="secondary" onClick={() => deleteAccount()}>
          <i className="fas fa-user-minus" /> Delete My Account
        </StyledButton>
      </>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bikesData: state.bikesData
});

export default connect(mapStateToProps, {
  getBikes,
  deleteAccount
})(Dashboard);
