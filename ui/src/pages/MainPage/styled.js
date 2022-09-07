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
  width: 1238px;
  margin: 0 auto;
  padding-bottom: 45px;
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemLink = styled.a`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${props => props.theme.mainGreenColor};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  margin-left: 16px;
  margin-bottom: 50px;
  
  & p {
    padding: 1px;
    margin-top: 23px;
  }

  &:hover p {
    background-color: ${props => props.theme.mainGreenColor};
    color: white;
  }
`;

export const ImgWrap = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-self: center;
`;

export const LatestAdsSection = styled.section`
  background-color: ${props => props.theme.greyBackground};
  padding-bottom: 55px;
`;
