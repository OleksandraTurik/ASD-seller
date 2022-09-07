import Button from 'components/common/Button';
import Checkbox from 'components/common/Checkbox';
import Input from 'components/common/Input';
import React, { useState } from 'react';
import ButtonContainer from '../ButtonContainer';
import MainContainer from '../MainContainer';
import SubContainer from '../SubContainer';
import SubText from '../SubText';
import { CheckboxContainer } from './styled';

const ChangeContacts = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <MainContainer>
      <SubContainer>
        <SubText>Вибрати місто</SubText>
        <Input />
      </SubContainer>
      <SubContainer>
        <SubText>Контактна особа</SubText>
        <Input />
      </SubContainer>
      <CheckboxContainer>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
      </CheckboxContainer>
      <ButtonContainer>
        <Button>Зберегти</Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default ChangeContacts;
