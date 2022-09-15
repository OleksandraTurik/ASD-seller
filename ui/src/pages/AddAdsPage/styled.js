import styled from 'styled-components';

export const ScrollbarWrapper = styled.div`
  &::-webkit-scrollbar-track
  {
    background-color: rgb(242, 244, 245);
  }

  &::-webkit-scrollbar
  {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb
  {
    background-color: ${props => props.theme.mainGreenColor};
  }
`;

export const Main = styled.main`
  background-color: ${props => props.theme.greyBackground};
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 1238px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 34px;
  font-weight: 700;
  color: ${props => props.theme.mainGreenColor};
  padding: 48px 0px 30px;
  margin-left: 10px;

  &:nth-child(2) {
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
  }

  @media (max-width: 1240px) {
    position: relative;
    left: 15px;
  }

  @media (max-width: 480px) {
    font-size: 23px;
  }

`;

export const WhiteBlock = styled.div`
  background-color: white;
  border-radius: 4px;
  margin: 10px;
  margin-bottom: 10px;
  padding: 32px;


  @media (max-width: 380px) {
    padding-left: 15px;
    padding-top: 25px;
  }

  &:nth-child(5) {
    height: 50px;
  }
`;

export const WidthEquation = styled.div`
  max-width: 682px;
`;

export const CategoryWidthEquation = styled.div`
  max-width: 392px;
`;

export const WhiteBlockTitle = styled.div`
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  color: ${props => props.theme.mainGreenColor};
  margin: 0px 0px 16px;
`;

export const LabelForInut = styled.label`
  margin: 0px;
  padding: 0px 0px 8px;
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.mainGreenColor};

  &:nth-child(5),
  &:nth-child(8),
  &:nth-child(11) {
    margin-top: 24px;
  }
`;

export const TitleTextArea = styled.textarea`
  background-clip: padding-box;
  background-color: rgb(242, 244, 245);
  border: 2px solid rgb(242, 244, 245);
  border-radius: 4px;
  color: ${props => props.theme.mainGreenColor};
  font-family: sans-serif;
  font-size: 17px;
  line-height: 20px;
  outline: 0px;
  padding: 16px 48px 16px 16px;
  resize: none;
  width: 100%;
  max-width: 80%;

  &:focus {
    border-bottom-color: ${props => props.theme.mainGreenColor};
  }
`;

export const ErrorTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin: 0px;
  color: rgb(255, 86, 54);
`;

export const Category = styled.p`
  line-height: 20px;
  font-size: 14px;
  color: ${props => props.theme.mainGreenColor};
  margin: 8px 0px;
`;

export const CategoryItems = styled.button`
  align-items: center;
  border: none;
  border-radius: 4px;
  color: rgb(0, 47, 52);
  cursor: pointer;
  display: flex;
  margin-bottom: 8px;
  padding: 16px;
  font-size: 16px;
  text-decoration: none;
  transition: background 0.3s ease 0s;
  text-align: left;

  @media ( max-width: 1100px) {
    margin: 0 20px;
  }

  &:hover {
    font-weight: 700;
  }

  &:hover img {
    transform: scale(1.08);
  }

  &:nth-child(1) {
    background-color: #fffbef;
  }
  &:nth-child(2) {
    background-color: #ebf1ff;
  }
  &:nth-child(3) {
    background-color: #e9fcfb;
  }
  &:nth-child(4) {
    background-color: #ffeeea;
  }
  &:nth-child(5) {
    background-color: #fffbef;
  }
  &:nth-child(6) {
    background-color: #ebf1ff;
  }
  &:nth-child(7) {
    background-color: #e9fcfb;
  }
  &:nth-child(8) {
    background-color: #ffeeea;
  }
  &:nth-child(9) {
    background-color: #fffbef;
  }
  &:nth-child(10) {
    background-color: #ebf1ff;
  }
  &:nth-child(11) {
    background-color: #e9fcfb;
  }
  &:nth-child(12) {
    background-color: #ffeeea;
  }

  &:nth-child(1) img {
    background-color: #f2f3f5;
  }
  &:nth-child(2) img {
    background-color: #3a77ff;
  }
  &:nth-child(3) img {
    background-color: #23e5db;
  }
  &:nth-child(4) img {
    background-color: #ff5636;
  }
  &:nth-child(5) img {
    background-color: #fff6d9;
  }
  &:nth-child(6) img {
    background-color: #ceddff;
  }
  &:nth-child(7) img {
    background-color: #c8f8f6;
  }
  &:nth-child(8) img {
    background-color: #ffd6c9;
  }
  &:nth-child(9) img {
    background-color: #ffce32;
  }
  &:nth-child(10) img {
    background-color: #ceddff;
  }
  &:nth-child(11) img {
    background-color: #c8f8f6;
  }
  &:nth-child(12) img {
    background-color: #ffd6c9;
  }
