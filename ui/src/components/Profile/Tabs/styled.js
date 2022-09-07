import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding: 48px 0 0 125px;
`;

export const Link = styled(NavLink)`
  color: purple;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: -3px;
  padding: 8px 14px;
  text-decoration: none;
  color: #7F9799;
  
  &:hover,
  &.active {
    text-decoration: none;
    color: ${props => props.theme.mainGreenColor};
  }
  
  &.active {
    border-bottom: 2px solid ${props => props.theme.mainGreenColor};
  }
`;
