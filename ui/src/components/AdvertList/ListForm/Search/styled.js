import styled from 'styled-components';
import Select from 'react-select';

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
  @media (max-width: 550px) {
    width: auto;
  }
`;

export const CityDropdown = styled(Select).attrs({
  styles: {
    control: (prev) => ({
      ...prev,
      height: '100%',
      borderRadius: 'none',
      border: 'none',
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
