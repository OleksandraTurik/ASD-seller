import { type } from '@testing-library/user-event/dist/type';
import styled from 'styled-components';
import { noticeColor } from './helper';

export const WrapperNotice = styled.div`
    color: ${({ type }) => noticeColor[type].primaryColor};
    border: 1px solid ${({ type }) => noticeColor[type].primaryColor};
    background-color: ${({ type }) => noticeColor[type].secondaryColor};
    width: 100%;
    height: ${({ type }) => noticeColor[type].height};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

export const Span = styled.span`
  width: 280px;
`;
