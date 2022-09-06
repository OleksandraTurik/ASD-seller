import React, { useCallback, useEffect, useState } from 'react';
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
import renault from 'assets/img/renault.webp';
import useFetchCategories from 'components/hooks/useFetchCategories';
import Subcategories from 'components/MainPage/Subcategories';

const MainPage = () => {
  const [subcategories, setSubcategories] = useState('id');
  const [childrenCategory, setChildrenCategory] = useState([]);
  const { data, loading, error } = useFetchCategories();
  const colors = [
    'rgb(255, 206, 50)',
    'rgb(58, 119, 255)',
    'rgb(35, 229, 219)',
    'rgb(255, 86, 54)',
    'rgb(255, 246, 217)',
    'rgb(206, 221, 255)',
    'rgb(200, 248, 246)',
    'rgb(255, 214, 201)',
    'rgb(255, 206, 50)',
    'rgb(206, 221, 255)',
    'rgb(200, 248, 246)',
  ];

  const showSubcategories = (id) => {
    if (id === subcategories) {
      setSubcategories('hide');
    } else {
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
        <CategoriesList>
          {
            data.map((item, index) => (
              <ItemLink key={item._id} onClick={() => showSubcategories(item._id)}>
                <ImgWrap
                  src={dytiachyiSvitImg}
                  alt={item.slug}
                  backgroundColor={colors[index]}
                />
                <P>{item.name}</P>
              </ItemLink>
            ))
          }
        </CategoriesList>
      </Wrapper>
      {subcategories !== 'hide' && (
        <Subcategories
          childrenId={childrenCategory._id}
          childrenCategory={childrenCategory.children}
        />
      )}
      <LatestAdsSection>
        <Wrapper>
          <Title>Останні оголошення</Title>
          <CategoriesList>
            <AdvertCard
              link="https://www.google.com.ua/"
              img={bmw}
              name="столбики б.у стовпчики сітка рябиця Відбірні з Доставкою по Україні"
              location="Івано-Франківськ"
              date="Сьогодні 11:22"
              price="56 грн."
            />
            <AdvertCard
              link="https://www.google.com.ua/"
              img={renault}
              name="Doctor's Best Vitam D3 2000iu 50mcg 180softgels до 02.2023"
              location="Харків, Основ'янський"
              date="Сьогодні 18:05"
              price="200 грн."
            />
            <AdvertCard
              link="https://www.google.com.ua/"
              img={bmw}
              name="столбики б.у стовпчики сітка рябиця Відбірні з Доставкою по Україні"
              location="Івано-Франківськ"
              date="Сьогодні 11:22"
              price="56 грн."
            />
            <AdvertCard
              link="https://www.google.com.ua/"
              img={bmw}
              name="столбики б.у стовпчики сітка рябиця Відбірні з Доставкою по Україні"
              location="Івано-Франківськ"
              date="Сьогодні 11:22"
              price="56 грн."
            />
            <AdvertCard
              link="https://www.google.com.ua/"
              img={bmw}
              name="столбики б.у стовпчики сітка рябиця Відбірні з Доставкою по Україні"
              location="Івано-Франківськ"
              date="Сьогодні 11:22"
              price="56 грн."
            />
          </CategoriesList>
        </Wrapper>
      </LatestAdsSection>
    </>
  );
};

export default MainPage;
