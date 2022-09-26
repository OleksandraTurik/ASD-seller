import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 25px 40px 50px 40px;
  z-index: 1000;
  max-width: 1000px;
  width: 100%;
  overflow: scroll;

  @media (max-width: 1100px) {
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }

  &::-webkit-scrollbar {
  display: none;
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  position: relative;
  top: 25px;
  right: 15px;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0,0,0, .2);
  backdrop-filter: blur(2px);
  z-index: 1000;
`;
