import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Li = styled.li`
  list-style-type: none;
  font-size: 20px;
  margin-top: 30px;
`;

export const A = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const NavLinkAdverts = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px 10px 5px 10px;
  text-decoration: none;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
  color: ${props => props.theme.mainGreenColor};
  font-weight: 600;
  font-size: 14px;
  border: 5px solid #fff;
  transition: all 200ms linear;
  height: 25px;
  
  &:hover {
    background: ${props => props.theme.mainGreenColor};
    color: #fff;
    transition: all 200ms linear;
  }
`;
