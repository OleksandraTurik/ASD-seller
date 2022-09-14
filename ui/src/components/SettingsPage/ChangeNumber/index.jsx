import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import userServices from 'services/userServices';
import ButtonContainer from '../ButtonContainer';
import MainContainer from '../MainContainer';
import SubContainer from '../SubContainer';
import SubText from '../SubText';

const ChangeNumber = () => {
  const { handleSubmit, reset, register } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const updateNumber = await userServices.updateUser(data);
    console.log(data);
    reset();
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <SubText>Новий телефон</SubText>
          <Input
            {...register('number', {
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

export default ChangeNumber;
