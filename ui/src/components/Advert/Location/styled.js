import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 160px;
  width: 390px;
  border-radius: 5px;
  padding: 24px;

  @media screen and (max-width: 768px) {
    height: 130px;
    width: 280px;
    padding: 15px;
  }

  @media screen and (max-width: 480px) {
    height: 110px;
    width: 100%;
    padding: 10px;
  }

  @media screen and (max-width: 320px) {
    height: 90px;
  }

  & h1 {
    font-size: 14px;
    align-self: flex-start;
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

export const LocationWrap = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-start;
  justify-content: space-evenly;

  @media screen and (max-width: 480px) {
    width: 40%;
  }
`;

export const LocationInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  & p {
    font-size: 16px;
    color: ${props => props.theme.mainGreenColor};
    margin: 0;
    font-weight: 700;

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

  & span {
    color: #000;
    font-size: 16px;

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

export const MapImage = styled.img`
  width: 145px;
  height: 105px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 115px;
    height: 75px;
    border-radius: 8px;
  }

  @media screen and (max-width: 320px) {
    width: 90px;
    height: 55px;
    border-radius: 5px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
