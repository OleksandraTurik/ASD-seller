import Button from 'components/common/Button';
import Input from 'components/common/Input';
import React from 'react';
import ButtonContainer from '../ButtonContainer';
import MainContainer from '../MainContainer';
import SubContainer from '../SubContainer';
import SubText from '../SubText';

const ChangeEmail = () => (
  <MainContainer>
    <SubContainer>
      <SubText>Новий email</SubText>
      <Input />
    </SubContainer>
    <ButtonContainer>
      <Button>Зберегти</Button>
    </ButtonContainer>
  </MainContainer>
);

export default ChangeEmail;
