import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 175px;
  width: 390px;
  border-radius: 5px;
  padding: 24px;
  margin-bottom: 15px;

  @media screen and (max-width: 1280px) {
    height: 150px;
    width: 388px;
    padding: 15px;
  }

  @media screen and (max-width: 1040px) {
    width: 358px;
  }

  @media screen and (max-width: 870px) {
    width: 96%;
  }

  @media screen and (max-width: 600px) {
    height: 140px;
    width: 94%;
  }

  @media screen and (max-width: 480px) {
    height: 125px;
  }

  @media screen and (max-width: 320px) {
    width: 88%;
  }

  & h1 {
    align-self: flex-start;
    font-size: 14px;
    text-transform: uppercase;
    color: ${props => props.theme.mainGreenColor};

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }

    @media screen and (max-width: 320px) {
      font-size: 11px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const UserInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;

  & h2 {
    font-size: 20px;
    color: ${props => props.theme.mainGreenColor};

    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
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

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

export const UserIcon = styled.img`
  width: 45px;

  @media screen and (max-width: 1280px) {
    width: 42px;
  }

  @media screen and (max-width: 768px) {
    width: 38px;
  }

  @media screen and (max-width: 600px) {
    width: 34px;
  }

  @media screen and (max-width: 320px) {
    width: 30px;
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
    width: 150px;
    height: 40px;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    width: 140px;
    height: 36px;
    font-size: 12px;
  }

  @media screen and (max-width: 320px) {
    width: 125px;
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
      width: 14px;
      height: 14px;
    }
  }
`;
