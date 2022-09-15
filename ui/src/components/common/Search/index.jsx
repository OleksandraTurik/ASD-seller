import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Icons
import IconSearch from 'assets/icons/MagnifyingGlass';

// Styles
import {
  StyledForm, StyledInput, SearchDropdown, SearchDiv, SearchIconWrap, SubmitSearchButton,
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
      const citiesOptions = cities.data.results.map((e) => ({ value: e.city, id: e._id, children: [] }));
      setOptions([{ id: '', value: 'Уся Україна', children: [] }, ...citiesOptions]);
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
    <section>
      <StyledForm onSubmit={submitHandler}>
        <SearchDiv>
          <SearchIconWrap>
            <IconSearch width="25px" height="25px" fill="#002f34" />
          </SearchIconWrap>
          <StyledInput type="search" placeholder="Що шукаєте?" value={searchValue} onChange={searchValueHandler} />
          <SearchDropdown options={options} onSelect={() => {}} />
          <SubmitSearchButton type="submit">
            Пошук&nbsp;&nbsp;&nbsp;
            <IconSearch width="25px" height="25px" fill="#002f34" />
          </SubmitSearchButton>
        </SearchDiv>
      </StyledForm>
    </section>
  );
};

export default Search;
