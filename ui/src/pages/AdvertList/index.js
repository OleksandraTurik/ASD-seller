import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListForm from 'components/AdvertList/ListForm';
import Results from 'components/AdvertList/Results';
import Pagination from 'components/AdvertList/Pagination';
import useFetchAdvertsQueryParams from 'components/hooks/useFetchAdvertsQueryParams';
import { Wrapper, Container } from './styled';

const AdvertList = () => {
  const [queryParams, setQueryParams] = useState({
    sort: 'dscDate',
  });
  const { data, pending } = useFetchAdvertsQueryParams(queryParams);

  const onNextPageClick = () => {
    const { next } = data;
    const re = /page=[0-9]/m;
    setQueryParams(prev => ({ ...prev, page: next.match(re)[0].split('=')[1] }));
  };
  const onPreviousPageClick = () => {
    const { previous } = data;
    const re = /page=[0-9]/m;
    setQueryParams(prev => ({ ...prev, page: previous.match(re)[0].split('=')[1] }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Wrapper>
      <Container>
        <ListForm />
        <Results pending={pending} data={data?.results || []} resultAmount={data?.itemsAmount || 0} />
        {!pending && (
          <Pagination
            onNextPageClick={data?.next && onNextPageClick}
            onPrevPageClick={data?.previous && onPreviousPageClick}
          />
        )}
      </Container>
    </Wrapper>
  );
};

export default AdvertList;
