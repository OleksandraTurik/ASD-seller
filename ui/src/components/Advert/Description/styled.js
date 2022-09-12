import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  max-height: 800px;
  border-radius: 5px;
  margin: 24px 0;
  padding: 24px;

  & h2 {
    font-size: 40px;
    color: ${props => props.theme.mainGreenColor};
  }

  & h3 {
    color: ${props => props.theme.mainGreenColor};
    text-transform: uppercase;
    font-size: 24px;
    margin: 16px 0 4px 0;
  }

  & div {
    display: wrap;
    overflow-wrap: break-word;
    font-size: 16px;
    color: ${props => props.theme.mainGreenColor};
  }
`;

export const Span = styled.span`
  font-size: ${({ primary }) => primary ? '32px' : '12px'};
  color: ${({ primary }) => primary ? '#002f34' : '#406367'};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  & span {
    display: block;
    font-size: 12px;
    font-size: 12px;
    color: #406367;
  }
`;

export const Line = styled.div`
  margin: 15px;
  border-bottom: 1px solid #7f9799;
`;

export const FavoriteBtn = styled.button`
  background-color: transparent;
  border: none;
  bottom: 12px;
  right: 20px;
  cursor: pointer;

  & svg {
    opacity: 0.4;
  }

  &:hover svg {
    opacity: 1;
  }
`;
