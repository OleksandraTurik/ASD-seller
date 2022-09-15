import React from 'react';

// Components
import { useForm } from 'react-hook-form';
import Button from 'components/common/Button';
import userServices from 'services/userServices';
import MainContainer from 'components/SettingsPage/MainContainer';
import SubContainer from 'components/SettingsPage/SubContainer';

// Styles
import { ChooseFileStyle, FileContainer } from './styled';
import ButtonContainer from '../ButtonContainer';

const ChangePhoto = () => {
  const { handleSubmit, reset, register } = useForm({
    mode: 'onChange',

    defaultValues: {
      images: '',
    },
  });
  const onSubmit = async (data) => {
    const updatePhoto = await userServices.updateUserPhoto(data);
    console.log(data);
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <FileContainer>
            <ChooseFileStyle
              id="images"
              name="images"
              accept="image/heic, image/png, image/jpeg, image/webp"
              multiple
              type="file"
              {...register('file')}
            />
          </FileContainer>
        </SubContainer>
        <ButtonContainer>
          <Button type="submit">Зберегти</Button>
        </ButtonContainer>
      </form>
    </MainContainer>
  );
};

export default ChangePhoto;
