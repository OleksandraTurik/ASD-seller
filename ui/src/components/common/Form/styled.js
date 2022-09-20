import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3a77ff;
  height: 100vh;
  padding: 0;
  justify-content: center;
  position: relative;
`;

export const FormWrapper = styled.form`
  background-color: white;
  padding: 37px 32px 46px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const WrapperLink = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  max-width: 400px;
  width: 100%;
  border-bottom: 1px solid #7f9799;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  & .link {
    padding: 20px;
    display: block;
    border-bottom: 3px solid #fff;
    width: 50%;
    text-align: center;
    color: black;
    text-decoration: none;
    font-size: 20px;
  }

  & .link.active {
    border-bottom: 3px solid ${props => props.theme.mainGreenColor};
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorTitle = styled.p`
  color: red;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 16px;
  border-radius: 4px;
  background: ${props => props.theme.greyBackground};
  padding: 14px 16px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.25;
  color: #406367;
  margin-bottom: 20px;
  border: none;
  outline-style: none;
  &:focus {
    border-bottom: solid 3px #406367;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  /* position: relative; */
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background: ${props => props.theme.mainGreenColor};
  box-shadow: 0 0 0 2px ${props => props.theme.mainGreenColor};
  border: none;
  padding: 10px 16px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
`;

export const WrapperLoader = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
 
`;

export const P = styled.p`
  font-size: 12px;
`;
