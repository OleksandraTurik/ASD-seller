import Button from 'components/common/Button';
import Input from 'components/common/Input';
import React from 'react';
import ButtonContainer from '../ButtonContainer';
import MainContainer from '../MainContainer';
import SubContainer from '../SubContainer';
import SubText from '../SubText';

const ChangeNumber = () => (
  <MainContainer>
    <SubContainer>
      <SubText>Новий телефон</SubText>
      <Input />
    </SubContainer>
    <ButtonContainer>
      <Button>Зберегти</Button>
    </ButtonContainer>
  </MainContainer>
);

export default ChangeNumber;
