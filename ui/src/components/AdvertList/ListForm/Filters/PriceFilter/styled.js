import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
const Input = css`
  padding: 19px;
  line-height: 20px;
  border: none;
  font-size: 16px;
  width: 100px;
  @media (max-width: 450px) {
    width: calc(50% - 43px);
  }
`;

export const MinPriceInput = styled.input.attrs({
  type: 'number',
  placeholder: 'Від:',
})`
  ${Input};
  outline: none;
  border-radius: 2px;
  color: ${props => props.theme.mainGreenColor};
`;

export const MaxPriceInput = styled.input.attrs({
  type: 'number',
  placeholder: 'До:',
})`
  ${Input};
  outline: none;
  border-radius: 2px;
  color: ${props => props.theme.mainGreenColor};
`;
