import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowUp from 'assets/icons/ArrowUp';
import findParentOrChild from 'helpers/find-parent-or-child';
import AdvancedOption from './AdvancedOption';
import {
  Select, Value, OptionList, Option,
} from './styled';

const Dropdown = ({
  options, onSelect, defaultID, isMobile, style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(findParentOrChild(options, defaultID));
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
    setSelected(findParentOrChild(options, defaultID));
  }, [options, defaultID]);

  const selectHandler = (value) => {
    setIsOpen(false);
    setSelected(value);
    onSelect(value);
  };

  return (
    <Select style={style.control} ref={DropdownRef} onClick={() => setIsOpen((prev) => !prev)}>
      <Value>{selected?.value}</Value>
      {isOpen && (
        <OptionList isMobile={isMobile}>
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
            <AdvancedOption isMobile={isMobile} onSelect={selectHandler} value={e} key={e.id} subOptions={e.children}>
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
    PropTypes.exact({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          value: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  defaultID: PropTypes.string,
  isMobile: PropTypes.bool,
  style: PropTypes.shape({
    control: PropTypes.shape({}),
  }),
};

Dropdown.defaultProps = {
  isMobile: false,
  style: {},
};

export default Dropdown;
