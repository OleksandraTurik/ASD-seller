import React from 'react';

// Icons
import CatFootprint from 'assets/icons/CatFootprint';

// Styles
import {
  Container,
  Logo,
  AddInfo,
  Copy,
} from './styled';

const Footer = () => (
  <Container>
    <Logo>
      ASD SELLER
      {' '}
      <CatFootprint
        width="25px"
        height="25px"
      />
    </Logo>
    <AddInfo>
      Усі онлайн-оголошення України на
      {' '}
      <b>ASD SELLER</b>
      {' '}
      - тут ви знайдете те, що шукали!
      Натиснувши на кнопку
      {' '}
      <em>Додати оголошення</em>
      {' '}
      , ви зможете розмістити оголошення на будь-яку тематику легко й швидко.
      За допомогою сервісу
      {' '}
      <b>ASD SELLER</b>
      {' '}
      ви зможете купити чи продати з рук у руки
      практично все, що завгодно.
    </AddInfo>
    <Copy>&copy; 2022 </Copy>
  </Container>
);

export default Footer;
