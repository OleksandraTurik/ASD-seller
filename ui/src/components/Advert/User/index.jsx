import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// api
import { URL } from 'API';

// Icons
import avatar from 'assets/icons/avatar.svg';
import IconArrowRight from 'assets/icons/ArrowRight';

// Styles
import {
  Wrapper,
  Container,
  UserIcon,
  UserInfo,
  RegistrationDate,
  AllAdvertsLink,
  Button,
} from './styled';

const User = ({
  name,
  date,
  link,
  phone,
  avatarOfUser,
}) => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  console.log('avatarOfUser', avatarOfUser);

  useEffect(() => show ? setValue(phone) : setValue('Показати телефон'), [show]);

  return (
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
      <Button onClick={() => setShow(!show)}>
        {value}
      </Button>
      <AllAdvertsLink to={link}>
        Усі оголошення автора
        <IconArrowRight
          width="20px"
          height="20px"
          fill="#002F34"
        />
      </AllAdvertsLink>
    </Wrapper>
  );
};

User.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
  phone: PropTypes.string,
  avatarOfUser: PropTypes.string,
};

User.defaultProps = {
  name: '',
  date: '',
  link: '',
  phone: '',
  avatarOfUser: '',
};

export default User;
