import styled from 'styled-components';

export const Option = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  ${(props) => props.isSelected
    ? 'background: #002f34;color: white;svg{filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(347deg) brightness(104%) contrast(104%);}'
    : '&:hover{background: #002f34;color: white;svg{filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(347deg) brightness(104%) contrast(104%);}}'};

  svg {
    rotate: 90deg;
  }
`;

export const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  position: absolute;
  left: 100%;
  top: 0;
`;

export const Child = styled.div`
  padding: 10px;
  color: black;
  &:hover {
    background: #002f34;
    color: white;
  }
`;
