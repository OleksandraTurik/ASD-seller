import styled from 'styled-components';

export const ButtonStyle = styled.button`
  cursor: pointer;
  background: #fff;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  color: #003034;
  font-weight: 600;
  font-size: 14px;
  border: 5px solid #fff;
  transition: all 200ms linear;
  height: 45px;
  &:hover {
    background: #003034;
    color: #fff;
    transition: all 200ms linear;
  }
`;

export const SubCategoryButton = styled.button`
  background: none;
  color: #003034;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;
