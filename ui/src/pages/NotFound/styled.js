import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 90vh;
  padding: 16px;
`;

export const Title = styled.h1`
  height: 90vh;
  padding: 16px;
  margin-top: 20px;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  & h1 {
    height: 48px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;

    @media screen and (max-width: 768px) {
      height: 35px;
      font-size: 16px;
    }

    @media screen and (max-width: 480px) {
      height: 30px;
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      height: 25px;
      font-size: 12px;
    }
  }
`;

export const Icon = styled.img`
  width: 300px;
  margin: 30px 0 15px 0;

  @media screen and (max-width: 768px) {
    width: 250px;
    margin: 20px 0 15px 0;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    margin: 15px 0 15px 0;
  }

  @media screen and (max-width: 320px) {
    width: 150px;
    margin: 10px 0 15px 0;
  }
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

    @media screen and (max-width: 768px) {
      border: 3px solid #102e33;
    }
  }

  @media screen and (max-width: 768px) {
    height: 27px;
    width: 150px;
    font-size: 12px;
    border: 3px solid #102e33;
    padding: 3px 20px;
  }

  @media screen and (max-width: 480px) {
    height: 24px;
    width: 140px;
    font-size: 11px;
    padding: 3px 18px;
  }

  @media screen and (max-width: 320px) {
    height: 22px;
    width: 110px;
    font-size: 10px;
    padding: 3px 16px;
  }
`;
