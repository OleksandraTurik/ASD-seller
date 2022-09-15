import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';

// Icons
import CatFootprint from 'assets/icons/CatFootprint';

// Hooks
import { useFetchAdverts } from 'components/hooks/useFetchAdverts';

// Components
import Loader from 'components/common/Loader';
import AdvertCardList from 'components/Profile/MyAdverts/AdvertsList/AdvertCardList';
import EmptyAdvertsList from 'components/Profile/MyAdverts/AdvertsList/EmptyAdvertsList';

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;

const ScrollEnd = styled.p`
  border-radius: 5px;
  font-weight: 600;
  width: 280px;
  font-size: 16px;
  text-align: center;
  padding: 13px 0;
  color: #002f34;
  background-color: #d3f8f1;
`;

const AdvertsCard = ({ setAmount }) => {
  const { id } = useParams();
  const {
    list,
    error,
    fetchData,
    hasMore,
  } = useFetchAdverts(id);

  useEffect(() => {
    setAmount(list.length);
  }, [list]);

  return (
    <InfiniteScroll
      dataLength={list.length} // This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={(
        error && (
        <Loader
          width="75px"
          height="75px"
          border="12px solid #fff"
          borderTopSize="12px"
          margin="150px 0"
        />
        ))}
      useWindow={false}
      endMessage={list.length > 10 ? (
        <Wrapper>
          <ScrollEnd>
            Yay! You have seen it all
            {' '}
            <CatFootprint
              width="15px"
              height="15px"
              fill="#002f34"
            />
          </ScrollEnd>
        </Wrapper>
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

AdvertsCard.propTypes = {
  setAmount: PropTypes.func.isRequired,
};

export default AdvertsCard;
