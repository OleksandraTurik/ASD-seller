import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import { FilterWrapper, Wrapper } from './styled';

const Filters = ({
  maxPriceValue, minPriceValue, categoryValue, onFilter,
}) => (
  <Wrapper>
    <FilterWrapper>
      <CategoryFilter onSelect={(category) => onFilter({ category })} value={categoryValue} />
      <PriceFilter
        onMaxPriceChange={(maxPrice) => onFilter({ maxPrice })}
        onMinPriceChange={(minPrice) => onFilter({ minPrice })}
        maxPriceValue={maxPriceValue}
        minPriceValue={minPriceValue}
      />
    </FilterWrapper>
  </Wrapper>
);

Filters.propTypes = {
  maxPriceValue: PropTypes.string.isRequired,
  minPriceValue: PropTypes.string.isRequired,
  categoryValue: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filters;
