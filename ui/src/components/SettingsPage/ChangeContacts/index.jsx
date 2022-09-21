import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { updateUserInfo } from 'redux/slice/getInfoExactUser';

// Components
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import ButtonContainer from 'components/SettingsPage/ButtonContainer';
import MainContainer from 'components/SettingsPage/MainContainer';
import SubContainer from 'components/SettingsPage/SubContainer';
import SubText from 'components/SettingsPage/SubText';

// hooks
import { useFetchCities } from 'components/hooks/useFetchCities';

// helpers
import DropdownIndicator from 'helpers/DropdownIndicator';
import { stylesReactSelectForSettingsPage } from 'helpers/stylesForReactSelect';

// Styles
import userServices from 'services/userServices';
import { CategoryWidthEquation } from './styled';

const ChangeContacts = ({ fullName, address }) => {
  const dispatch = useDispatch();
  const {
    handleSubmit, reset, register, control,
  } = useForm({
    mode: 'onChange',

    defaultValues: {
      fullName,
    },
  });

  const { cities, loading } = useFetchCities();

  const onSubmit = async (data) => {
    try {
      const updateUser = await userServices.updateUser(data);
      reset(updateUser);
      dispatch(updateUserInfo(updateUser));
    } catch (err) {
      console.error(err);
    }
  };
  const { city, admin_name, _id } = address;

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <SubText>Вибрати місто</SubText>
          <CategoryWidthEquation>
            <Controller
              control={control}
              name="address"
              render={({ field: { onChange, value = `${city}, ${admin_name}`, ref } }) => (
                <Select
                  isLoading={loading}
                  inputRef={ref}
                  value={cities?.find(e => e.value === _id)}
                  onChange={(val) => onChange(val.value)}
                  options={cities}
                  styles={stylesReactSelectForSettingsPage}
                  components={{ DropdownIndicator }}
                />
              )}
            />
          </CategoryWidthEquation>
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
  address: PropTypes.shape({
    city: PropTypes.string,
    admin_name: PropTypes.string,
    _id: PropTypes.string,
  }),
};

ChangeContacts.defaultProps = {
  fullName: '',
  address: {},
};

export default ChangeContacts;
