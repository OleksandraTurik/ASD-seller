import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.mainGreenColor};
  text-align: center;
  padding: 55px 0;
`;

export const Wrapper = styled.div`
  max-width: 1238px;
  margin: 0 auto;
  padding-bottom: 45px;
`;

export const CategoriesListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AdvertsList = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1250px) {
    justify-content: center;
  }
`;

export const LatestAdsSection = styled.section`
  background-color: ${props => props.theme.greyBackground};
  padding-bottom: 55px;
`;
