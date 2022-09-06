import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 160px;
  width: 390px;
  border-radius: 5px;
  padding: 24px;

  & h1 {
    align-self: flex-start;
    font-size: 14px;
    text-transform: uppercase;
    color: #002F34;
  }
`;

export const LocationWrap = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-start;
  justify-content: space-evenly;
`;

export const LocationInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  & h2 {
    font-size: 20px;
    color: #002F34;
  }
`;

export const MapImage = styled.img`
  width: 145px;
  height: 105px;
  border-radius: 10px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & p {
    font-size: 16px;
    color: rgb(0, 47, 52);
    margin: 0px;
    font-weight: 700;
    line-height: 18px;
    word-break: break-word;
  }

  & span {
    color: #000;
    font-size: 16px;
  }
`;
