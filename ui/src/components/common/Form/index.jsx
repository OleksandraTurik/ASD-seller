import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import apiUserService from 'sevices/authServices';
import {
  Container, Wrapper, FormWrapper, WrapperLink, ErrorTitle, ErrorContainer, Input, Button,
} from './styled';

const Form = ({ textButton, emailField, passwordField }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    apiUserService.login('danbas2@gmail.com', 'lugansk')
      .then((res) => console.log(res));
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <Container>
      <WrapperLink>
        <NavLink className="link" to="/register" activeClassName="selected">
          Зареєструватися
        </NavLink>
        <NavLink className="link" to="/login" activeClassName="selected">
          Увійти
        </NavLink>
      </WrapperLink>
      <Wrapper>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder={emailField}
            {...register('Email', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Error! Must be more than 3 symbols',
              },
            })}
          />
          <ErrorContainer>{errors.Email && <ErrorTitle>{errors.Email.message || 'Error! Must be more than 3 symbols'}</ErrorTitle>}</ErrorContainer>
          <Input
            type="password"
            placeholder={passwordField}
            {...register('Password', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Error! Must be more than 3 symbols',
              },
            })}
          />
          <ErrorContainer>{errors.Password && <ErrorTitle>{errors.Password.message || 'Error! Must be more than 3 symbols'}</ErrorTitle>}</ErrorContainer>
          <Button type="submit">{textButton}</Button>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Form;

Form.propTypes = {
  textButton: PropTypes.string.isRequired,
  passwordField: PropTypes.string.isRequired,
  emailField: PropTypes.string.isRequired,
};
