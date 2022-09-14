import React from 'react';

// Components
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import ButtonContainer from 'components/SettingsPage/ButtonContainer';
import MainContainer from 'components/SettingsPage/MainContainer';
import SubContainer from 'components/SettingsPage/SubContainer';
import SubText from 'components/SettingsPage/SubText';

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
