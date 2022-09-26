import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { WrapperNotice, Span } from './styled';

const Notice = ({ type, messages }) => {
  const message = messages[type];
  if (!message) return null;
  return (
    <WrapperNotice type={type}>
      <Span>{message}</Span>
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
