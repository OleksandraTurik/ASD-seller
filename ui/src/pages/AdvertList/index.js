import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListForm from 'components/AdvertList/ListForm';
import Results from 'components/AdvertList/Results';
import advertServices from 'services/advertServices';
import { Wrapper, Container } from './styled';

const AdvertList = () => {
  // const [queries, setQueries] = useSearchParams();
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const res = await advertServices.getAdverts();
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <Wrapper>
      <Container>
        <ListForm />
        <Results data={data.results || []} resultAmount={data.itemsAmount || 0} />
      </Container>
    </Wrapper>
  );
};

export default AdvertList;
