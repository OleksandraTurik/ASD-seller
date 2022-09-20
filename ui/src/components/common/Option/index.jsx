import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

const Option = ({ children, ...props }) => {
  // eslint-disable-next-line react/prop-types
  const { onMouseMove, onMouseOver, ...rest } = props.innerProps;
  const newProps = Object.assign(props, { innerProps: rest });
  return (
    <components.Option {...newProps}>
      {children}
    </components.Option>
  );
};

Option.propTypes = {
  innerProps: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default Option;
