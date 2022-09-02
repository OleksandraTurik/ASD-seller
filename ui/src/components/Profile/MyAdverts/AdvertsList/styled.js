import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2, p {
    color: #102e33;
  }

  & h2 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  & p {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

export const Icon = styled.img`
  width: 180px;
  margin-bottom: 48px;
`;

export const AddAdvertLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0px 8px;
  height: 26px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  background-color: #102e33;
  border: 5px solid #102e33;
  border-radius: 4px;
  color: #fff;
  padding: 3px 22px;

  &:hover {
    background-color: transparent;
    border: 5px solid #102e33;
    color: #102e33;
  }
`;
