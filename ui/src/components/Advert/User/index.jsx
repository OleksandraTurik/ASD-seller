import React from 'react';
import PropTypes from 'prop-types';

// Icons
import avatar from 'assets/icons/avatar.svg';
import angleRight from 'assets/icons/angleRight.svg';

// Styles
import {
  Wrapper,
  Container,
  UserIcon,
  UserInfo,
  RegistrationDate,
  AllAdvertsLink,
  ArrowIcon,
  Button,
} from './styled';

const User = ({
  name,
  date,
  link,
}) => (
  <Wrapper>
    <h1>Користувач</h1>
    <Container>
      <UserIcon src={avatar} alt="user avatar" />
      <UserInfo>
        <h2>{name}</h2>
        <RegistrationDate>
          на asd-seller з
          <p>{date}</p>
        </RegistrationDate>
      </UserInfo>
    </Container>
    <Button type="button">Показати телефон</Button>
    <AllAdvertsLink to={link}>
      Усі оголошення автора
      <ArrowIcon src={angleRight} alt="right arrow icon" />
    </AllAdvertsLink>
  </Wrapper>
);

User.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
};

User.defaultProps = {
  name: '',
  date: '',
  link: '',
};

export default User;
