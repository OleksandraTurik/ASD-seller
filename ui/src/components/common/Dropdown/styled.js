import styled from 'styled-components';

export const Select = styled.div`
  background: white;
  padding: 19px 15px;
  border: none;
  font-size: 16px;
  width: 230px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Value = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  width: 100%;
`;

export const Option = styled.div`
  padding: 19px 15px;

  &:hover {
    background: #002f34;
    color: white;
  }
`;
