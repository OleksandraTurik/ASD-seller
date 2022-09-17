import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Icons
import IconSearch from 'assets/icons/MagnifyingGlass';
import Location from 'assets/icons/Location';

// Styles
import {
  Section, Form, SearchController, DropdownController, SearchInput, SearchDropdown, Submit,
} from './styled';
import citiesServices from '../../../services/citiesServices';

const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      const cities = await citiesServices.getCities(controller.signal);
      const citiesOptions = cities.data.results.map((e) => ({ label: `${e.city}, ${e.admin_name}`, value: e._id }));
      setOptions(citiesOptions);
    })();

    return () => controller.abort();
  }, []);

  const searchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(searchValue ? `/adverts?search=${searchValue.split(' ').join('+')}` : '/adverts');
  };

  return (
    <Section>
      <Form onSubmit={submitHandler}>
        <SearchController>
          <IconSearch width={25} height={25} />
          <SearchInput type="search" placeholder="Що шукаєте?" value={searchValue} onChange={searchValueHandler} />
        </SearchController>
        <DropdownController>
          <Location width={25} height={25} />
          <SearchDropdown options={options} />
        </DropdownController>
        <Submit type="submit">
          Пошук&nbsp;&nbsp;&nbsp;
          <IconSearch width="25px" height="25px" fill="#002f34" />
        </Submit>
      </Form>
    </Section>
  );
};

export default Search;
