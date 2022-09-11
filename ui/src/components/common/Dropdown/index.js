import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowUp from 'assets/icons/ArrowUp';
import {
  Select,
  Value,
  OptionList,
  Option,
} from './styled';

const Dropdown = ({ options, onSelect, defaultIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(options[defaultIndex]);

  useLayoutEffect(() => {
    setValue(options[defaultIndex]);
  }, [options]);

  return (
    <Select onClick={() => setIsOpen((prev) => !prev)}>
      <Value>{value?.value}</Value>
      {isOpen && (
        <OptionList>
          {options.map((e) => (
            <Option
              onClick={() => {
                setValue(e);
                onSelect(e);
              }}
              key={e.id}
            >
              {e.value}
            </Option>
          ))}
        </OptionList>
      )}
      <ArrowUp width={20} height={20} style={{ rotate: isOpen ? '0deg' : '180deg' }} />
    </Select>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.string,
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  defaultIndex: PropTypes.number.isRequired,
};

export default Dropdown;
