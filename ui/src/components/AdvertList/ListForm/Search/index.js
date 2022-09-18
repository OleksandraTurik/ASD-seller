import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  SearchInput, FormController, CityDropdown, SubmitButton,
} from './styled';
import { useFetchCities } from '../../../hooks/useFetchCities';

const Search = ({
  onSearch, searchValue, selectValue, onCitySelect,
}) => {
  const { cities, loading } = useFetchCities();
  const options = useMemo(() => [{ label: 'Уся Україна', value: '' }, ...(cities || [])], [cities]);
  const defaultValue = useMemo(() => options.find(e => e.value === selectValue) || options[0], [options, selectValue]);
  return (
    <FormController>
      <SearchInput onChange={event => onSearch(event.target.value)} value={searchValue} />
      <CityDropdown
        placeholder={defaultValue.label}
        options={options}
        isLoading={loading}
        onChange={({ value }) => onCitySelect(value)}
      />
      <SubmitButton>Шукати</SubmitButton>
    </FormController>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  onCitySelect: PropTypes.func.isRequired,
};

export default Search;
