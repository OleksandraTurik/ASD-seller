import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #fff;
  border-radius: 4px;
  margin: 10px 0;
`;

export const EditLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  height: 40px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  background-color: transparent;
  border: 2px solid #102e33;
  border-radius: 4px;
  color: #102e33;
  padding: 6px 22px;

  @media screen and (max-width: 1280px) {
    height: 35px;
    font-size: 12px;
    padding: 6px 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
  }

  @media screen and (max-width: 600px) {
    height: 30px;
    font-size: 10px;
    padding: 6px 18px;
  }

  @media screen and (max-width: 320px) {
    font-size: 9px;
  }

  &:hover {
    background-color: #102e33;
    color: #fff;
  }
  `;

export const TopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
  flex-direction: column;
  }
`;

export const BottomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const ListWrap = styled.div`
  & ul {
    display: flex;
    font-size: 14px;
    color: #406367;

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
      flex-direction: column;
    }

    & li {
      margin-left: 25px;
      list-style: disc;

      @media screen and (max-width: 320px) {
        margin-left: 12px;
      }

      &:first-child {
        margin-left: 0;
        list-style: none;
      }

      &:last-child {
        @media screen and (max-width: 320px) {
          margin-bottom: 5px;
        }
      }
    }
  }
`;

export const LocationWrap = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin-left: 5px;
    font-size: 14px;
    color: #406367;

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
  }

  & svg {
    @media screen and (max-width: 1280px) {
      width: 14px;
      height: 14px;
    }

    @media screen and (max-width: 768px) {
      width: 12px;
      height: 12px;
    }

    @media screen and (max-width: 320px) {
      width: 10px;
      height: 10px;
    }
  }
`;

export const DataWrap = styled.div`
  display: flex;
  align-items: center;

  & span {
    margin-left: 5px;
    font-size: 14px;
    color: #406367;

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
  }

  & svg {
    @media screen and (max-width: 1280px) {
      width: 14px;
      height: 14px;
    }

    @media screen and (max-width: 768px) {
      width: 12px;
      height: 12px;
    }

    @media screen and (max-width: 320px) {
      width: 10px;
      height: 10px;
    }
  }
`;

export const AdvertBodyWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75px;
  align-items: flex-start;
  margin-bottom: 10px;

  @media screen and (max-width: 1280px) {
    height: 60px;
  }

  @media screen and (max-width: 600px) {
    height: 55px;
  }
`;

export const AdvertHeaderWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 6px 0 8px 0;
  height: auto;

  & span {
    font-size: 20px;
    font-weight: 500;
    color: #002f34;
    margin: 0px 8px 0px 0px;
    white-space: nowrap;

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }

    @media screen and (max-width: 600px) {
      font-size: 11px;
      margin-top: 5px;
    }

    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AdvertTitleLink = styled(Link)`
  width: 85%;
  font-size: 20px;
  font-weight: 700;
  color: #002f34;

  @media screen and (max-width: 1280px) {
    font-size: 14px;
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 11px;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }

  &:hover {
    border-bottom: 1px solid #002f34;
  }
`;

export const AdvertInfoWrap = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d8dfe0;
  margin-left: 16px;

  @media screen and (max-width: 768px) {
    height: 160px;
  }

  @media screen and (max-width: 600px) {
    height: 140px;
  }
`;

export const ImgInCard = styled.img`
  height: 156px;
  max-width: 100%;
  object-fit: cover;
`;
