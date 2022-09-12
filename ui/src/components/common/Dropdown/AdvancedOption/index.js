import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowUp from 'assets/icons/ArrowUp';
import { Option, ChildrenWrapper, Child } from './styled';

const AdvancedOption = ({ children, value, onSelect }) => {
  const [isChildrenShow, setIsChildrenShow] = useState(false);

  const clickHandler = (value) => (event) => {
    event.stopPropagation();
    onSelect(value);
  };
  // eslint-disable-next-line consistent-return
  const parentClickHandler = (value) => (event) => {
    event.stopPropagation();
    if (isChildrenShow) return onSelect(value);
    setIsChildrenShow(true);
  };

  return (
    <Option
      isSelected={isChildrenShow}
      onMouseEnter={() => setIsChildrenShow(true)}
      onMouseLeave={() => setIsChildrenShow(false)}
      onClick={parentClickHandler(value)}
    >
      <p>{children}</p>
      <ArrowUp width={20} height={20} />
      {isChildrenShow && (
        <ChildrenWrapper onMouseLeave={() => setIsChildrenShow(false)}>
          {value.children.map((e) => (
            <Child key={e.id} onClick={clickHandler(e)}>
              {e.value}
            </Child>
          ))}
        </ChildrenWrapper>
      )}
    </Option>
  );
};

AdvancedOption.propTypes = {
  value: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.string,
      }),
    ),
  }).isRequired,
  children: PropTypes.node.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AdvancedOption;
