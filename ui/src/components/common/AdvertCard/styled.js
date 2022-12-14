import styled from 'styled-components';
import LikeButton from 'components/common/LikeButton';

export const Card = styled.article`
  height: 340px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px;
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  width: 310px;
  
  @media (min-width: 1250px) {
    width: calc(25% - 32px);
  }
`;

export const ImgInCard = styled.img`
  max-height: 160px;
  height: 100%;
  width: 100%;
  object-fit: contain;
  background: #f2f2f2;
`;

export const NameOfProduct = styled.h4`
  margin: 0;
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
  word-break: break-word;

  &:hover {
    background-color: ${props => props.theme.mainGreenColor};
    color: white;
  }
`;

export const Info = styled.div`
  display: flex;
  align-self: flex-start;
  padding: 0;
  list-style: none;
  font-size: 14px;
  color: #406367;
  line-height: 1.17;
  margin-bottom: 10px;
`;

export const Price = styled.div`
  display: flex;
  align-self: flex-start;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 5px;
  padding-right: 40px;
  color: ${props => props.theme.mainGreenColor};
`;

export const ToFavoriteButton = styled(LikeButton)`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 10px;
  right: 16px;
  cursor: pointer;

  &:hover svg {
    fill: #002f34;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 450px) {
    height: 200px;
    width: 100%;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;
