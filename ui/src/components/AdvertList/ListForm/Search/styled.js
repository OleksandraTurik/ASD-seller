import styled, { css } from 'styled-components';

export const FormController = styled.div`
  display: flex;
  height: 55px;
  gap: 10px;

  @media (max-width: 450px) {
    flex-direction: column;
    height: auto;
  }
`;

const Input = css`
  padding: 14px;
  line-height: 20px;
  border: none;
  width: calc(100% - 28px);
  font-size: 16px;
`;

export const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Що шукаєте?',
})`
  ${Input};
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
