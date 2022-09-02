import styled from 'styled-components';
import IconSearch from 'assets/icons/search-icon.svg';
import IconSearchWhite from 'assets/icons/search-white.png';
import iconClose from 'assets/icons/close-icon.svg';

export const StyledForm = styled.form`
  padding: 40px 0;
  background-color: #f2f4f5;
`;

export const SearchDiv = styled.div`
  width: 1250px;
  background-color: white;
  position: relative;
  margin: 0 auto;
  border-radius: 2px 0 0 2px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  width: 26px;
  left: 22px;
  top: 20px;
`;

export const LocationIcon = styled.img`
  position: absolute;
  width: 25px;
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
    background: url(${iconClose}) no-repeat 50% 50%;
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
  font-size: 16px;
  font-weight: 600;
  text-align: start;
  width: 150px;
  height: 70px;
  border: none;
  background-color: white;
  color: #002f34;
  cursor: pointer;
  padding-left: 28px;
  background: no-repeat right/20% url(${IconSearch});
  background-position: bottom 21px right 30px;

  &:hover {
    background-color: #08353a;
    color: white;
    transition: 0.3s;
    background: no-repeat right/30% url(${IconSearchWhite});
    background-position: bottom 13px right 22px;
    background-color: #08353a;
  }
`;
