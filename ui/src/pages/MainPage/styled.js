import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 24px;
  color: #002f34;
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

export const ItemLink = styled.button`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #002f34;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  margin-left: 16px;
  margin-bottom: 50px;
  border: none;
  background: none;

  & p {
    padding: 1px;
    margin-top: 23px;
  }

  &:hover p {
    background-color: #002f34;
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
  background-color: #f2f4f5;
  padding-bottom: 55px;
`;

export const P = styled.p``;
