import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1238px;
  margin: 0 auto;
  border: 1px solid #efefef;
  color: #003034;
  padding: 20px; 
  gap: 30px;
`;

export const SubContainer = styled.div`
  font-size: 18px;
`;

export const ButtonContainer = styled.div`
  margin: 20px 0 20px 20px;
`;

export const NameButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
`;

export const P = styled.p`
  margin-left: 5px;
`;

export const LinkName = styled(Link)`
  text-decoration: none;
  color: #003034;
`;
