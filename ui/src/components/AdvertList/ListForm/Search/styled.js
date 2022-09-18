import styled from 'styled-components';
import Select from 'react-select';

export const FormController = styled.div`
  display: flex;
  height: 55px;
  gap: 10px;

  @media (max-width: 450px) {
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
  @media (max-width: 450px) {
    width: auto;
  }
`;

export const CityDropdown = styled(Select).attrs({
  placeholder: 'Уся Україна',
})`
  padding: 14px;
  line-height: 20px;
  border: none;
  width: calc(100% - 28px);
  font-size: 16px;
  @media (max-width: 450px) {
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
