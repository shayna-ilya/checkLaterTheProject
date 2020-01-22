import styled, { css } from 'styled-components/native';

export type ContainerMode = 'text' | 'outlined' | 'contained';

export const defaultColor = '#6979f8';
export const defaultTextColor = '#111';

export const Title = styled.Text<{ color: string }>`
    color: ${(props) => props.color || defaultTextColor};
    font-size: 16px;
    line-height: 22px;
    font-weight: 300;
`;
export const IconContainer = styled.View`
    padding: 0 10px 0 10px;
    border-right-width: 1px;
    border-color: rgba(255, 255, 255, 0.3);
`;
export const InvisibleContainer = styled.View`
    opacity: 0;
`;
export const ActivityIndicator = styled.ActivityIndicator`
    width: 24px;
    height: 24px;
`;

export const Container = styled.View<{ backgroundColor?: string; mode: ContainerMode }>`
    background-color: ${(props) => props.backgroundColor || defaultColor};
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin: 0 25px 0 25px;

    ${(props) =>
        (props.mode === 'text' &&
            css`
                background-color: #fff;
                color: #111;
                border-width: 0;
            `) ||
        (props.mode === 'outlined' &&
            css`
                background-color: transparent;
                border-width: 1px;
                color: #111;
            `)}
`;
