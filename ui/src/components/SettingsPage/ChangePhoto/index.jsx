import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'components/common/Button';
import userServices from 'services/userServices';
import MainContainer from '../MainContainer';
import SubContainer from '../SubContainer';
import { ChooseFileStyle, FileContainer } from './styled';

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
              type="file"
              accept="image/heic, image/png, image/jpeg, image/webp"
              multiple
              {...register('images')}
            />
          </FileContainer>
        </SubContainer>
        <Button type="submit" />
      </form>
    </MainContainer>
  );
};

export default ChangePhoto;
