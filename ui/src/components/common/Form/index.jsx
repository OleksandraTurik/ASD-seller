import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from 'redux/slice/authUser';
import Notice from 'components/Notice';
import { LoaderForm } from 'components/common/Form/LoaderContainer';
import validation from 'helpers/validation';
import { noticeMessages } from 'components/common/Form/helper';
import {
  Container, Wrapper, FormWrapper, WrapperLink, ErrorTitle, ErrorContainer, Input, Button, P,
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
  const navigate = useNavigate();
  const [isNavigate, setIsNavigate] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (loading === false && error === false && isNavigate) {
      navigate('/', { replace: true });
      setIsNavigate(false);
    } else {
      console.log('error', error);
    }
  }, [error, loading]);

  const onSubmit = (data) => {
    if (type === 'login') {
      dispatch(login(data));
      setIsNavigate(true);
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
              required: <P>email поле обов&apos;язково має бути заповненим</P>,
              minLength: {
                value: 6,
                message: <P>Помилка! Має бути більше шести символів</P>,
              },
              pattern: {
                value: validation.email,
                message: <P>Неправильний формат email</P>,
              },
            })}
          />
          <ErrorContainer>{errors.email && <ErrorTitle>{errors.email.message || 'Error! Must be more than 8 symbols'}</ErrorTitle>}</ErrorContainer>
          <Input
            type="password"
            placeholder={passwordField}
            {...register('password', {
              required: <P>password поле обов&apos;язково має бути заповненим</P>,
              minLength: {
                value: 8,
                message: <P>Помилка! Має бути більше восьми символів</P>,
              },
              pattern: {
                value: pathname === '/register' && validation.password,
                message: <P>Пароль має містити хоча б одне число, літеру з великої та маленької букви, мати довжину мінімум у 8 літер</P>,
              },
            })}
          />
          <ErrorContainer>{errors.password && <ErrorTitle>{errors.password.message || 'Error! Must be more than 3 symbols'}</ErrorTitle>}</ErrorContainer>
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
