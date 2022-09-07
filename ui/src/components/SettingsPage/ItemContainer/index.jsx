import React from 'react';
import PropTypes from 'prop-types';
import { ArrowButton } from 'components/common/Button/styled';
import {
  Container,
  Header,
  P,
  ButtonContainer,
} from './styled';
import ArrowDown from '../../../assets/icons/ArrowDown';
import ArrowUp from '../../../assets/icons/ArrowUp';

const ItemContainer = ({
  id,
  name,
  isOpen,
  Component,
  handleOpen,
}) => {
  const openContainer = isOpen ? <ArrowUp /> : <ArrowDown width="25px" height="25px" />;
  const email = name === 'Змінити email-адресу';

  return (
    <Container>
      <Header>
        <P email={email}>{name}</P>
        <ButtonContainer>
          <ArrowButton onClick={() => handleOpen(id)}>{openContainer}</ArrowButton>
        </ButtonContainer>
      </Header>
      {isOpen && <Component />}
    </Container>
  );
};

ItemContainer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  Component: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default ItemContainer;
