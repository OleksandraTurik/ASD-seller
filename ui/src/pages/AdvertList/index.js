import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import qs from 'query-string';

// Components
import ListForm from 'components/AdvertList/ListForm';
import Results from 'components/AdvertList/Results';
import Pagination from 'components/AdvertList/Pagination';
import useFetchAdverts from 'components/hooks/useFetchAdverts';

// Styles
import { Wrapper, Container } from './styled';

const AdvertList = () => {
  const [pageQueries, setPageQueries] = useSearchParams();
  const [queryParams, setQueryParams] = useState({
    sort: 'dscDate',
    limit: '10',
  });
  const { data, pending } = useFetchAdverts(queryParams);

  const updateSearchParams = (update) => {
    const prevParams = qs.parse(pageQueries.toString());
    const updateParams = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in update) {
      if (Object.hasOwnProperty.call(update, key)) {
        if (update[key]) updateParams[key] = update[key].replace('+', ' ');
        if (!update[key]) delete prevParams[key];
      }
    }
    setPageQueries({ ...prevParams, ...updateParams });
    setQueryParams(prev => ({ ...prev, ...prevParams, ...update }));
  };

  useEffect(() => {
    if (!pageQueries.toString()) return;
    const params = qs.parse(pageQueries.toString());
    setQueryParams((prev) => ({ ...prev, ...params }));
  }, [pageQueries]);

  const onNextPageClick = () => {
    const { next } = data;
    const re = /page=[0-9]/m;
    updateSearchParams({ page: next.match(re)[0].split('=')[1] });
    animateScroll.scrollToTop({ duration: 100 });
  };
  const onPreviousPageClick = () => {
    const { previous } = data;
    const re = /page=[0-9]/m;
    updateSearchParams({ page: previous.match(re)[0].split('=')[1] });
    animateScroll.scrollToTop({ duration: 100 });
  };
  const onQueryUpdate = (updates) => {
    updateSearchParams({ page: '', ...updates });
    animateScroll.scrollToTop({ duration: 100 });
  };

  return (
    <Wrapper>
      <Container>
        <ListForm onSubmit={onQueryUpdate} />
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
