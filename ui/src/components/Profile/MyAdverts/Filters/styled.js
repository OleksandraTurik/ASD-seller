import styled from 'styled-components';
import Dropdown from 'components/common/Dropdown';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-bottom: 1px solid #d9dfe0;
  justify-content: space-evenly;

  & span {
    font-size: 16px;
    margin: 10px 0 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    
    div {
      width: calc(100% - 20px);
    }
  }

    @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const SearchInput = styled.input`
  background: #fff;
  border: 1px solid #fff;
  color: #002F34;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
    color: #849698;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  padding: 10px;
  height: 30px;
  border-radius: 5px;
  align-items: center;
  gap: 5px;
  background: white;
`;

export const CategoryDropdown = styled(Dropdown).attrs({
  isMobile: true,
  style: {
    control: {
      padding: '10px',
      height: '30px',
      borderRadius: '5px',
      fontSize: '16x',
    },
  },
})``;

export const SortDropdown = styled(Dropdown).attrs({
  isMobile: true,
  style: {
    control: {
      padding: '10px',
      height: '30px',
      borderRadius: '5px',
      fontSize: '16x',
    },
  },
})``;
