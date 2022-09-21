import React from 'react';
import PropTypes from 'prop-types';
import { URL } from 'API';

// Components
import Loader from 'components/common/Loader';
import NoAdverts from 'components/common/NoAdverts';

// Styles
import { ItemLink, ImgWrap } from './styled';

const CategoriesList = ({
  error,
  loading,
  data,
  showSubcategories,
}) => {
  if (error) {
    return <NoAdverts />;
  }

  if (loading) {
    return <Loader />;
  }

  return data?.map((item) => (
    <ItemLink key={item._id} onClick={() => showSubcategories(item._id, data)}>
      <ImgWrap
        width="88px"
        height="88px"
        src={`${URL}/${item.image}`}
        alt={item.name}
      />
      <p>{item.name}</p>
    </ItemLink>
  ));
};

CategoriesList.propTypes = {
  error: PropTypes.shape({}),
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
    image: PropTypes.string,
  })),
  showSubcategories: PropTypes.func.isRequired,
};
CategoriesList.defaultProps = {
  error: null,
  data: null,
};

export default CategoriesList;
