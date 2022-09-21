import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import userServices from 'services/userServices';
import PropTypes from 'prop-types';
import { updateUserInfo } from 'redux/slice/getInfoExactUser';

// Components
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import ButtonContainer from 'components/SettingsPage/ButtonContainer';
import MainContainer from 'components/SettingsPage/MainContainer';
import SubContainer from 'components/SettingsPage/SubContainer';
import SubText from 'components/SettingsPage/SubText';

// helpers
import validation from 'helpers/validation';

const ChangeEmail = ({ email }) => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const { handleSubmit, reset, register } = useForm({
    mode: 'onChange',

    defaultValues: {
      email,
    },
  });

  const onSubmit = async (data) => {
    try {
      const updateEmail = await userServices.updateUser(data);
      reset(updateEmail);
      dispatch(updateUserInfo(updateEmail));
      setSuccess(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <SubText>Новий email</SubText>
          <Input
            {...register('email', {
              required: "email поле обов'язкове",
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
        </SubContainer>
        <ButtonContainer>
          <Button type="submit">Зберегти</Button>
        </ButtonContainer>
      </form>
    </MainContainer>
  );
};

ChangeEmail.propTypes = {
  email: PropTypes.string,
};

ChangeEmail.defaultProps = {
  email: '',
};

export default ChangeEmail;
