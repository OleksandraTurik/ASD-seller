import React, { useCallback, useEffect } from 'react';
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
import { getAdvertsThunk } from 'redux/slice/getAdverts';
import useFetchAdvert from 'components/hooks/useFetchAdverts';

const MainPage = () => {
  const { advertInfo, loading, error } = useFetchAdvert();

  console.log(advertInfo);

  const advertsCard = () => {
    if (error) {
      return 'error';
    }

    if (loading) {
      return 'Loading';
    }

    return advertInfo.map((item) => (
      <AdvertCard
        key={item._id}
        link="https://www.google.com.ua/"
        img={bmw}
        name={item.title}
        location={item.address}
        date={item.createdAt}
        price={`${item.price} грн`}
      />
    ));
  };

  console.log(advertInfo);

  return (
    <>
      <Search />
      <Wrapper>
        <Title>Головні рубрики</Title>
        <CategoriesList>
          <ItemLink href="#">
            <ImgWrap
              src={dytiachyiSvitImg}
              alt="Рубрика Дитячий світ"
              backgroundColor="rgb(255, 206, 50)"
            />
            <p>Дитячий світ</p>
          </ItemLink>
          <ItemLink href="#">
            <ImgWrap
              src={nerukhomistImg}
              alt="Рубрика Нерухомість"
              backgroundColor="rgb(58, 119, 255)"
            />
            <p>Нерухомість</p>
          </ItemLink>
          <ItemLink href="#">
            <ImgWrap
              src={avtoImg}
              alt="Рубрика Авто"
              backgroundColor="rgb(35, 229, 219)"
            />
            <p>Авто</p>
          </ItemLink>
          <ItemLink href="#">
            <ImgWrap
              src={zapchastynyImg}
              alt="Рубрика Запчастини для транспорту"
              backgroundColor="rgb(255, 86, 54)"
            />
            <p>Запчастини для транспорту</p>
          </ItemLink>
          <ItemLink href="#">
            <ImgWrap
              src={robotaImg}
              alt="Рубрика Робота"
              backgroundColor="rgb(255, 246, 217)"
            />
            <p>Робота</p>
          </ItemLink>
          <ItemLink href="#">
            <ImgWrap
              src={tvarynyImg}
              alt="Рубрика Тварини"
              backgroundColor="rgb(206, 221, 255)"
            />
            <p>Тварини</p>
          </ItemLink>
          <ItemLink href="#">
            <ImgWrap
              src={dimISadImg}
              alt="Рубрика Дім і сад"
              backgroundColor="rgb(200, 248, 246)"
            />
            <p>Дім і сад</p>
          </ItemLink>
          <ItemLink href="#">
            <ImgWrap
              src={elektronikaImg}
              alt="Рубрика Електроніка"
              backgroundColor="rgb(255, 214, 201)"
            />
            <p>Електроніка</p>
          </ItemLink>
          <ItemLink href="#">
            <ImgWrap
              src={biznesTaPosluhyImg}
              alt="Рубрика Бізнес та послуги"
              backgroundColor="rgb(255, 206, 50)"
            />
            <p>Бізнес та послуги</p>
          </ItemLink>
          <ItemLink href="#">
            <ImgWrap
              src={modaIStylImg}
              alt="Рубрика Мода і стиль"
              backgroundColor="rgb(206, 221, 255)"
            />
            <p>Мода і стиль</p>
          </ItemLink>
          <ItemLink href="#">
            <ImgWrap
              src={hobiImg}
              alt="Рубрика Хобі, відпочинок і спорт"
              backgroundColor="rgb(200, 248, 246)"
            />
            <p>Хобі, відпочинок і спорт</p>
          </ItemLink>
        </CategoriesList>
      </Wrapper>
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
