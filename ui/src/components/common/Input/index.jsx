import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import InputStyle from './styled';

const Input = forwardRef(({ name, ...restProps }, ref) => (
  <InputStyle {...restProps} name={name} ref={ref} />
));

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
