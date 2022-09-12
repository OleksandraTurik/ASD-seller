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
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const TitlePriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  height: 50%;
`;

export const AddressButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LikeButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
`;

export const ImageContainer = styled.div`
  width: 300px;
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
  width: 100%;
  text-overflow: ellipsis;
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
  width: 150px;
`;

export const AddressAndTime = styled.p``;
