import styled from 'styled-components';
import { noticeColor } from './helper';

export const WrapperNotice = styled.div`
    color: ${({ type }) => noticeColor[type].primaryColor};
    border: 1px solid ${({ type }) => noticeColor[type].primaryColor};
    background-color: ${({ type }) => noticeColor[type].secondaryColor};
    width: 100%;
    height: 40px;
    border-radius: 20px;
`;
