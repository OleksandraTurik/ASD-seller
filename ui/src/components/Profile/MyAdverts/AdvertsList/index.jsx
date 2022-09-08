import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

// Components
import AdvertCardList from 'components/Profile/MyAdverts/AdvertsList/AdvertCardList';
import EmptyAdvertsList from 'components/Profile/MyAdverts/AdvertsList/EmptyAdvertsList';

// Images
import bmw from 'assets/img/bmw.webp';
import { useParams } from 'react-router-dom';

import Loader from '../../../common/Loader';
import { useFetchAdverts } from '../../../hooks/useFetchAdverts';

// Styles
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ primary }) => primary ? 'center' : 'flex-start'};
  justify-content: ${({ primary }) => primary ? 'center' : 'flex-start'};
`;

const AdvertsList = () => {
  const isAdvert = true;

  const { id } = useParams();
  const {
    list,
    loading,
    error,
    fetchData,
    hasMore,
  } = useFetchAdverts(id);

  const advertsCard = () => {
    if (error) {
      return 'error';
    }

    return (
      <InfiniteScroll
        scrollThreshold="200px"
        dataLength={list.length} // This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<h4><Loader /></h4>}
        useWindow={false}
        pullDownToRefreshThreshold={50}
        endMessage={list.length > 10 ? (
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        ) : null}
        // below props only if you need pull down functionality
      >
        {list.length ? list?.map((item) => (
          <AdvertCardList
            key={item._id}
            link="/"
            img={bmw}
            name={item.title}
            location={item.address.city}
            date={item.createdAt}
            price={`${item.price} грн.`}
            category="Хобі, відпочинок і спорт"
            subcategory="Книги / журнали"
          />
        )) : null}
      </InfiniteScroll>
    );
  };

  return (
    <div>
      {isAdvert
        ? (
          <Container>
            {
              advertsCard()
            }
          </Container>
        )
        : (
          <Container primary>
            <EmptyAdvertsList />
          </Container>
        )}
    </div>
  );
};

export default AdvertsList;
