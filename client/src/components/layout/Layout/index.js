import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import { StyledLayout, Container } from './styles';

export const Layout = () => (
  <StyledLayout>
    <Navbar />
    <Container>
      <Outlet />
    </Container>
  </StyledLayout>
);
