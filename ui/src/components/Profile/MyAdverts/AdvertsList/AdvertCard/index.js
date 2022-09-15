
import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import AdvertCardList from '../AdvertCardList';
import EmptyAdvertsList from '../EmptyAdvertsList';
// Icons
import CatFootprint from 'assets/icons/CatFootprint';

// Hooks
import { useFetchAdverts } from 'components/hooks/useFetchAdverts';

// Components
import Loader from 'components/common/Loader';
import AdvertCardList from 'components/Profile/MyAdverts/AdvertsList/AdvertCardList';
import EmptyAdvertsList from 'components/Profile/MyAdverts/AdvertsList/EmptyAdvertsList';

const AdvertsCard = ({
  list = [], itemsAmount, changeFilters,
}) => {
  const handlePageChange = ({ selected }) => {
    changeFilters('page', selected + 1);
  };
  const pageCount = Math.ceil(itemsAmount / 10);

  return (
    <div>
      <div>
        {list.length ? list?.map((item) => (
          <AdvertCardList
            key={item._id}
            link="/"
            img={item.images[0]}
            name={item.title}
            location={item.address.city}
            date={item.createdAt}
            price={`${item.price} грн.`}
            category={item.category.name}
          />
        )) : <EmptyAdvertsList /> }
      </div>
      {itemsAmount && (
        <ReactPaginate pageCount={pageCount} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

AdvertsCard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  itemsAmount: PropTypes.number,
  changeFilters: PropTypes.func,
};

AdvertsCard.defaultProps = {
  itemsAmount: 0,
  list: [],
  changeFilters: () => {},
};

export default AdvertsCard;
