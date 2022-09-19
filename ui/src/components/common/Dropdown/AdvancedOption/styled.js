import styled from 'styled-components';

export const Option = styled.div`
  position: ${(props) => !props.isMobile && 'relative'};
  display: flex;
  flex-direction: column;
  ${(props) => props.isSelected
    ? 'background: #002f34;color: white;svg{filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(347deg) brightness(104%) contrast(104%);}'
    : '&:hover{background: #002f34;color: white;svg{filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(347deg) brightness(104%) contrast(104%);}}'};

  svg {
    rotate: ${(props) => {
    if (props.isMobile) {
      if (props.isSelected) return '0deg';
      return '180deg';
    } return '90deg';
  }}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const ChildrenWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  background: ${props => props.isMobile ? '#f1f1f1' : 'white'};
  margin-top: ${(props) => (props.isMobile ? '20px' : '0')};

  ${(props) => (!props.isMobile ? 'position: absolute;left: 100%;top: 0;' : '& > li {width: calc(100% - 20px);}')}
`;

export const Child = styled.li`
  padding: 10px;
  color: black;
  width: 150px;
  &:hover {
    background: #002f34;
    color: white;
  }
`;
