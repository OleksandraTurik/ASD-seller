import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  max-height: 800px;
  border-radius: 5px;
  margin: 15px 0;
  padding: 15px;

  & span {
    font-size: 32px;
    color: #002f34;

    @media screen and (max-width: 768px) {
      font-size: 26px;
    }

    @media screen and (max-width: 480px) {
      font-size: 21px;
    }

    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 15px 0 0 0;
  }

  & h2 {
    margin-top: 10px;
    font-size: 40px;
    color: ${props => props.theme.mainGreenColor};

    @media screen and (max-width: 1280px) {
      font-size: 34px;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    @media screen and (max-width: 480px) {
      font-size: 24px;
    }

    @media screen and (max-width: 320px) {
      font-size: 19px;
    }
  }

  & h3 {
    color: ${props => props.theme.mainGreenColor};
    text-transform: uppercase;
    font-size: 24px;
    margin: 12px 0 8px 0;

    @media screen and (max-width: 768px) {
      font-size: 21px;
    }

    @media screen and (max-width: 480px) {
      font-size: 18px;
    }

    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }

  & div {
    display: wrap;
    overflow-wrap: break-word;
    font-size: 16px;
    color: ${props => props.theme.mainGreenColor};

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  & span {
    font-size: 12px;
    color: #406367;

    @media screen and (max-width: 768px) {
      font-size: 11px;
    }

    @media screen and (max-width: 480px) {
      font-size: 10px;
    }

    @media screen and (max-width: 320px) {
      font-size: 9px;
    }
  }
`;

export const Line = styled.div`
  margin: 15px;
  border-bottom: 1px solid #7f9799;
`;

export const FavoriteBtn = styled.button`
  background-color: transparent;
  border: none;
  bottom: 12px;
  right: 20px;
  cursor: pointer;

  &:hover svg { 
    fill: #002f34; 
  } 

  & svg {
    @media screen and (max-width: 1280px) {
      width: 22px;
      height: 22px;
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
