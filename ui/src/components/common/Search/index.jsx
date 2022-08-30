import React, { useState } from 'react';
import {
  StyledForm,
  StyledInput,
  SearchDiv,
  SearchIcon,
  LocationIcon,
  SubmitSearchButton,
} from 'components/common/Search/styled';

import IconSearch from 'assets/icons/search-icon.svg';
import IconLocation from 'assets/icons/location-icon.svg';

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
          <SearchIcon src={IconSearch} alt="search icon" />
          <StyledInput
            width="675px"
            type="search"
            placeholder="Що шукаєте?"
            value={searchValue}
            onChange={searchValueHandler}
          />
          <LocationIcon src={IconLocation} alt="location icon" />
          <StyledInput
            width="295px"
            type="search"
            placeholder="Вся Україна"
            value={regionValue}
            onChange={regionValueHandler}
          />
          <SubmitSearchButton type="submit">Пошук</SubmitSearchButton>
        </SearchDiv>
      </StyledForm>
    </section>
  );
};

export default Search;
