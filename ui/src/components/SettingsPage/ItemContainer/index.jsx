import React from 'react';
import PropTypes from 'prop-types';

// Components
import { ArrowButton } from 'components/common/Button/styled';

// Icons
import ArrowDown from 'assets/icons/ArrowDown';
import ArrowUp from 'assets/icons/ArrowUp';

// Styles
import {
  Container,
  Header,
  P,
  ButtonContainer,
} from './styled';

const ItemContainer = ({
  id,
  name,
  isOpen,
  Component,
  handleOpen,
  emailOfUser,
  fullName,
  address,
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
      {isOpen && <Component email={emailOfUser} fullName={fullName} address={address} />}
    </Container>
  );
};

ItemContainer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  Component: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  emailOfUser: PropTypes.string,
  fullName: PropTypes.string,
  address: PropTypes.string,
};

ItemContainer.defaultProps = {
  emailOfUser: '',
  fullName: '',
  address: '',
};

export default ItemContainer;
