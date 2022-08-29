import React from 'react';

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
  LinkWrap,
  ArrowIcon,
  Button,
} from './styled';

const User = () => (
  <Wrapper>
    <h1>Користувач</h1>
    <Container>
      <UserIcon src={avatar} alt="user avatar" />
      <UserInfo>
        <h2>Руслан</h2>
        <RegistrationDate>
          на asd-seller з
          <p>червень 2012 р.</p>
        </RegistrationDate>
      </UserInfo>
    </Container>
    <Button type="button">Показати телефон</Button>
    <LinkWrap>
      Усі оголошення автора
      <ArrowIcon src={angleRight} alt="right arrow icon" />
    </LinkWrap>
  </Wrapper>
);

export default User;
