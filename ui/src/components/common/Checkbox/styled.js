import styled from 'styled-components';

export const Container = styled.label`
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 3px solid #003034;;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? '#003034' : '#fff'};
  border-radius: 3px;
  transition: all 150ms;
  border: 3px solid #003034;
  width: 20px;
  height: 20px;

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`;

export const Text = styled.span`
  margin-left: 15px;
  color: #003034;
  font-size: 12px;
`;
