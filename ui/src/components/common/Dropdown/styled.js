import styled from 'styled-components';

export const Select = styled.div`
  background: white;
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
`;

export const Value = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  width: 100%;
  z-index: 10;
  ${props => props.isMobile && 'overflow-y: scroll;max-height: 300px;'}
`;

export const Option = styled.li`
  padding: 10px;
  background: white;

  &:hover {
    background: #002f34;
    color: white;
  }
`;
