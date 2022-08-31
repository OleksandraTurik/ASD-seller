import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 16px;
  background: rgb(255, 255, 255);
  border-radius: 4px;
`;

export const EditBtn = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 40px;
  position: relative;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: 2px solid rgb(0, 47, 52);
  border-radius: 4px;
  padding: 6px 22px;
  color: rgb(0, 47, 52);

  &.active {
    border: 2px solid rgb(0, 47, 52);
  }
`;

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
  margin-left: 15px;
  margin-top: 20px;
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
  color: #002f34;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: #002f34;
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
  color: #002f34;
`;

export const ToFavoriteButton = styled.img`
  position: absolute;
  bottom: 25px;
  right: 20px;
  cursor: pointer;
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }
`;
