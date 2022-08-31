import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 90vh;
  padding: 16px;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #fff;

  & h1 {
    height: 48px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }

  & p {
    font-size: 16px;
    text-align: center;
    color: #406367;
    margin: 16px 0;
  }
`;

export const Icon = styled.img`
  width: 300px;
  margin: 30px 0 15px 0;
`;

export const Button = styled.button`
  width: 232px;
  height: 48px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background-color: #002f34;
  cursor: pointer;
`;
