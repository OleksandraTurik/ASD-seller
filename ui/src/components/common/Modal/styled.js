import styled from 'styled-components';

export const Container = styled.div`
  height: 108vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  /* align-items: center; */
  justify-content: end;
  opacity: ${props => props.active ? 1 : 0};
  pointer-events: ${props => props.active ? 'all' : 'none'};
  transition: 0.5s;
`;
export const Content = styled.div`
  margin-top: 68px;
  padding: 20px;
  /* transform: ${props => props.active ? 'scale(1)' : 'scale(0.5)'}; */
  transition: 0.4s transform;
  z-index: 1;
  background: ${props => props.theme.mainGreenColor};
`;
