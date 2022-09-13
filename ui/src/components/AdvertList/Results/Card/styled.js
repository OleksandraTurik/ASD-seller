import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  height: 150px;
  background: white;
  cursor: pointer;
  
  @media (max-width: 450px) {
    flex-direction: column;
    height: auto;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 150px);
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const InfoWrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: calc(50%);
`;

export const LikeButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  margin-left: auto;
`;

export const ImageContainer = styled.div`
  width: 20%;
  min-width: 150px;
  @media (max-width: 450px) {
    height: 200px;
    width: 100%;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  background: #eeeeee;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: normal;
  max-width: 600px;
  //width: 50%;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  overflow: hidden;

  &:hover {
    background: #002f34;
    color: white;
  }
`;

export const Price = styled.p`
  text-align: right;
  font-weight: bold;
  font-size: 20px;
  overflow-wrap: normal;
  //margin-left: auto;
`;

export const AddressAndTime = styled.p`
  margin-top: 10px;
  padding-top: 10px;
  @media (max-width: 450px) {
    border-top: 2px solid #cacaca;
  }
`;
