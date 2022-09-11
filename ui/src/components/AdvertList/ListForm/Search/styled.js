import styled, { css } from 'styled-components';

export const FormController = styled.div`
  display: flex;
  height: 55px;
`;

const Input = css`
  padding: 14px 48px 14px 16px;
  line-height: 20px;
  border: none;
  width: 100%;
  font-size: 16px;
`;

export const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Що шукаєте?',
})`
  ${Input};
  border-right: #F2F4F5 solid 3px;
`;

export const CityInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Уся Україна',
})`
  ${Input}
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
