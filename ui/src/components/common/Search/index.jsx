import React, { useState } from 'react';

// Icons
import IconSearch from 'assets/icons/MagnifyingGlass';
import IconLocation from 'assets/icons/Location';

// Styles
import {
  StyledForm,
  StyledInput,
  SearchDiv,
  SearchIconWrap,
  LocationIconWrap,
  SubmitSearchButton,
} from './styled';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [regionValue, setRegionValue] = useState('');

  const searchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const regionValueHandler = (e) => {
    setRegionValue(e.target.value);
  };

  return (
    <section>
      <StyledForm>
        <SearchDiv>
          <SearchIconWrap>
            <IconSearch
              width="25px"
              height="25px"
              fill="#002f34"
            />
          </SearchIconWrap>
          <StyledInput
            width="675px"
            type="search"
            placeholder="Що шукаєте?"
            value={searchValue}
            onChange={searchValueHandler}
          />
          <LocationIconWrap>
            <IconLocation
              width="25px"
              height="25px"
              fill="#002f34"
            />
          </LocationIconWrap>
          <StyledInput
            width="295px"
            type="search"
            placeholder="Вся Україна"
            value={regionValue}
            onChange={regionValueHandler}
          />
          <SubmitSearchButton type="submit">
            Пошук
            <IconSearch
              width="25px"
              height="25px"
              fill="#002f34"
            />
          </SubmitSearchButton>
        </SearchDiv>
      </StyledForm>
    </section>
  );
};

export default Search;
