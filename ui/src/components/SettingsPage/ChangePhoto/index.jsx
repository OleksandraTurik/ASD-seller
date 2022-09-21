import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/slice/getInfoExactUser';

// Components
import { useForm } from 'react-hook-form';
import Button from 'components/common/Button';
import userServices from 'services/userServices';
import MainContainer from 'components/SettingsPage/MainContainer';
import SubContainer from 'components/SettingsPage/SubContainer';

// Styles
import { ChooseFileStyle, FileContainer, Image } from './styled';
import ButtonContainer from '../ButtonContainer';

const ChangePhoto = ({ avatar }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
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
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = window.URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // eslint-disable-next-line consistent-return
    return () => window.URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubContainer>
          <FileContainer>
            <div style={{ display: 'flex' }}>
              <ChooseFileStyle
                id="avatar"
                name="avatar"
                accept="image/heic, image/png, image/jpeg, image/webp"
                multiple
                type="file"
                {...register('file', {
                  onChange: onSelectFile,
                })}
              />
              {avatar && !preview ? <Image src={`http://localhost:4000/pic/${avatar}`} alt="asd" />
                : <Image src={preview} alt="asd" />}
            </div>
          </FileContainer>
        </SubContainer>
        <ButtonContainer>
          <Button type="submit">Зберегти</Button>
        </ButtonContainer>
      </form>
    </MainContainer>
  );
};

ChangePhoto.propTypes = {
  avatar: PropTypes.string,
};
ChangePhoto.defaultProps = {
  avatar: '',
};

export default ChangePhoto;
