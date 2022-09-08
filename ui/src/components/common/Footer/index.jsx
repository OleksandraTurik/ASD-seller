import React from 'react';
import {
  Container,
  Logo,
  AddInfo,
  Copy,
} from './styled';

const Footer = () => (
  <Container>
    <Logo>ASD.seller</Logo>
    <AddInfo>
      Усі онлайн-оголошення України на ASD.seller - тут ви знайдете те, що шукали!
      За допомогою сервісу ASD.seller ви зможете купити чи продати з рук у руки
      практично все, що завгодно.
    </AddInfo>
    <Copy>&copy; 2022 </Copy>
  </Container>
);

export default Footer;
