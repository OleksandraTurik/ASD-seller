import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { settingsComponentMap } from 'components/SettingsPage';

// Components
import ItemContainer from 'components/SettingsPage/ItemContainer';

// Styles
import { Container } from './styled';

const SettingsPage = () => {
  const {
    email, fullName, address, phoneNumber, avatar,
  } = useSelector(state => state.exactUserInfoSlice.data);
  const [dataComponent, setDataComponent] = useState(settingsComponentMap);

  const handleOpen = (id) => {
    const newData = dataComponent.map((item) => ({
      ...item,
      isOpen: id === item.id ? !item.isOpen : false,
    }));
    setDataComponent(newData);
  };

  return (
    <Container>
      {
        dataComponent.map((item) => (
          <ItemContainer
            key={item.id}
            id={item.id}
            name={item.name}
            isOpen={item.isOpen}
            Component={item.Component}
            handleOpen={handleOpen}
            emailOfUser={email}
            fullName={fullName}
            address={address === null ? {} : address}
            phoneNumber={phoneNumber}
            avatar={avatar}
          />
        ))
      }
    </Container>
  );
};

export default SettingsPage;
