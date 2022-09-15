import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 215px;
  width: 390px;
  border-radius: 5px;
  padding: 24px;
  margin-bottom: 24px;

  @media screen and (max-width: 1280px) {
    height: 150px;
    width: 345px;
    padding: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 280px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 600px) {
    height: 130px;
    width: 100%;
    padding: 10px;
  }

  & h1 {
    align-self: flex-start;
    font-size: 14px;
    text-transform: uppercase;
    color: ${props => props.theme.mainGreenColor};

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }

    @media screen and (max-width: 480px) {
      font-size: 11px;
    }

    @media screen and (max-width: 320px) {
      font-size: 10px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const UserInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    margin-left: 15px;
  }

  & h2 {
    font-size: 20px;
    color: ${props => props.theme.mainGreenColor};

    @media screen and (max-width: 1280px) {
      font-size: 16px;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }

    @media screen and (max-width: 320px) {
      font-size: 11px;
    }
  }
`;

export const RegistrationDate = styled.div`
  display: flex;
  align-items: center;
  color: #7F9799;
  font-size: 14px;

  & p {
    margin-left: 5px;
    font-weight: 800;
    color: #5b6f71;
  }

  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 9px;
  }
`;

export const UserIcon = styled.img`
  width: 45px;

  @media screen and (max-width: 1280px) {
    width: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 34px;
  }

  @media screen and (max-width: 600px) {
    width: 29px;
  }

  @media screen and (max-width: 320px) {
    width: 25px;
  }
`;

export const Button = styled.button`
  width: 165px;
  height: 48px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  background-color: transparent;
  border: 2px solid ${props => props.theme.mainGreenColor};
  border-radius: 4px;
  color: ${props => props.theme.mainGreenColor};
  padding: 3px 8px;

  @media screen and (max-width: 1280px) {
    width: 130px;
    height: 36px;
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    width: 140px;
    height: 33px;
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    width: 120px;
    height: 30px;
    font-size: 10px;
  }

  &:hover {
    background-color: ${props => props.theme.mainGreenColor};
    border: 2px solid #fff;
    color: #fff;
  }
`;

export const AllAdvertsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${props => props.theme.mainGreenColor};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }

  &:hover {
    text-decoration: underline;
  }

  & svg {
    @media screen and (max-width: 1280px) {
      width: 20px;
      height: 20px;
    }

    @media screen and (max-width: 768px) {
      width: 18px;
      height: 18px;
    }

    @media screen and (max-width: 480px) {
      width: 16px;
      height: 16px;
    }

    @media screen and (max-width: 320px) {
      width: 13px;
      height: 13px;
    }
  }
`;
