import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 56px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 25px;
  padding: 48px 0 0 125px;

  @media screen and (max-width: 1280px) {
    font-size: 26px;
    padding: 38px 0 0 100px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    padding: 28px 0 0 85px;
  }

  @media screen and (max-width: 600px) {
    font-size: 21px;
    padding: 26px 0 0 65px;
  }

  @media screen and (max-width: 480px) {
    padding: 18px 0 0 45px;
  }

  @media screen and (max-width: 320px) {
    font-size: 18px;
    padding: 18px 0 0 40px;
  }
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
