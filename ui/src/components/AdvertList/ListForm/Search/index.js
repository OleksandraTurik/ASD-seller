import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchInput, FormController, CityDropdown, SubmitButton,
} from './styled';
import { useFetchCities } from '../../../hooks/useFetchCities';

const Search = ({ onSearch, value }) => {
  const { cities, loading } = useFetchCities();

  return (
    <FormController>
      <SearchInput onChange={event => onSearch(event.target.value)} value={value} />
      <CityDropdown options={cities} isLoading={loading} />
      <SubmitButton>Шукати</SubmitButton>
    </FormController>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
