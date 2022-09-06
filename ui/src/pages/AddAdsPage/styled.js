import styled from 'styled-components';

export const Main = styled.main`
  background-color: #f2f4f5;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 1238px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 34px;
  font-weight: 700;
  color: rgb(0, 47, 52);
  padding: 48px 0px 30px;
`;

export const WhiteBlock = styled.div`
  background-color: white;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 32px;

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
  color: rgb(0, 47, 52);
  margin: 0px 0px 16px;
`;

export const LabelForInut = styled.label`
  margin: 0px;
  padding: 0px 0px 8px;
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: rgb(0, 47, 52);

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
  color: rgb(0, 47, 52);
  font-family: sans-serif;
  font-size: 17px;
  line-height: 20px;
  outline: 0px;
  padding: 16px 48px 16px 16px;
  resize: none;
  width: 100%;

  &:focus {
    border-bottom-color: rgb(0, 47, 52);
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
  color: rgb(0, 47, 52);
  margin: 8px 0px;
`;

export const CategoryItems = styled.button`
  align-items: center;
  background-color: rgb(255, 251, 219);
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
  width: 100%;
`;
export const CategoryList = styled.ul`
  padding-left: 0px;
  margin-top: 0px;
  max-height: 559px;
  overflow-y: auto;
  padding-right: 8px;
`;
export const CategoryListItem = styled.li`
  border-bottom: 1px solid rgb(216, 223, 224);
  box-sizing: border-box;
  color: rgb(0, 47, 52);
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 56px;
  padding: 16px 16px 16px 0px;
  text-decoration: none;
`;
export const CategoryContent = styled.ul`
  padding-left: 0px;
  margin-top: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 16px;
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
`;

export const PInPickCategory = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: rgb(0, 47, 52);
  margin: 0px;
  padding: 0px;
`;

// export const DescriptionProgress = styled.div`
//   font-size: 14px;
//   color: rgb(127, 151, 153);
//   display: flex;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   width: 100%;
//   margin-top: auto;
//   padding-top: 16px;

//   & span:nth-child(2) {
//     position: relative;
//     left: 60px;
//   }
// `;

export const ContactInput = styled.input`
    font-size: 16px;
    color: rgb(0, 47, 52);
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

    &:focus {
    border-bottom-color: rgb(0, 47, 52);
  }
`;

export const PublishButton = styled.button`
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    background-color: rgb(0, 47, 52);
    border: 5px solid rgb(0, 47, 52);
    border-radius: 4px;
    color: rgb(255, 255, 255);
    padding: 10px 30px 8px;
    transition: all 0.1s ease;

    &:hover {
      color: rgb(0, 47, 52);
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
    background-color: rgb(0, 47, 52);
    border: 2px solid rgb(0, 47, 52);
    border-radius: 4px;
    color: rgb(255, 255, 255);
    padding: 5px 11px 5px;
    transition: all 0.1s ease;
  }

  &::-webkit-file-upload-button:hover {
    color: rgb(0, 47, 52);
    background-color: white;
  }
`;
