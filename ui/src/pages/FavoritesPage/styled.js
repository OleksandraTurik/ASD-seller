import styled from 'styled-components';

export const TitleArea = styled.header`
  background-color: white;
`;

export const Wrapper = styled.div`
  max-width: 1238px;
  margin: 0 auto;
`;

export const Title = styled.h2`
    padding: 55px 0 40px;
    min-height: 38px;
    display: flex;
    align-items: center;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.06;
    color: ${props => props.theme.mainGreenColor};
    margin-left: 20px;
`;

export const AdvertsArea = styled.div`
  background-color: ${props => props.theme.greyBackground};
  padding: 30px 0 100px;
`;

export const DontHaveFavoritesAdvBlock = styled.div`
  margin: 140px 0 157px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DontHaveFavoritesAdvTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.1;
  padding: 0 !important;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const DontHaveFavoritesAdvText = styled.p`
  font-size: 17px;
  line-height: 1.25;
  color: #406367;
  text-align: center;
`;
