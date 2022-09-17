import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 150px;
  width: 100%;
  border-radius: 5px;
  padding: 24px;

  @media screen and (max-width: 1280px) {
    height: 135px;
    width: 100%;
    padding: 15px;
  }

  @media screen and (max-width: 768px) {
    height: 120px;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 110px;
    width: 98%;
  }

  @media screen and (max-width: 480px) {
    height: 105px;
    width: 95%;
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

    @media screen and (max-width: 320px) {
      font-size: 11px;
    }
  }
`;

export const LocationWrap = styled.div`
  width: 60%;
  display: flex;
  align-self: flex-start;
  justify-content: space-evenly;

  @media screen and (max-width: 1280px) {
    width: 50%;
  }

  @media screen and (max-width: 320px) {
    width: 60%;
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
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  & span {
    color: #000;
    font-size: 16px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }
`;

export const MapImage = styled.img`
  width: 145px;
  height: 105px;
  border-radius: 10px;

  @media screen and (max-width: 1280px) {
    width: 120px;
    height: 85px;
  }

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
