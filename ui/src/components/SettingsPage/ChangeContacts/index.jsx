import React from 'react';
import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

// Components
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import ButtonContainer from 'components/SettingsPage/ButtonContainer';
import MainContainer from 'components/SettingsPage/MainContainer';
import SubContainer from 'components/SettingsPage/SubContainer';
import SubText from 'components/SettingsPage/SubText';

// hooks
import { useFetchCities } from 'components/hooks/useFetchCities';

// Styles
import userServices from 'services/userServices';

const ChangeContacts = ({ fullName, address }) => {
  const {
    handleSubmit, reset, register, control,
  } = useForm({
    mode: 'onChange',

    defaultValues: {
      fullName,
    },
  });

  const { cities } = useFetchCities();

  const onSubmit = async (data) => {
    const updateUser = await userServices.updateUser(data);
    console.log('updateUser', updateUser);
    reset(updateUser);
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <SubText>Вибрати місто</SubText>
          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, value = address, ref } }) => (
              <Select
                inputRef={ref}
                value={cities?.find((c) => c.label === value)}
                onChange={(val) => onChange(val)}
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

ChangeContacts.propTypes = {
  fullName: PropTypes.string,
  address: PropTypes.string,
};

ChangeContacts.defaultProps = {
  fullName: '',
  address: '',
};

export default ChangeContacts;
