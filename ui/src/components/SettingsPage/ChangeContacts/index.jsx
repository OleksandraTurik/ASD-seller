import React from 'react';
import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { useFetchCities } from 'components/hooks/useFetchCities';
import ButtonContainer from 'components/SettingsPage/ButtonContainer';
import MainContainer from 'components/SettingsPage/MainContainer';
import SubContainer from 'components/SettingsPage/SubContainer';
import SubText from 'components/SettingsPage/SubText';

// Styles
import userServices from 'services/userServices';

const ChangeContacts = () => {
  const {
    handleSubmit, reset, register, control,
  } = useForm({
    mode: 'onChange',
  });

  const { cities } = useFetchCities();

  const onSubmit = async (data) => {
    const updateUser = await userServices.updateUser(data);
    console.log(updateUser);
    reset();
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <SubText>Вибрати місто</SubText>
          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, value, ref } }) => (
              <Select
                inputRef={ref}
                value={cities?.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                options={cities}
              />
            )}
          />
        </SubContainer>
        <SubContainer>
          <SubText>Контактна особа</SubText>
          <Input
            {...register('fullName', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Error! Must be more than 3 symbols',
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

export default ChangeContacts;
