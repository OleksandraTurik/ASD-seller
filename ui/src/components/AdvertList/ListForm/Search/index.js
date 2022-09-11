import React from 'react';
import {
  SearchInput,
  FormController,
  CityInput,
  SubmitButton,
} from './styled';

const Search = () => (
  <FormController>
    <SearchInput />
    <CityInput />
    <SubmitButton>Шукати</SubmitButton>
  </FormController>
);

export default Search;
