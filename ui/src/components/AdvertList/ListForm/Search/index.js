import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchInput, FormController, CityInput, SubmitButton,
} from './styled';

const Search = ({ onSearch, value }) => (
  <FormController>
    <SearchInput onChange={event => onSearch(event.target.value)} value={value} />
    <CityInput />
    <SubmitButton>Шукати</SubmitButton>
  </FormController>
);

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
