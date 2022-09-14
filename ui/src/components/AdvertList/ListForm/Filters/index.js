import React, { useState } from 'react';
import CategoryFilter from 'components/AdvertList/ListForm/Filters/CategoryFilter';
import PriceFilter from 'components/AdvertList/ListForm/Filters/PriceFilter';
import { FilterWrapper, Wrapper } from './styled';

const Filters = () => {
  const [filters, setFilters] = useState({});

  return (
    <Wrapper>
      <FilterWrapper>
        <CategoryFilter onSelect={() => setFilters({})} />
        <PriceFilter onMaxPriceChange={() => setFilters({})} onMinPriceChange={() => setFilters({})} />
      </FilterWrapper>
    </Wrapper>
  );
};

export default Filters;
