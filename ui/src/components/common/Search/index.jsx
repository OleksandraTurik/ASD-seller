import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icons
import IconSearch from 'assets/icons/MagnifyingGlass';
import Location from 'assets/icons/Location';

// Styles
import {
  Section, Form, SearchController, DropdownController, SearchInput, SearchDropdown, Submit,
} from './styled';
import { useFetchCities } from '../../hooks/useFetchCities';

const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState({ search: '', city: '' });
  const { cities, loading } = useFetchCities();

  const searchValueHandler = (e) => {
    setSearchValue(prev => ({ ...prev, search: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const params = [];
    if (searchValue.search) params.push(`search=${searchValue.search.split(' ').join('+')}`);
    if (searchValue.city) params.push(`city=${searchValue.city}`);
    const queries = params.length > 0 ? `?${params.join('&')}` : '';
    navigate(`/adverts${queries}`);
  };

  return (
    <Section>
      <Form onSubmit={submitHandler}>
        <SearchController>
          <IconSearch width={25} height={25} />
          <SearchInput type="search" placeholder="Що шукаєте?" value={searchValue.search} onChange={searchValueHandler} />
        </SearchController>
        <DropdownController>
          <Location width={25} height={25} />
          <SearchDropdown
            onChange={({ value }) => setSearchValue(prev => ({ ...prev, city: value }))}
            options={cities || []}
            isLoading={loading}
          />
        </DropdownController>
        <Submit type="submit">
          Пошук
          <IconSearch width="25px" height="25px" fill="#002f34" />
        </Submit>
      </Form>
    </Section>
  );
};

export default Search;
