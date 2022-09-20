import React from 'react';
import PropTypes from 'prop-types';

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

const ChangeNumber = ({ phoneNumber }) => {
  const { handleSubmit, reset, register } = useForm({
    mode: 'onChange',

    defaultValues: {
      phoneNumber,
    },
  });

  const onSubmit = async (data) => {
    const updateNumber = await userServices.updateUser(data);
    reset(updateNumber);
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <SubText>Новий телефон</SubText>
          <Input
            {...register('phoneNumber', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Error! Must be more than 8 symbols',
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

ChangeNumber.propTypes = {
  phoneNumber: PropTypes.string,
};

ChangeNumber.defaultProps = {
  phoneNumber: '',
};

export default ChangeNumber;
