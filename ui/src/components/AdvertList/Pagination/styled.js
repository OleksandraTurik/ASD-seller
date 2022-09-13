import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #cacaca;
  justify-content: ${props => {
    if (props.hasNext && props.hasPrev) return 'space-between';
    if (props.hasNext) return 'flex-end';
    return 'flex-start';
  }};
`;

const Button = css`
  background: #002f34;
  color: white;
  cursor: pointer;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Next = styled.button`
  ${Button};
`;

export const Previous = styled.button`
  ${Button};
`;
