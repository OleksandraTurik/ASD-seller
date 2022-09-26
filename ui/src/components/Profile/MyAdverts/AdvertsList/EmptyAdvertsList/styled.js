import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2, p {
    color: #102e33;
  }

  & h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 48px 0 16px 0;

    @media screen and (max-width: 1280px) {
      font-size: 18px;
      margin: 38px 0 14px 0;
    }

    @media screen and (max-width: 768px) {
      font-size: 16px;
      margin: 30px 0 12px 0;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;
      margin: 22px 0 10px 0;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  & p {
    font-size: 16px;
    margin-bottom: 32px;
    text-align: center;

    @media screen and (max-width: 1280px) {
      font-size: 14px;
      margin-bottom: 28px;
    }

    @media screen and (max-width: 768px) {
      font-size: 13px;
      margin-bottom: 24px;
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
      margin-bottom: 21px;
    }

    @media screen and (max-width: 480px) {
      font-size: 11px;
      margin-bottom: 18px;
    }

    @media screen and (max-width: 320px) {
      font-size: 10px;
      margin-bottom: 16px;
    }
  }

  & svg {
    @media screen and (max-width: 1280px) {
      width: 160px;
      height: 160px;
    }

    @media screen and (max-width: 768px) {
      width: 130px;
      height: 130px;
    }

    @media screen and (max-width: 480px) {
      width: 115px;
      height: 115px;
    }
  }
`;

export const AddAdvertLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0px 8px;
  height: 26px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  background-color: #102e33;
  border: 5px solid #102e33;
  border-radius: 4px;
  color: #fff;
  padding: 3px 22px;
  text-align: center;

  @media screen and (max-width: 768px) {
    height: 22px;
    font-size: 12px;
    border: 3px solid #102e33;
    padding: 3px 20px;
  }

  @media screen and (max-width: 480px) {
    height: 20px;
    font-size: 11px;
    padding: 3px 18px;
  }

  @media screen and (max-width: 320px) {
    height: 18px;
    font-size: 10px;
  }

  &:hover {
    background-color: transparent;
    border: 5px solid #102e33;
    color: #102e33;

    @media screen and (max-width: 768px) {
      border: 3px solid #102e33;
    }
  }
`;
