import styled from 'styled-components';

export const Container = styled.div`
  max-width: calc(100% - 40px);
  width: 1250px;
  margin-top: 20px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 5px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
`;

export const P = styled.p`
  display: flex;
  align-self: center;
  margin: 0 0 0 25px;
  color: ${props => props.email ? '#ff7f0b' : '#003034'};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
`;
