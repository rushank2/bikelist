import { LinkContainer } from './styles';

export const LinkWithIcon = ({ to, svg, label, handleMenuClose }) => (
  <LinkContainer to={to} onClick={handleMenuClose} >
    {svg}
    <span>{label}</span>
  </LinkContainer>
);
