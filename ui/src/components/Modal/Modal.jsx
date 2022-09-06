import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Overlay, Wrapper, Button } from './styled';
import Close from '../../assets/icons/Close';

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <Overlay />
      <Wrapper>
        <Button>
          <Close
            width={24}
            height={24}
            type="button"
            onClick={onClose}
          >
            Close Modal
          </Close>
        </Button>
        {children}
      </Wrapper>
    </>,
    document.getElementById('portal'),
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  open: false,
  onClose: () => {},
};
export default Modal;
