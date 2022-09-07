import React from 'react';
import PropTypes from 'prop-types';
import { WrapperNotice } from './styled';

const Notice = ({ type, messages }) => {
  const message = messages[type];
  if (!message) return null;
  return (
    <WrapperNotice type={type}>
      <span>{message}</span>
    </WrapperNotice>
  );
};

export default Notice;

Notice.propTypes = {
  type: PropTypes.oneOf(['default', 'warning', 'error']).isRequired,
  messages: PropTypes.shape({
    warning: PropTypes.string,
    default: PropTypes.string,
    error: PropTypes.string,
  }).isRequired,
};
