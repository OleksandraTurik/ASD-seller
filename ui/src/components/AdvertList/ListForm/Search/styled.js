import styled from 'styled-components';
import Select, { createFilter } from 'react-select';
import Option from 'components/common/Option';
import closeIcon from 'assets/icons/closeIcon.svg';

export const FormController = styled.div`
  display: flex;
  height: 55px;
  gap: 10px;

  @media (max-width: 550px) {
    flex-direction: column;
    height: auto;
  }
`;

export const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Що шукаєте?',
})`
  padding: 14px;
  line-height: 20px;
  border: none;
  width: calc(100% - 28px);
  font-size: 16px;
  background: white;
  outline: none;
  border-radius: 2px;
  color: ${props => props.theme.mainGreenColor};
  
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
  @media (max-width: 550px) {
    width: auto;
  }
`;

export const CityDropdown = styled(Select).attrs({
  styles: {
    control: (prev) => ({
      ...prev,
      height: '100%',
      border: 'none',
      boxShadow: 'none',
      borderRadius: '2px',
    }),
    menuList: (base) => ({
      ...base,
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'rgb(242, 244, 245)',
      },
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#002f34',
      },
    }),
    input: (prev) => ({
      ...prev,
      margin: '0',
      padding: '0',
      width: '100%',

    }),
    valueContainer: (prev) => ({
      ...prev,
      padding: '14px',
    }),
    dropdownIndicator: (prev) => ({
      ...prev,
      padding: '10px',
    }),
  },
  components: { Option },
  filterOption: createFilter({ ignoreAccents: false }),
})`
  line-height: 20px;
  border: none;
  width: calc(100% - 28px);
  font-size: 16px;
  @media (max-width: 550px) {
    width: auto;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  border: 5px solid #002F34;
  background: #002F34;
  color: #FFFFFF;
  padding: 10px 30px 8px 30px;
`;
