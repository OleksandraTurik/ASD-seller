import React from 'react';
import PropTypes from 'prop-types';
import { WrapperNotice } from './styled';

const Notice = ({ type, message }) => {
  console.log(test);
  return (
    <WrapperNotice type={type}>
      <span>{message}</span>
    </WrapperNotice>
  );
};

export default Notice;

Notice.propTypes = {
  type: PropTypes.oneOf(['default', 'warning', 'error']).isRequired,
  message: PropTypes.string.isRequired,
};
