import ChooseFile from 'components/common/ChooseFile';
import React from 'react';
import MainContainer from '../MainContainer';
import SubContainer from '../SubContainer';
import {
  FileContainer,
} from './styled';

const ChangePhoto = () => (
  <MainContainer>
    <SubContainer>
      <FileContainer>
        <ChooseFile />
      </FileContainer>
    </SubContainer>
  </MainContainer>
);

export default ChangePhoto;
