import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: end;
  opacity: ${props => props.active ? 1 : 0};
  pointer-events: ${props => props.active ? 'all' : 'none'};
  transition: 0.5s;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  transform: scale(1);
  transition: 0.4s transform;
  background: ${props => props.theme.mainGreenColor};
`;
