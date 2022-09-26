import styled from 'styled-components';

export const FileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 35px;
`;
export const Image = styled.img`
  height: 156px;
  width: 200px;
  object-fit: cover;
  border-radius: 4px;
`;
export const ChooseFileStyle = styled.input`
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
