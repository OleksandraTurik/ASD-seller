import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.turquoiseColor};
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  text-align: center;
`;

export const Logo = styled.p`
  color: #002f32;
  padding: 25px 0px 25px 0px;
  font-size: 32px;
  font-weight: 600;
`;

export const AddInfo = styled.p`
  color: #002f32;
  padding-bottom: 20px;
  width: 30%;
  font-size: 13px;
`;

export const Copy = styled.p`
  color: #002f32;
  padding-bottom: 20px;
  font-size: 12px;
  font-weight: 600;
`;
