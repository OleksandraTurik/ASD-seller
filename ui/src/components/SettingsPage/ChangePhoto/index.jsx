import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/slice/getInfoExactUser';

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
  const dispatch = useDispatch();
  const { handleSubmit, reset, register } = useForm({
    mode: 'onChange',

    defaultValues: {
      avatar: '',
    },
  });
  const onSubmit = async (data) => {
    try {
      const { key } = await userServices.updateUserPhoto({ avatar: data.file });
      dispatch(updateUserInfo({ avatar: key }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <FileContainer>
            <ChooseFileStyle
              id="avatar"
              name="avatar"
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
