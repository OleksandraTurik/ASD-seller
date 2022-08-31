import { AddPhotoButton } from 'components/common/Button/styled';
import React from 'react';
import MainContainer from '../MainContainer';
import SubContainer from '../SubContainer';
import {
  AddPhotoAndRulesStyle,
  AddPhotoStyle,
  ExplanationStyle,
  ExplanationBannerStyle,
  RulesStyle,
  P,
  AddContainer,
  PhotoContainer,
  NamePhoto,
  HeaderRules,
  Ul,
  Li,
  ExplanationText,
} from './styled';

const LogoAndBanner = () => (
  <MainContainer>
    <SubContainer>
      <AddPhotoAndRulesStyle>
        <AddContainer>
          <PhotoContainer>
            <NamePhoto>Логотип</NamePhoto>
            <AddPhotoStyle>
              <AddPhotoButton>+</AddPhotoButton>
              <ExplanationStyle>
                <P>Рекомендований розмір Лого: 200x200px</P>
              </ExplanationStyle>
            </AddPhotoStyle>
          </PhotoContainer>
          <PhotoContainer>
            <NamePhoto>Банер</NamePhoto>
            <AddPhotoStyle>
              <AddPhotoButton>+</AddPhotoButton>
              <ExplanationBannerStyle>
                <P>Завантажте фото не менше 1366 x 210 пікселів. Ви також можете завантажити фото більшого розміру і відредагувати його.</P>
              </ExplanationBannerStyle>
            </AddPhotoStyle>
          </PhotoContainer>
        </AddContainer>
        <RulesStyle>
          <HeaderRules>Ваше лого буде розміщуватись:</HeaderRules>
          <Ul>
            <Li>
              <ExplanationText>на бізнес-сторінці OLX (якщо ви її маєте)</ExplanationText>
            </Li>
            <Li>
              <ExplanationText>на сторінці оголошення (якщо ви замовили послугу розміщення лого у вакансіях або маєте активний пакет оголошень)</ExplanationText>
            </Li>
            <Li>
              <ExplanationText>в результатах пошуку вакансій (якщо ви замовили таку послугу або маєте пакет оголошень Преміум у розділі &quot;Робота&quot;)</ExplanationText>
            </Li>
          </Ul>
        </RulesStyle>
      </AddPhotoAndRulesStyle>
    </SubContainer>
  </MainContainer>
);

export default LogoAndBanner;
