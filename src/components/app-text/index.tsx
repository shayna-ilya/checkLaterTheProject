import React from 'react';
import styled from 'styled-components/native';
import { TextProps, TextStyle } from 'react-native';

type Props = {
    children: string;
    align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    color?: string;
    size?: number;
    font?: Font;
    style?: TextStyle;
    weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
} & TextProps;

const DEFAULT_TEXT_SIZE = '15px';

type Font = 'textRegular' | 'textBold' | 'textLight' | 'textSemibold' | 'displaySemibold';

const FONTS: { [key in Font]: string } = {
    textRegular: 'SF-Pro-Text-Regular',
    textBold: 'SF-Pro-Text-Bold',
    textLight: 'SF-Pro-Text-Light',
    textSemibold: 'SF-Pro-Text-Semibold',
    displaySemibold: 'SF-Pro-Display-Semibold',
};

const Text = styled.Text<Props>`
    text-align: ${(props) => props.align};
    color: ${(props) => props.color || '#111'};
    font-size: ${(props) => (props.size ? `${props.size}px` : DEFAULT_TEXT_SIZE)};
    font-family: ${(props) => (props.font ? FONTS[props.font] : FONTS.textRegular)};
    font-weight: ${(props) => props.weight};
`;

export const AppText: React.FC<Props> = ({ align = 'left', children, weight = 'normal', ...rest }) => {
    return (
        <Text align={align} weight={weight} {...rest}>
            {children}
        </Text>
    );
};
