import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import { Form } from '../../bike-forms/AddBike/styles';
import { Field } from '../../common/Field';
import { TitleH1 } from '../../common/Title';
import {
  MainContainer,
  StyledButton,
  AccountText,
  StyledLink,
  ErrorMessage
} from './styles';

const Login = ({ login, isAuthenticated, errors }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <MainContainer>
      <TitleH1>Login</TitleH1>
      <Form onSubmit={onSubmit}>
        <Field
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Field
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        {errors.msg && <ErrorMessage>{errors.msg}</ErrorMessage>}
        <StyledButton variant="primary">Log In</StyledButton>
      </Form>
      <AccountText>
        Don't have an account? <StyledLink to="/register">Sign Up</StyledLink>
      </AccountText>
    </MainContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors
});

export default connect(mapStateToProps, { login })(Login);
