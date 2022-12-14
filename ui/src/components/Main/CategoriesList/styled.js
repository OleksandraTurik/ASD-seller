import styled from 'styled-components';

export const ItemLink = styled.button`
  display: flex;
  gap: 23px;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #002f34;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background: none;

  & p {
    padding: 1px;
    width: 120px;
  }

  &:hover p {
    background-color: ${props => props.theme.mainGreenColor};
    color: white;
  }
  &:nth-child(1) img {
    background-color: #f2f3f5;
  }
  &:nth-child(2) img {
    background-color: #3a77ff;
  }
  &:nth-child(3) img {
    background-color: #23e5db;
  }
  &:nth-child(4) img {
    background-color: #ff5636;
  }
  &:nth-child(5) img {
    background-color: #fff6d9;
  }
  &:nth-child(6) img {
    background-color: #ceddff;
  }
  &:nth-child(7) img {
    background-color: #c8f8f6;
  }
  &:nth-child(8) img {
    background-color: #ffd6c9;
  }
  &:nth-child(9) img {
    background-color: #ffce32;
  }
  &:nth-child(10) img {
    background-color: #ceddff;
  }
  &:nth-child(11) img {
    background-color: #c8f8f6;
  }
  &:nth-child(12) img {
    background-color: #ffd6c9;
  }
`;

export const ImgWrap = styled.img`
  max-width: 88px;
  height: 88px;
  border-radius: 50%;
  align-self: center;
`;
