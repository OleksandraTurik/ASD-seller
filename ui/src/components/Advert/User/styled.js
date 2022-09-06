import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 215px;
  width: 390px;
  border-radius: 5px;
  padding: 24px;

  & h1 {
    align-self: flex-start;
    font-size: 14px;
    text-transform: uppercase;
    color: #002F34;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  & h2 {
    font-size: 20px;
    color: #002F34;
  }
`;

export const RegistrationDate = styled.div`
  display: flex;
  color: #7F9799;
  font-size: 14px;

  & p {
    margin-left: 5px;
    font-weight: 800;
    color: #5b6f71;
  }
`;

export const UserIcon = styled.img`
  width: 45px;
`;

export const Button = styled.button`
  width: 165px;
  min-height: 48px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  background-color: transparent;
  border: 2px solid rgb(0, 47, 52);
  border-radius: 4px;
  color: rgb(0, 47, 52);
  margin: 0px 4px 0px 0px;
  padding: 3px 8px;

  &:hover {
    background-color: rgb(0, 47, 52);
    border: 2px solid #fff;
    color: #fff;
  }
`;

export const AllAdvertsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  color: #002F34;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
