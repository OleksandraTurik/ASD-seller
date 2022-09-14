import React from 'react';
import PropTypes from 'prop-types';
import { FilterController } from 'components/AdvertList/ListForm/Filters/styled';
import { InputWrapper, MaxPriceInput, MinPriceInput } from './styled';

const PriceFilter = ({ onMaxPriceChange, onMinPriceChange }) => (
  <FilterController>
    <h5>Ціна</h5>
    <InputWrapper>
      <MinPriceInput onChange={(event) => onMinPriceChange(event.target.valueAsNumber)} />
      <MaxPriceInput onChange={(event) => onMaxPriceChange(event.target.valueAsNumber)} />
    </InputWrapper>
  </FilterController>
);

PriceFilter.propTypes = {
  onMaxPriceChange: PropTypes.func.isRequired,
  onMinPriceChange: PropTypes.func.isRequired,
};

export default PriceFilter;
