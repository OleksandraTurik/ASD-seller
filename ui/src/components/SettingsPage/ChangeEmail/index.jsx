import React from 'react';
import { useForm } from 'react-hook-form';
import userServices from 'services/userServices';
// Components
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import ButtonContainer from 'components/SettingsPage/ButtonContainer';
import MainContainer from 'components/SettingsPage/MainContainer';
import SubContainer from 'components/SettingsPage/SubContainer';
import SubText from 'components/SettingsPage/SubText';

const ChangeEmail = () => {
  const { handleSubmit, reset, register } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const updateEmail = await userServices.updateUser(data);
    console.log(data);
    reset();
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <SubText>Новий email</SubText>
          <Input
            {...register('email', {
              required: 'This field is required',
              minLength: {
                value: 6,
                message: 'Error! Must be more than 6 symbols',
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

export default ChangeEmail;
