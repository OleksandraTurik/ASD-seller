import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/slice/getInfoExactUser';

// services
import userServices from 'services/userServices';
// Components
import { useForm } from 'react-hook-form';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import ButtonContainer from 'components/SettingsPage/ButtonContainer';
import MainContainer from 'components/SettingsPage/MainContainer';
import SubContainer from 'components/SettingsPage/SubContainer';
import SubText from 'components/SettingsPage/SubText';
import { Error } from '../ChangeContacts/styled';

const ChangeNumber = ({ phoneNumber }) => {
  const dispatch = useDispatch();
  const {
    handleSubmit, reset, register, formState: { errors },
  } = useForm({
    mode: 'onSubmit',

    defaultValues: {
      phoneNumber,
    },
  });

  const onSubmit = async (data) => {
    try {
      const updateNumber = await userServices.updateUser(data);
      reset(updateNumber);
      dispatch(updateUserInfo(data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <SubText>Новий телефон</SubText>
          <Input
            {...register('phoneNumber', {
              required: "Це поле є обов'язковим",
              minLength: {
                value: 10,
                message: 'Поле повинно містити мінімум 10 символів',
              },
            })}
          />
          <Error>{errors.phoneNumber?.message}</Error>
        </SubContainer>
        <ButtonContainer>
          <Button type="submit">Зберегти</Button>
        </ButtonContainer>
      </form>
    </MainContainer>
  );
};

ChangeNumber.propTypes = {
  phoneNumber: PropTypes.string,
};

ChangeNumber.defaultProps = {
  phoneNumber: '',
};

export default ChangeNumber;
