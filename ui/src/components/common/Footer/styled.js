import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background: #ccf7ee;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  text-align: center;
`;

export const Logo = styled.p`
  color: #002f32;
  padding: 2% 0px 2% 0px;
  font-size: 40px;
  font-weight: 600;
`;

export const AddInfo = styled.p`
  color: #002f32;
  padding-bottom: 1%;
  width: 30%;
  font-size: 14px;
`;

export const Copy = styled.p`
  color: #002f32;
  padding-bottom: 1%;
  font-size: 12px;
  font-weight: 600;
`;
