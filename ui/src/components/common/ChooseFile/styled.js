import styled from 'styled-components';

export const ChooseFileStyle = styled.input.attrs({ type: 'file' })`
  width: 190px;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    content: '+';
    color: #fff;
    display: inline-block;
    background: #003034;
    border: 1px solid #999;
    border-radius: 3px;
    padding: 10px 40px 10px 40px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    font-size: 120px;
  }
  &:hover::before {
    border-color: black;
  }
  &:active {
    outline: 0;
  }
  &:active::before {
    background: #003034; 
  }
`;
