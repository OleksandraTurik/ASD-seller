import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 95%;
`;

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Li = styled.li`
  list-style-type: none;
  font-size: 20px;
  margin-top: 30px;
  width: 70%;
  display: flex;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
  width: 100%;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 44%;
`;

export const P = styled.p`
  margin-left: 10px;
`;