`;

export const ImgCirle = styled.img`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 50%;
  height: 48px;
  min-width: 48px;
  overflow: hidden;
  background-color: rgb(255, 206, 50);
  margin-right: 15px;
  transition: transform 0.05s;
`;

export const CategoryList = styled.ul`
  padding-left: 0px;
  margin-top: 0px;
  max-height: 559px;
  overflow-y: auto;
  padding-right: 8px;

  @media ( max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

  &:nth-child(2) {
    margin-left: 20px;
  }

  &::-webkit-scrollbar-track
  {
    background-color: rgb(242, 244, 245);
  }

  &::-webkit-scrollbar
  {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb
  {
    background-color: ${props => props.theme.mainGreenColor};
  }
`;
export const CategoryListItem = styled.li`
  border-bottom: 1px solid rgb(216, 223, 224);
  box-sizing: border-box;
  color: rgb(0, 47, 52);
  cursor: pointer;
  font-size: 16px;
  background-color: ${({ selected }) => selected ? '#ceddff' : 'transparent'};
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 480px;
  height: 56px;

  &:hover {
    background-color: #ceddff;
  }

  @media ( max-width: 1100px) {
    max-width: 100%;
  }
`;
export const CategoryContent = styled.ul`
  padding-left: 0px;
  margin-top: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 16px;

  /* @media ( max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    overflow: scroll;
  } */

  @media ( max-width: 1100px) {
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }


`;
export const PickCategory = styled.button`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background: rgb(242, 244, 245);
  border-radius: 4px;
  padding: 16px;
  cursor: pointer;
  border: none;
  text-align: center;
  align-items: center;
  max-width: 100%;
`;

export const PInPickCategory = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.mainGreenColor};
  margin: 0px;
  padding: 0px;
  width: 392px;
  text-align: left;
`;

export const ContactInput = styled.input`
    font-size: 16px;
    color: ${props => props.theme.mainGreenColor};
    background-color: rgb(242, 244, 245);
    border: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 2px solid rgb(242, 244, 245);
    border-radius: 4px;
    line-height: 20px;
    outline: 0px;
    padding: 14px 48px 14px 16px;
    width: 100%;
    max-width: 80%;

    &:focus {
    border-bottom-color: ${props => props.theme.mainGreenColor};
  }
`;

export const PublishButton = styled.button`
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    background-color: ${props => props.theme.mainGreenColor};
    border: 5px solid ${props => props.theme.mainGreenColor};
    border-radius: 4px;
    color: rgb(255, 255, 255);
    padding: 10px 30px 8px;
    transition: all 0.1s ease;
    float: right;

    @media (max-width: 480px) {
      padding: 8px 13px;
    }

    &:hover {
      color: ${props => props.theme.mainGreenColor};
      background-color: white;
    }
`;

export const InputFile = styled.input`
    color: #878787;

   &::-webkit-file-upload-button {
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    background-color: ${props => props.theme.mainGreenColor};
    border: 2px solid ${props => props.theme.mainGreenColor};
    border-radius: 4px;
    color: rgb(255, 255, 255);
    padding: 5px 11px 5px;
    transition: all 0.1s ease;
  }

  &::-webkit-file-upload-button:hover {
    color: ${props => props.theme.mainGreenColor};
    background-color: white;
  }
`;
