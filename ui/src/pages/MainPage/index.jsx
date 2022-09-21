import React, { useState, useRef } from 'react';

// Hooks
import useFetchCategories from 'components/hooks/useFetchCategories';
import useFetchAdverts from 'components/hooks/useFetchAdverts';

// Components
import Search from 'components/common/Search';
import Subcategories from 'components/Main/Subcategories';
import AdvertsCard from 'components/Main/AdvertsCard';
import CategoriesList from 'components/Main/CategoriesList';

// Styles
import {
  Title,
  Wrapper,
  CategoriesListStyle,
  AdvertsList,
  LatestAdsSection,
} from 'pages/MainPage/styled';

const MainPage = () => {
  const [subcategories, setSubcategories] = useState('id');
  const [isOpen, setIsOpen] = useState(false);
  const [childrenCategory, setChildrenCategory] = useState([]);
  const [params, setParams] = useState({ page: '1', sort: 'dscDate', limit: '100' });
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetchCategories();
  const { data: adverts, loading: advertsLoading, error: advertsError } = useFetchAdverts(params);
  const advertSection = useRef(null);

  const showSubcategories = (id) => {
    if (id === subcategories) {
      setSubcategories('id');
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setSubcategories(id);
    }

    categories.forEach((item) => {
      if (item._id === id) {
        setChildrenCategory(item);
      }
    });
  };

  return (
    <>
      <Search />
      <Wrapper>
        <Title>Головні рубрики</Title>
        <CategoriesListStyle>
          <CategoriesList
            error={categoriesError}
            loading={categoriesLoading}
            data={categories}
            showSubcategories={showSubcategories}
          />
        </CategoriesListStyle>
      </Wrapper>
      {isOpen && (
        <Subcategories
          childrenId={childrenCategory._id}
          childrenCategory={childrenCategory.children}
        />
      )}
      <LatestAdsSection ref={advertSection}>
        <Wrapper>
          <Title>Останні оголошення</Title>
          <AdvertsList>
            <AdvertsCard
              errorAdvert={advertsError}
              loadingAdvert={advertsLoading}
              advertInfo={adverts?.results || []}
            />
          </AdvertsList>
        </Wrapper>
      </LatestAdsSection>
    </>
  );
};

export default MainPage;
