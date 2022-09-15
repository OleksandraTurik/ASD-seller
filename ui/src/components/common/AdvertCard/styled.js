import styled from 'styled-components';

export const Card = styled.article`
  height: 380px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  width: calc(25% - 15px);
  float: left;
  margin-left: 8px;
  margin-right: 7px;
  margin-top: 20px;

  @media (max-width: 1250px) {
    width: 310px;
  }
`;

export const ImgInCard = styled.img`
  height: 156px;
  object-fit: cover;
`;

export const NameOfProduct = styled.h4`
  margin: 15px 0;
  margin-bottom: auto;
  font-size: 18px;
  font-style: normal;
  line-height: 1.25;
  color: ${props => props.theme.mainGreenColor};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: ${props => props.theme.mainGreenColor};
    color: white;
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 45px;
  display: flex;
  padding: 0;
  list-style: none;
  font-size: 14px;
  color: #406367;
  line-height: 1.17;
  margin-bottom: 10px;
`;

export const Price = styled.div`
  position: absolute;
  bottom: 15px;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 5px;
  padding-right: 40px;
  color: ${props => props.theme.mainGreenColor};
`;

export const ToFavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 12px;
  right: 20px;
  cursor: pointer;
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }
`;
