import { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from '../../../actions/auth';
import { Form } from '../../bike-forms/AddBike/styles';
import { Field } from '../../common/Field';
import { TitleH1 } from '../../common/Title';
import {
  MainContainer,
  StyledButton,
  AccountText,
  StyledLink,
  ErrorMessage
} from '../Login/styles';

const SignUp = ({ register, isAuthenticated, errors }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    register({ name, email, password, confirmPassword });
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <MainContainer>
      <TitleH1>Create an account</TitleH1>
      <Form onSubmit={onSubmit}>
        <Field
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
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
        <Field
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
        />
        {errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
        )}
        <StyledButton variant="primary">Sign Up</StyledButton>
      </Form>
      <AccountText>
        Already have an account? <StyledLink to="/login">Log in</StyledLink>
      </AccountText>
    </MainContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors
});

export default connect(mapStateToProps, { register })(SignUp);
