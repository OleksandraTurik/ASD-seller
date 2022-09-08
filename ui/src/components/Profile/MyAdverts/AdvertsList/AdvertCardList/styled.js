import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  padding: 15px;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  margin: 5px 0;
`;

export const EditLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  height: 40px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  background-color: transparent;
  border: 2px solid #102e33;
  border-radius: 4px;
  color: #102e33;
  padding: 6px 22px;

  &:hover {
    background-color: #102e33;
    color: #fff;
  }
  `;

export const TopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;

  & span {
    align-self: flex-start;
    font-size: 12px;
    color: rgb(64, 99, 103);
  }
`;

export const ListWrap = styled.div`
  & ul {
    display: flex;
    font-size: 14px;
    color: rgb(64, 99, 103);

    & li {
      margin-left: 25px;

      &:first-child {
        margin-left: 0;
        list-style: none;
      }
    }
  }
`;

export const LocationWrap = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin-left: 5px;
    font-size: 14px;
    color: rgb(64, 99, 103);
  }
`;

export const DataWrap = styled.div`
  display: flex;
  align-items: center;

  & span {
    margin-left: 5px;
    font-size: 14px;
    color: rgb(64, 99, 103);
  }
`;

export const AdvertBodyWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 110px;
  align-items: flex-start;
`;

export const AdvertHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 6px 0 8px 0;
  height: 25px;

  & span {
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    color: rgb(0, 47, 52);
    margin: 0px 8px 0px 0px;
    white-space: nowrap;
  }
`;

export const AdvertTitleLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: rgb(0, 47, 52);

  &:hover {
    border-bottom: 2px solid rgb(0, 47, 52);
  }
`;

export const AdvertInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(216, 223, 224);
  margin-left: 16px;
`;

export const ImgInCard = styled.img`
  height: 156px;
  object-fit: cover;
`;
