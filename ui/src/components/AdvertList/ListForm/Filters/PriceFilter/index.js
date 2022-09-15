import React from 'react';
import PropTypes from 'prop-types';
import { FilterController } from 'components/AdvertList/ListForm/Filters/styled';
import { InputWrapper, MaxPriceInput, MinPriceInput } from './styled';

const PriceFilter = ({
  onMaxPriceChange, onMinPriceChange, maxPriceValue, minPriceValue,
}) => (
  <FilterController>
    <h5>Ціна</h5>
    <InputWrapper>
      <MinPriceInput value={minPriceValue} onChange={(event) => onMinPriceChange(event.target.value)} />
      <MaxPriceInput value={maxPriceValue} onChange={(event) => onMaxPriceChange(event.target.value)} />
    </InputWrapper>
  </FilterController>
);

PriceFilter.propTypes = {
  onMaxPriceChange: PropTypes.func.isRequired,
  onMinPriceChange: PropTypes.func.isRequired,
  maxPriceValue: PropTypes.string.isRequired,
  minPriceValue: PropTypes.string.isRequired,
};

export default PriceFilter;
