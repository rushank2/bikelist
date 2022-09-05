import { NavContainer, Logo } from './styles';
import { AppMenu } from './AppMenu';

const Navbar = () => (
  <NavContainer>
    <Logo to="/">Bike List</Logo>
    <AppMenu />
  </NavContainer>
);

export default Navbar;
