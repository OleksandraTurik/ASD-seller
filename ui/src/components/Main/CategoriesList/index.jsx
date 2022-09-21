import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/common/Loader';
import NotFound from 'pages/NotFound';
import { URL } from 'API';
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
    return <Loader margin="0" left="0%" />;
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
