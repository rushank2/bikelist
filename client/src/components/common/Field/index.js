import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.4rem;
  margin-top: 1.2rem;
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.palette.silver};
  border-radius: 4px;
`;

export const Field = ({ type, placeholder, name, value, onChange, accept, minLength }) => (
  <Input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    accept={accept}
    onChange={onChange}
    minLength={minLength}
  />
);
