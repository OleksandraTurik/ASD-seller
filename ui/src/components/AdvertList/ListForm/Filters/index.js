import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import { Title, FilterWrapper, Wrapper } from './styled';

const Filters = () => {
  const [filters, setFilters] = useState({});

  return (
    <Wrapper>
      <Title>Фільтри</Title>
      <FilterWrapper>
        <CategoryFilter onSelect={() => setFilters({})} />
      </FilterWrapper>
    </Wrapper>
  );
};

export default Filters;
