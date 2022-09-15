import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

// Helpers
import advertsAdapt from 'helpers/advertsAdapt';

// Components
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
    <>
      <div>
        {list.length ? advertsAdapt(list).map((item) => (
          <AdvertCardList
            key={item._id}
            link="/"
            img={item.images[0]}
            name={item.title}
            location={`${item.address.city}, ${item.address.admin_name}`}
            date={item.createdAt}
            price={`${item.price} грн.`}
            category={item.category.name}
            subcategory={item.category.child.name}
          />
        )) : <EmptyAdvertsList /> }
      </div>
      {itemsAmount && (
        <ReactPaginate pageCount={pageCount} onPageChange={handlePageChange} />
      )}
    </>
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
