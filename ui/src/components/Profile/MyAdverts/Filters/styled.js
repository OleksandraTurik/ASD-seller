import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  border-bottom: 1px solid #d9dfe0;

  & span {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  color: #849698;
  font-weight: bold;

  & svg {
    width: 20px;
    height: 100%;
    & path {
      fill: #849698;
    }
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
  height: 26px;
  padding: 10px 40px;
  border-radius: ${({ primary }) => primary ? '5px 0 0 5px' : '5px'};

  &::placeholder {
    font-size: 16px;
    color: #849698;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-right: 8px;
`;

export const DropDownBtn = styled.button`
  width: 56px;
  height: 48px;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;

export const Test = styled.div`
  width: 284px;
  color: #002F34;
  font-size: 16px;

  .css-319lph-ValueContainer {
    height: 46px;
  }

  .css-1s2u09g-control {
    border-color: transparent;
  }
`;

export const Button = styled.button`
  border: none;
  text-align: left;
  background: #fff;
  border: 1px solid #fff;
  width: 282px;
  height: 48px;
  padding: 13px 48px;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
  color: #849698;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;
