import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

// Components
import Loader from 'components/common/Loader';
import AdvertCardList from '../AdvertCardList';
import EmptyAdvertsList from '../EmptyAdvertsList';

// Styles
import './style.css';

const AdvertsCard = ({
  list = [],
  itemsAmount,
  changeFilters,
  error,
  loading,
}) => {
  const handlePageChange = ({ selected }) => {
    changeFilters('page', selected + 1);
  };
  const pageCount = Math.ceil(itemsAmount / 10);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div>
        {!error && list.length ? list?.map((item) => (
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
        <div>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageChange}
            previousLabel="← Previous"
            extLabel="Next →"
            activeClassName="pagination__link--active"
            containerClassName="pagination"
            previousLinkClassName="pagination__link"
            nextLinkClassName="pagination__link"
            disabledClassName="pagination__link--disabled"
          />
        </div>
      )}
    </div>
  );
};

AdvertsCard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  itemsAmount: PropTypes.number,
  changeFilters: PropTypes.func,
  error: PropTypes.bool,
  loading: PropTypes.bool,
};

AdvertsCard.defaultProps = {
  itemsAmount: 0,
  list: [],
  changeFilters: () => {},
  error: false,
  loading: true,
};

export default AdvertsCard;
