import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styled';

const Modal = ({
  active,
  setActive,
  children,
}) => (
  <Container active={active} onClick={() => setActive(false)}>
    <Content acive={active} onClick={e => e.stopPropagation()}>
      {children}
    </Content>
  </Container>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Modal;
