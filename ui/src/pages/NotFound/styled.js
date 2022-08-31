import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 90vh;
  padding: 16px;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #fff;

  & h1 {
    height: 48px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }

  & p {
    font-size: 16px;
    text-align: center;
    color: #406367;
    margin: 16px 0;
  }
`;

export const Icon = styled.img`
  width: 300px;
  margin: 30px 0 15px 0;
`;

export const GoHomeLink = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 180px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  border: 5px solid #102e33;
  background-color: #102e33;
  border-radius: 4px;
  color: #fff;
  padding: 3px 22px;

  &:hover {
    background-color: transparent;
    border: 5px solid #102e33;
    color: #102e33;
  }
`;
