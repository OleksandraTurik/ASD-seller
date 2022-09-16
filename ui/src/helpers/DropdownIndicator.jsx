/* eslint-disable */
import React from 'react';
import { components, DropdownIndicatorProps } from 'react-select';
import ArrowDownIcon from 'assets/icons/ArrowDown';

const DropdownIndicator = (
  props: DropdownIndicatorProps<true>,
) => (
  <components.DropdownIndicator {...props}>
    <ArrowDownIcon
      style={{ color: 'rgb(0, 47, 52)' }}
      height="24px"
    />
  </components.DropdownIndicator>
);

export default DropdownIndicator;
