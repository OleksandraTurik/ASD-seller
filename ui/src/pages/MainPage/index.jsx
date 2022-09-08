import React, { useState } from 'react';
import Search from 'components/common/Search';
import AdvertCard from 'components/common/AdvertCard';
import {
  Title,
  Wrapper,
  CategoriesList,
  ItemLink,
  ImgWrap,
  LatestAdsSection,
  P,
} from 'pages/MainPage/styled';

import dytiachyiSvitImg from 'assets/img/rubryky/dytiachyi-svit.png';

import bmw from 'assets/img/bmw.webp';
import useFetchCategories from 'components/hooks/useFetchCategories';
import Subcategories from 'components/Main/Subcategories';
import Loader from 'components/common/Loader';
import useFetchAdvertMainPage from 'components/hooks/useFetchAdvertsMainPage';

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

  const categoriesList = () => {
    if (error) {
      return 'error';
    }

    if (loading) {
      return <Loader />;
    }

    return data.map((item) => (
      <ItemLink key={item._id} onClick={() => showSubcategories(item._id)}>
        <ImgWrap
          src={`http://localhost:4000/${item.image}`}
          alt={item.slug}
        />
        <P>{item.name}</P>
      </ItemLink>
    ));
  };

  const advertsCard = () => {
    if (errorAdvert) {
      return 'error';
    }

    if (loadingAdvert) {
      return <Loader />;
    }

    return advertInfo.map((item) => (
      <AdvertCard
        key={item._id}
        itemId={item._id}
        img={bmw}
        name={item.title}
        location="no data address"
        date={item.createdAt}
        price={`${item.price} грн`}
      />
    ));
  };

  return (
    <>
      <Search />
      <Wrapper>
        <Title>Головні рубрики</Title>
        <CategoriesList>
          {
            categoriesList()
          }
        </CategoriesList>
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
          <CategoriesList>
            {
              advertsCard()
            }
          </CategoriesList>
        </Wrapper>
      </LatestAdsSection>
    </>
  );
};

export default MainPage;
