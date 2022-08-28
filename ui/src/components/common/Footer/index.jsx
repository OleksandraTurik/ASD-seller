import React from 'react';
import {
  Container,
  Logo,
  AddInfo,
  Copy,
} from './styled';

const Footer = () => (
  <Container>
    <Logo>ASD.link</Logo>
    <AddInfo>
      Усі онлайн-оголошення України на OLX - тут ви знайдете те, що шукали!
      Натиснувши на кнопку Подати оголошення,
      ви зможете розмістити оголошення на будь-яку тематику легко й швидко.
      За допомогою сервісу OLX ви зможете купити чи продати з рук у руки
      практично все, що завгодно.
    </AddInfo>
    <Copy>&copy; 2021 </Copy>
  </Container>
);

export default Footer;
