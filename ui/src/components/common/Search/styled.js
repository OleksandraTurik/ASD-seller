import styled from 'styled-components';
import closeIcon from 'assets/icons/closeIcon.svg';

export const StyledForm = styled.form`
  padding: 40px 0;
  background-color: #f2f4f5;
`;

export const SearchDiv = styled.div`
  display: flex;
  width: 1250px;
  background-color: white;
  position: relative;
  margin: 0 auto;
  border-radius: 2px 0 0 2px;
`;

export const SearchIconWrap = styled.div`
  position: absolute;
  left: 22px;
  top: 20px;
`;

export const LocationIconWrap = styled.div`
  position: absolute;
  left: 765px;
  top: 20px;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  width: ${({ width }) => width};
  padding-left: 0;
  padding-right: 0;
  line-height: 56px;
  height: 70px;
  margin: 0 0 0 65px;
  font-size: 16px;
  font-weight: 600;
  color: #002f34;
  font-family: inherit;
  border-right: 1px solid #f2f4f5;

  &::placeholder {
    font-weight: 400;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1.9em;
    width: 1.9em;
    border-radius: 50em;
    background: url(${closeIcon}) no-repeat 50% 50%;
    background-size: contain;
    pointer-events: none;
    cursor: pointer;
    position: relative;
    left: -10px;
  }

  &:focus::-webkit-search-cancel-button {
    pointer-events: all;
  }
`;

export const SubmitSearchButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  width: 150px;
  height: 70px;
  border: none;
  color: #002f34;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #08353a;
    color: #fff;
  }

  &:hover svg {
    fill: #fff;
  }
`;
