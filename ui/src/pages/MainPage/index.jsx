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
import renault from 'assets/img/renault.webp';
import useFetchCategories from 'components/hooks/useFetchCategories';
import Subcategories from 'components/Main/Subcategories';
import Loader from 'components/common/Loader';

const MainPage = () => {
  const [subcategories, setSubcategories] = useState('id');
  const [isOpen, setIsOpen] = useState(false);
  const [childrenCategory, setChildrenCategory] = useState([]);
  const { data, loading, error } = useFetchCategories();

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
          src={dytiachyiSvitImg}
          alt={item.slug}
        />
        <P>{item.name}</P>
      </ItemLink>
    ));
  };

  const adverts = [
    {
      id: '6318caec9959b9a5c1e4a7ef',
      img: bmw,
      name: 'столбики б.у стовпчики сітка рябиця Відбірні з Доставкою по Україні',
      location: 'Івано-Франківськ',
      date: 'Сьогодні 11:22',
      price: 56,
    },
    {
      id: '630f3cc90f80e291183f2def',
      img: renault,
      name: "Doctor's Best Vitam D3 2000iu 50mcg 180softgels до 02.2023",
      location: "Харків, Основ'янський",
      date: 'Сьогодні 18:05',
      price: 200,
    },
    {
      id: '630f3d320f80e291183f2df2',
      img: bmw,
      name: 'столбики б.у стовпчики сітка рябиця Відбірні з Доставкою по Україні',
      location: 'Івано-Франківськ',
      date: 'Сьогодні 11:22',
      price: 56,
    },
    {
      id: '631091191c4a15e6ef7d626f',
      img: bmw,
      name: 'столбики б.у стовпчики сітка рябиця Відбірні з Доставкою по Україні',
      location: 'Івано-Франківськ',
      date: 'Сьогодні 11:22',
      price: 56,
    },
    {
      id: '6310911b1c4a15e6ef7d6272',
      img: bmw,
      name: 'столбики б.у стовпчики сітка рябиця Відбірні з Доставкою по Україні',
      location: 'Івано-Франківськ',
      date: 'Сьогодні 11:22',
      price: 56,
    },
  ];

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
              adverts.map((item) => (
                <AdvertCard
                  key={item.id}
                  id={item.id}
                  link={`/adverts/${item.id}`}
                  img={item.img}
                  name={item.name}
                  location={item.location}
                  date={item.date}
                  price={item.price}
                />
              ))
            }
          </CategoriesList>
        </Wrapper>
      </LatestAdsSection>
    </>
  );
};

export default MainPage;
