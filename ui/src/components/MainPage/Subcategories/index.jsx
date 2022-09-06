import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import usePrevious from 'components/hooks/usePrevious';
import { SubCategoryButton } from 'components/common/Button/styled';
import {
  Container,
  SubContainer,
  ButtonContainer,
  NameButtonContainer,
  P,
  LinkName,
} from './styled';
import ArrowRight from '../ArrowRight';

const Subcategories = ({ childrenCategory, childrenId }) => {
  const [subcategory, setSubcategory] = useState(false);
  const [childrenSubcategory, setChildrenSubcategory] = useState([]);
  const [changeCategory, setChangeCategory] = useState('open');
  const prevChildrenId = usePrevious({ childrenId });

  useEffect(() => {
    if (prevChildrenId !== undefined && prevChildrenId.childrenId !== childrenId) {
      setChangeCategory('hide');
      setSubcategory(false);
    }
  }, [childrenId]);

  const showSubcategory = (id) => {
    setSubcategory(!subcategory);

    childrenCategory.forEach((item) => {
      if (item._id === id) {
        setChangeCategory('open');
        setChildrenSubcategory(item.children);
      }
    });
  };

  return (
    <div>
      <Container>
        {
          childrenCategory.map((item) => (
            item.children.length
              ? (
                <ButtonContainer key={item._id}>
                  <SubCategoryButton
                    onClick={() => showSubcategory(item._id)}
                  >
                    <NameButtonContainer>
                      <ArrowRight />
                      <P>{item.name}</P>
                    </NameButtonContainer>
                  </SubCategoryButton>
                </ButtonContainer>
              )
              : (
                <SubContainer key={item._id}>
                  <LinkName to="/">{item.name}</LinkName>
                </SubContainer>
              )
          ))
        }
      </Container>
      {
        subcategory
          && changeCategory === 'open'
          ? <Subcategories childrenCategory={childrenSubcategory} />
          : null
      }
    </div>
  );
};

Subcategories.propTypes = {
  childrenCategory: PropTypes.arrayOf(PropTypes.object),
  childrenId: PropTypes.string,
};

Subcategories.defaultProps = {
  childrenCategory: [],
  childrenId: 'id',
};

export default Subcategories;
