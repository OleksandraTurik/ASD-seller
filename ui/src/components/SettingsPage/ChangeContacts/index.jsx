import Input from 'components/common/Input';
import React from 'react';
import { Container, SubContainer, P } from './styled';

const ChangeContacts = () => (
  <Container>
    <SubContainer>
      <P>Вибрати місто</P>
      <div>
        <Input />
      </div>
    </SubContainer>
    <SubContainer>
      <P>Контактна особа</P>
      <div>
        <Input />
      </div>
    </SubContainer>
  </Container>
);

export default ChangeContacts;
