import React from 'react';
import styled from 'styled-components/native';

type Props = {
    children: string;
    align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    color?: string;
    size?: number;
};

const DEFAULT_TEXT_CIZE = 15;

const Text = styled.Text<Props>`
    text-align: ${(props) => props.align};
    color: ${(props) => props.color || '#111'};
    font-size: ${(props) => props.size || DEFAULT_TEXT_CIZE};
`;

export const AppText: React.FC<Props> = ({ align = 'left', children }) => {
    return <Text align={align}>{children}</Text>;
};
