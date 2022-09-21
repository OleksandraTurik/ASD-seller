import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  justify-content: center;
  gap: 16px;
`;

export const AdvertsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1250px;
  justify-content: center;
  gap: 16px;
`;

export const LatestAdsSection = styled.section`
  background-color: ${props => props.theme.greyBackground};
  padding-bottom: 55px;
  display: flex;
  flex-direction: column;
`;

export const ShowMoreButton = styled(Link)`
  background: ${props => props.theme.mainGreenColor};
  border-radius: 5px;
  padding: 15px 25px;
  border: 5px solid ${props => props.theme.mainGreenColor};
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    background: white;
    color: ${props => props.theme.mainGreenColor};
  }
`;
