import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/common/Loader';
import NotFound from 'pages/NotFound';
import { ItemLink, ImgWrap } from './styled';

const CategoriesList = ({
  error,
  loading,
  data,
  showSubcategories,
}) => {
  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return <Loader />;
  }

  return data?.map((item) => (
    <ItemLink key={item._id} onClick={() => showSubcategories(item._id, data)}>
      <ImgWrap
        width="88px"
        height="88px"
        src={`http://localhost:4000/${item.image}`}
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
