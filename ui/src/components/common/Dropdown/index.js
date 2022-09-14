import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowUp from 'assets/icons/ArrowUp';
import AdvancedOption from 'components/common/Dropdown/AdvancedOption';
import {
  Select,
  Value,
  OptionList,
  Option,
} from './styled';

const Dropdown = ({ options, onSelect, defaultIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[defaultIndex]);
  const DropdownRef = useRef(null);

  useLayoutEffect(() => {
    const clickEvent = (event) => {
      if (!DropdownRef.current) return;
      if (event.target !== DropdownRef.current && ![...DropdownRef.current.children].includes(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', clickEvent);

    return () => window.removeEventListener('click', clickEvent);
  }, [DropdownRef.current]);

  useLayoutEffect(() => {
    setSelected(options[defaultIndex]);
  }, [options]);

  const selectHandler = (value) => {
    setIsOpen(false);
    setSelected(value);
    onSelect(value);
  };

  return (
    <Select ref={DropdownRef} onClick={() => setIsOpen((prev) => !prev)}>
      <Value>{selected?.value}</Value>
      {isOpen && (
        <OptionList>
          {options.map((e) => !e.children?.length ? (
            <Option
              onClick={() => {
                selectHandler(e);
                setIsOpen(false);
              }}
              key={e.id}
            >
              {e.value}
            </Option>
          ) : (
            <AdvancedOption onSelect={selectHandler} value={e} key={e.id} subOptions={e.children}>
              {e.value}
            </AdvancedOption>
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
      children: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          value: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  defaultIndex: PropTypes.number.isRequired,
};

export default Dropdown;
