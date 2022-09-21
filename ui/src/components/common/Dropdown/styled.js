import styled from 'styled-components';

export const Select = styled.div`
  padding: 19px 15px;
  border: none;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-width: 200px;
  color: ${props => props.theme.mainGreenColor};
  background-color: white;
  
  svg {
    transition: .2s ease-in-out all;
  }
`;

export const Value = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  color: ${props => props.theme.mainGreenColor};
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  width: 100%;
  color: ${props => props.theme.mainGreenColor};
  z-index: 10;
  ${props => props.isMobile && 'overflow-y: scroll;max-height: 300px;'}
`;

export const Option = styled.li`
  padding: 10px;
  background: white;
  color: ${props => props.theme.mainGreenColor};

  &:hover {
    background: ${props => props.theme.mainGreenColor};
    color: white;
  }
`;
