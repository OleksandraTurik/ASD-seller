import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  max-height: 800px;
  border-radius: 5px;
  margin: 24px 0;
  padding: 24px;

  & span {
    font-size: 32px;
    color: #002f34;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1280px) {
    margin: 15px 0;
    padding: 15px;
  }

  @media screen and (max-width: 480px) {
    margin: 15px 0 0 0;
  }

  & h2 {
    margin-top: 10px;
    font-size: 40px;
    color: ${props => props.theme.mainGreenColor};

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }

    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }

  & h3 {
    color: ${props => props.theme.mainGreenColor};
    text-transform: uppercase;
    font-size: 24px;
    margin: 12px 0 4px 0;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 11px;
    }
  }

  & div {
    display: wrap;
    overflow-wrap: break-word;
    font-size: 16px;
    color: ${props => props.theme.mainGreenColor};

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }

    @media screen and (max-width: 480px) {
      font-size: 11px;
    }

    @media screen and (max-width: 320px) {
      font-size: 9px;
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
      font-size: 8px;
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

  & svg {
    opacity: 0.4;
  }

  &:hover svg {
    opacity: 1;
  }
`;
