import styled from 'styled-components';

export const Title = styled.h4`
  font-size: 24px;
`;

export const FilterController = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  @media (max-width: 450px) {
    width: 100%;
  }

    h5 {
    font-size: 18px;
    font-weight: normal;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
