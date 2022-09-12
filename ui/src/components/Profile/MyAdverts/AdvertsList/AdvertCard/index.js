import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import Loader from '../../../../common/Loader';
import AdvertCardList from '../AdvertCardList';
import { useFetchAdverts } from '../../../../hooks/useFetchAdverts';
import EmptyAdvertsList from '../EmptyAdvertsList';

const AdvertsCard = () => {
  const { id } = useParams();
  const {
    list,
    error,
    fetchData,
    hasMore,
  } = useFetchAdverts(id);
  return (
    <InfiniteScroll
      scrollThreshold="200px"
      dataLength={list.length} // This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={error && <h4><Loader /></h4>}
      useWindow={false}
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
          img={item.images[0]}
          name={item.title}
          location={item.address.city}
          date={item.createdAt}
          price={`${item.price} грн.`}
          category="Хобі, відпочинок і спорт"
          subcategory="Книги / журнали"
        />
      )) : <EmptyAdvertsList /> }
    </InfiniteScroll>
  );
};
export default AdvertsCard;
