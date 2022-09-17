import styled from 'styled-components';
import Select from 'react-select';
import closeIcon from 'assets/icons/closeIcon.svg';

export const Section = styled.section`
  padding: 40px 20px;
  background-color: ${props => props.theme.greyBackground}
`;

export const Form = styled.form`
  display: flex;
  max-width: 1250px;
  background-color: white;
  position: relative;
  margin: 0 auto;
  border-radius: 2px 0 0 2px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const SearchController = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-height: 70px;

  svg {
    padding: 0 20px;
    min-width: 25px;
  }

  @media (max-width: 700px) {
    border-bottom: 3px solid ${props => props.theme.greyBackground};
  }
`;

export const DropdownController = styled(SearchController)`
  flex: 0 0 0;
  border-left: 3px solid ${props => props.theme.greyBackground};
  min-width: 30%;
  
  @media (max-width: 700px) {
    border-left: none;
  }
`;

export const SearchInput = styled.input`
  border: none;
  line-height: 56px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.mainGreenColor};
  height: 100%;
  flex: 1 1 auto;
  min-width: 10px;

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

export const SearchDropdown = styled(Select).attrs({
  placeholder: 'Вся Україна',
  styles: {
    control: (prev) => ({
      ...prev,
      border: 'none',
      padding: '0',
      borderRadius: 'none',
      height: '100%',
      width: '100%',
    }),
    dropdownIndicator: prev => ({
      ...prev,
      padding: '0',
      border: 'none',
    }),
    valueContainer: prev => ({
      ...prev,
      padding: '0',
    }),
  },
})`
  font-size: 16px;
  color: ${props => props.theme.mainGreenColor};
  width: 40%;
  flex: 1 1 auto;
`;

export const Submit = styled.button`
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

  @media (max-width: 700px) {
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
