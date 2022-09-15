import React, { useState } from 'react';
import { settingsComponentMap } from 'components/SettingsPage';
import { useParams } from 'react-router-dom';

// Components
import ItemContainer from 'components/SettingsPage/ItemContainer';

// hooks
import { useGetInfoExactUser } from 'components/hooks/useGetInfoExactUser';

// Styles
import { Container } from './styled';

const SettingsPage = () => {
  const { id } = useParams();
  const { data, error, loading } = useGetInfoExactUser(id);
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
            emailOfUser={typeof data.email === 'string' ? data.email : 'no email'}
          />
        ))
      }
    </Container>
  );
};

export default SettingsPage;
