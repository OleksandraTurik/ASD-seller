import React from 'react';

// Components
import ChooseFile from 'components/common/ChooseFile';
import MainContainer from 'components/SettingsPage/MainContainer';
import SubContainer from 'components/SettingsPage/SubContainer';

// Styles
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
