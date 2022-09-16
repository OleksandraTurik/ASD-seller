import React, { useState } from 'react';

// Components
import Search from 'components/common/Search';
import useFetchCategories from 'components/hooks/useFetchCategories';
import Subcategories from 'components/Main/Subcategories';
import useFetchAdvertMainPage from 'components/hooks/useFetchAdvertsMainPage';
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
  const { data, loading, error } = useFetchCategories();
  const { advertInfo, loadingAdvert, errorAdvert } = useFetchAdvertMainPage();

  const showSubcategories = (id) => {
    if (id === subcategories) {
      setSubcategories('id');
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setSubcategories(id);
    }

    data.forEach((item) => {
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
            error={error}
            loading={loading}
            data={data}
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
      <LatestAdsSection>
        <Wrapper>
          <Title>Останні оголошення</Title>
          <AdvertsList>
            <AdvertsCard
              errorAdvert={errorAdvert}
              loadingAdvert={loadingAdvert}
              advertInfo={advertInfo}
            />
          </AdvertsList>
        </Wrapper>
      </LatestAdsSection>
    </>
  );
};

export default MainPage;
