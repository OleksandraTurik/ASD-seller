import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import PropTypes from 'prop-types';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from 'redux/slice/authUser';
import Notice from 'components/Notice';
import { LoaderForm } from 'components/common/Form/LoaderContainer';
import validation from 'helpers/validation';
import { noticeMessages } from 'components/common/Form/helper';
import {
  Container, Wrapper, FormWrapper, WrapperLink, ErrorContainer, Input, Button, P,
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
    criteriaMode: 'all',
  });

  const { registrationSuccess, error, loading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isNavigate, setIsNavigate] = useState(false);
  const [location, setLocation] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    if (loading === false && error === false && isNavigate) {
      navigate('/', { replace: true });
      setIsNavigate(false);
    }
  }, [error, loading]);

  const onSubmit = (data) => {
    if (type === 'login') {
      dispatch(login(data));
      setIsNavigate(true);
    } else {
      dispatch(registration(data));
    }
    if (type !== 'login' && !error) {
      reset();
    }
    if (type === 'registration') {
      reset();
    }
    setLocation(pathname);
  };

  return (
    <Container>
      {loading && <LoaderForm />}
      <WrapperLink>
        <NavLink className="link" to="/register" activeclassname="selected">
          Зареєструватися
        </NavLink>
        <NavLink className="link" to="/login" activeclassname="selected">
          Увійти
        </NavLink>
      </WrapperLink>
      <Wrapper>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          {location === pathname
            && error
            && <Notice type="error" messages={noticeMessages[type]} />}
          {location === pathname
            && registrationSuccess
            && <Notice type="warning" messages={noticeMessages[type]} />}
          <Input
            type="email"
            placeholder={emailField}
            {...register('email', {
              required: "email поле обов'язково має бути заповненим",
              minLength: {
                value: 6,
                message: 'Помилка! Має бути більше шести символів',
              },
              pattern: {
                value: validation.email,
                message: 'Неправильний формат email',
              },
            })}
          />
          <ErrorContainer>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) => messages
                && Object.entries(messages).map(([type, message]) => (
                  <P key={type}>{message}</P>
                ))}
            />
          </ErrorContainer>
          <Input
            type="password"
            placeholder={passwordField}
            {...register('password', {
              required: "password поле обов'язково має бути заповненим",
              minLength: {
                value: 8,
                message: 'Помилка! Має бути більше восьми символів',
              },
              pattern: {
                value: pathname === '/register' && validation.password,
                message: 'Пароль має містити хоча б одне число, літеру з великої та маленької букви, мати довжину мінімум у 8 літер',
              },
            })}
          />
          <ErrorContainer>
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ messages }) => messages
                && Object.entries(messages).map(([type, message]) => (
                  <P key={type}>{message}</P>
                ))}
            />
          </ErrorContainer>
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
