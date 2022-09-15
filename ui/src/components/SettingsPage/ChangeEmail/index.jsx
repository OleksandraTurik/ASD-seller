import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import userServices from 'services/userServices';
import PropTypes from 'prop-types';

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
  const { handleSubmit, reset, register } = useForm({
    mode: 'onChange',

    defaultValues: {
      email,
    },
  });

  const onSubmit = async (data) => {
    const updateEmail = await userServices.updateUser(data);
    useEffect(() => {
      reset(email);
    }, [email]);
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
  email: PropTypes.string.isRequired,
};

export default ChangeEmail;
