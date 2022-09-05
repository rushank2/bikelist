import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { logout } from '../../../../actions/auth';
import { Backdrop } from '../../../common/Backdrop';
import { SignUpButtonLink } from './styles';
import { Link as ButtonLink } from '../../../common/Link';
import { PersonSvg, BikeSvg } from '../../../common/Svg';
import { LinkWithIcon } from '../../../common/LInkWithIcon';
import { screen } from '../../../../styles/breakpoints';

const Navigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;

  ${screen.sm} {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.palette.white};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 80vw;
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out;
    z-index: 200;

    a {
      width: 50vw;
      margin: 1.25rem 0 1.25rem 2rem;
      font-size: 1.3rem;
    }
  }
`;

const NavigationItems = ({
  auth: { isAuthenticated },
  logout,
  open,
  handleMenuClose
}) => {
  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const authLinks = (
    <>
      <LinkWithIcon
        to="/bikes"
        svg={<BikeSvg />}
        label="Stolen Bikes"
        handleMenuClose={handleMenuClose}
      />
      <LinkWithIcon
        to="/dashboard"
        svg={<PersonSvg />}
        label="Dashboard"
        handleMenuClose={handleMenuClose}
      />
      <ButtonLink to="#!" onClick={handleLogout} type="secondary">
        Logout
      </ButtonLink>
    </>
  );

  const guestLinks = (
    <>
      <LinkWithIcon
        to="/bikes"
        svg={<BikeSvg />}
        label="Stolen Bikes"
        handleMenuClose={handleMenuClose}
      />
      <SignUpButtonLink to="/register" type="primary" onClick={handleLogout}>
        Sign Up
      </SignUpButtonLink>
      <ButtonLink to="/login" type="secondary" onClick={handleMenuClose}>
        Log In
      </ButtonLink>
    </>
  );
  return (
    <>
      <Backdrop show={open} clicked={handleMenuClose} />
      <Navigation open={open}>
        {isAuthenticated ? authLinks : guestLinks}
      </Navigation>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavigationItems);
