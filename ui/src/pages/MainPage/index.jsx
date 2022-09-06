import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from 'components/common/Search';
import AdvertCard from 'components/common/AdvertCard';
import {
  Title,
  Wrapper,
  CategoriesList,
  ItemLink,
  ImgWrap,
  LatestAdsSection,
} from 'pages/MainPage/styled';

import dytiachyiSvitImg from 'assets/img/rubryky/dytiachyi-svit.png';
import nerukhomistImg from 'assets/img/rubryky/nerukhomist.png';
import avtoImg from 'assets/img/rubryky/avto.png';
import zapchastynyImg from 'assets/img/rubryky/zapchastyny.png';
import robotaImg from 'assets/img/rubryky/robota.png';
import tvarynyImg from 'assets/img/rubryky/tvaryny.png';
import dimISadImg from 'assets/img/rubryky/dim-i-sad.png';
import elektronikaImg from 'assets/img/rubryky/elektronika.png';
import biznesTaPosluhyImg from 'assets/img/rubryky/biznes-ta-posluhy.png';
import modaIStylImg from 'assets/img/rubryky/moda-i-styl.png';
import hobiImg from 'assets/img/rubryky/hobi.png';

import bmw from 'assets/img/bmw.webp';
import renault from 'assets/img/renault.webp';
import getAdvert, { getAdvertThunk } from 'redux/slice/getAdvert';

const MainPage = () => {
  const categories = [
    {
      src: dytiachyiSvitImg,
      alt: 'Рубрика Дитячий світ',
      backgroundColor: 'rgb(255, 206, 50)',
      name: 'Дитячий світ',
    },
    {
      src: nerukhomistImg,
      alt: 'Рубрика Нерухомість',
      backgroundColor: 'rgb(58, 119, 255)',
      name: 'Нерухомість',
    },
    {
      src: avtoImg,
      alt: 'Рубрика Авто',
      backgroundColor: 'rgb(35, 229, 219)',
      name: 'Авто',
    },
    {
      src: zapchastynyImg,
      alt: 'Рубрика Запчастини для транспорту',
      backgroundColor: 'rgb(255, 86, 54)',
      name: 'Запчастини для транспорту',
    },
    {
      src: robotaImg,
      alt: 'Рубрика Робота',
      backgroundColor: 'rgb(255, 246, 217)',
      name: 'Робота',
    },
    {
      src: tvarynyImg,
      alt: 'Рубрика Тварини',
      backgroundColor: 'rgb(206, 221, 255)',
      name: 'Тварини',
    },
    {
      src: dimISadImg,
      alt: 'Рубрика Дім і сад',
      backgroundColor: 'rgb(200, 248, 246)',
      name: 'Дім і сад',
    },
    {
      src: elektronikaImg,
      alt: 'Рубрика Електроніка',
      backgroundColor: 'rgb(255, 214, 201)',
      name: 'Електроніка',
    },
    {
      src: biznesTaPosluhyImg,
      alt: 'Рубрика Бізнес та послуги',
      backgroundColor: 'rgb(255, 206, 50)',
      name: 'Бізнес та послуги',
    },
    {
      src: modaIStylImg,
      alt: 'Рубрика Мода і стиль',
      backgroundColor: 'rgb(206, 221, 255)',
      name: 'Мода і стиль',
    },
    {
      src: hobiImg,
      alt: 'Рубрика Хобі, відпочинок і спорт',
      backgroundColor: 'rgb(200, 248, 246)',
      name: 'Хобі, відпочинок і спорт',
    },
  ];

  const adverts = [
    {
      id: '630f3c510f80e291183f2dec',
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
            categories.map((item) => (
              <ItemLink href="#" key={item.name}>
                <ImgWrap
                  src={item.src}
                  alt={item.alt}
                  backgroundColor={item.backgroundColor}
                />
                <p>{item.name}</p>
              </ItemLink>
            ))
          }
        </CategoriesList>
      </Wrapper>
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
