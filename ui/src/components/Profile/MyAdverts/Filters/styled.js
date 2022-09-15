import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-bottom: 1px solid #d9dfe0;
  justify-content: space-evenly;

  & span {
    font-size: 14px;
    margin-bottom: 20px;

    @media screen and (max-width: 1280px) {
      font-size: 13px;
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }

    @media screen and (max-width: 600px) {
      font-size: 11px;
      margin-bottom: 10px;
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 15px;
`;

export const SearchInput = styled.input`
  border: none;
  background: #fff;
  border: 1px solid #fff;
  width: 200px;
  height: 24px;
  padding: 10px 40px;
  border-radius: 5px;
  color: #002F34;

  @media screen and (max-width: 1280px) {
    height: 22px;
  }

  @media screen and (max-width: 768px) {
    width: 165px;
    height: 26px;
    padding: 8px 10px 8px 30px;
  }

  &::placeholder {
    padding-left: 10px;
    font-size: 16px;
    color: #849698;

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin: 10px;
`;

export const DropDownBtn = styled.button`
  width: 56px;
  height: 48px;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

export const WrapSelect = styled.div`
  width: 284px;
  color: #002F34;
  font-size: 16px;

  @media screen and (max-width: 1280px) {
    width: 254px;
  }

  @media screen and (max-width: 768px) {
    width: 224px;
  }

  @media screen and (max-width: 600px) {
    width: 204px;
  }

  .css-319lph-ValueContainer {
    height: 46px;

    @media screen and (max-width: 1280px) {
      height: 44px;
    }
  }

  .css-1s2u09g-control {
    border-color: transparent;
  }

  .css-1jwi8f4-singleValue {
    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  .css-14el2xx-placeholder {
    color: #849698;

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  .css-6j8wv5-Input {
    color: #002F34;
  }
`;
