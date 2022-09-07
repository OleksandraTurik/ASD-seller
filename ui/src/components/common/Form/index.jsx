import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, registration } from 'redux/slice/authUser';
import Notice from 'components/Notice';
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
    mode: 'onBlur',
  });

  const { registrationSuccess } = useSelector((state) => state.userReducer);
  const user = useSelector(state => state.userReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (type === 'login') {
      if (user.error) {
        console.log('error');
      } else {
        await dispatch(login(data));
        console.log('work');
        /* navigate('/'); */
      }
    } else {
      dispatch(registration(data));
    }

    reset();
  };

  console.log('user', user.error);

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
        {registrationSuccess && <Notice type="warning" message="Registration completed" />}
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
  type: PropTypes.string.isRequired,
};
