import styled from 'styled-components';
import closeIcon from 'assets/icons/closeIcon.svg';
import Dropdown from '../Dropdown';

export const StyledForm = styled.form`
  padding: 40px 20px;
  background-color: ${props => props.theme.greyBackground};
`;

export const SearchDiv = styled.div`
  display: flex;
  max-width: 1250px;
  background-color: white;
  position: relative;
  margin: 0 auto;
  border-radius: 2px 0 0 2px;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const SearchIconWrap = styled.div`
  position: absolute;
  left: 22px;
  top: 20px;
`;

export const LocationIconWrap = styled.div`
  position: relative;

  & svg {
    position: absolute;
    left: 20px;
    top: 20px;
  }
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  padding-left: 0;
  padding-right: 0;
  line-height: 56px;
  height: 70px;
  margin: 0 0 0 65px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.mainGreenColor};
  font-family: inherit;
  border-right: 1px solid ${props => props.theme.greyBackground};
  flex: 1 1 auto;
  
  @media (max-width: 580px) {
    border-bottom: 1px solid ${props => props.theme.greyBackground};
    width: inherit;
  }

  /* &:nth-child(1) {
    max-width: 675px;
  }

  &:nth-child(2) {
    max-width: 295px;
  } */

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

export const SearchDropdown = styled(Dropdown)`
  border: none;
  outline: none;
  padding-left: 0;
  padding-right: 0;
  line-height: 56px;
  height: 70px;
  margin: 0 0 0 65px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.mainGreenColor};
  font-family: inherit;
  border-right: 1px solid ${props => props.theme.greyBackground};
  width: 300px;
  
  @media (max-width: 580px) {
    border-bottom: 1px solid ${props => props.theme.greyBackground};
    width: inherit;
  }
`;

export const SubmitSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  width: 150px;
  padding: 10px;
  height: 70px;
  border: none;
  color: ${props => props.theme.mainGreenColor};
  cursor: pointer;
  background-color: #fff;
  

  @media (max-width: 580px) {
    width: 100%;
  }

  &:hover {
    background-color: ${props => props.theme.mainGreenColor};
    color: #fff;
  }

  &:hover svg {
    fill: #fff;
  }
`;
