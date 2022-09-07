import styled from 'styled-components';

export const ButtonStyle = styled.button`
  cursor: pointer;
  background: #003034;
  padding: 5px 50px 5px 50px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  border: 5px solid #003034;
  transition: all 200ms linear;
  height: 45px; 
  &:hover {
    background: #fff;
    color: #003034;
    transition: all 200ms linear;
  }
`;

export const ButtonAdvertCard = styled.button`
  background: none;
  border: none;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
