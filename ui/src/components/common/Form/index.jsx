import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { login, registration } from 'redux/slice/authUser';
import Notice from 'components/Notice';
import { LoaderForm } from './LoaderContainer';
import { noticeMessages } from './helper';
import {
  Container, Wrapper, FormWrapper, WrapperLink, ErrorTitle, ErrorContainer, Input, Button,
} from './styled';

const Form = ({
  textButton, emailField, passwordField, type,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const { registrationSuccess, error, loading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (type === 'login') {
      dispatch(login(data));
    } else {
      dispatch(registration(data));
    }
    reset();
  };

  return (
    <Container>
      {loading && <LoaderForm />}
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
          {error && <Notice type="error" messages={noticeMessages[type]} />}
          {registrationSuccess && <Notice type="warning" messages={noticeMessages[type]} />}
          <Input
            type="email"
            placeholder={emailField}
            {...register('email', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Error! Must be more than 3 symbols',
              },
            })}
          />
          <ErrorContainer>{errors.Email && <ErrorTitle>{errors.Email.message || 'Error! Must be more than 8 symbols'}</ErrorTitle>}</ErrorContainer>
          <Input
            type="password"
            placeholder={passwordField}
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Error! Must be more than 8 symbols',
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
  type: PropTypes.oneOf(['login', 'registration']).isRequired,
};
