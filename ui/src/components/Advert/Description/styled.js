import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  height: 660px;
  width: 798px;
  border-radius: 5px;
  padding: 24px;
  margin-bottom: 24px;

  & h1 {
    font-size: 32px;
  }

  & h2 {
    font-size: 40px;
  }

  & h3 {
    color: #002F34;
    text-transform: uppercase;
    font-size: 24px;
    margin: 16px 0 4px 0;
  }

  & p {
    font-size: 16px;
    color: #002F34;
  }

  & span {
    font-size: 12px;
    color: #406367;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    display: block;
    font-size: 12px;
    font-size: 12px;
    color: #406367;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    & li {
      display: flex;
      align-items: center;
      padding: 6px 16px;
      margin: 16px 8px 0 0;
      border-radius: 4px;
      border: solid 1px #406367;

      & p, span {
        font-size: 14px;
        color: #002F34;
      }
    }
  }
`;

export const Line = styled.div`
  margin: 15px;
  border-bottom: 1px solid #000;
`;

export const Icon = styled.img`
  width: 20px;
`;
