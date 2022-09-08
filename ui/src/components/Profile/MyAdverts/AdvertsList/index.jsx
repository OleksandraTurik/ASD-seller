import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

// Hooks
import { useFetchAdverts } from 'components/hooks/useFetchAdverts';

// Components
import Loader from 'components/common/Loader';
import AdvertCardList from 'components/Profile/MyAdverts/AdvertsList/AdvertCardList';
import EmptyAdvertsList from 'components/Profile/MyAdverts/AdvertsList/EmptyAdvertsList';

// Images
import bmw from 'assets/img/bmw.webp';

// Icons
import CatFootpint from 'assets/icons/CatFootprint';

// Styles
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ primary }) => primary ? 'center' : 'flex-start'};
  justify-content: ${({ primary }) => primary ? 'center' : 'flex-start'};
`;
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

    if (loading) {
      return (
        <Loader
          width="75px"
          height="75px"
          border="12px solid #fff"
          borderTopSize="12px"
          margin="150px 0"
        />
      );
    }

    return (
      <InfiniteScroll
        dataLength={list.length} // This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={(
          <Loader
            width="75px"
            height="75px"
            border="12px solid #fff"
            borderTopSize="12px"
            margin="150px 0"
          />
        )}
        endMessage={(
          <Wrapper>
            <ScrollEnd>
              Yay! You have seen it all
              {' '}
              <CatFootpint
                width="15px"
                height="15px"
                fill="#002f34"
              />
            </ScrollEnd>
          </Wrapper>
        )}
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
