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
    transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'none';
} & TextProps;

const DEFAULT_TEXT_SIZE = '15px';

type Font = 'textRegular' | 'textBold' | 'textLight' | 'textSemibold' | 'displaySemibold';

const FONTS: { [key in Font]: string } = {
    textRegular: 'SFProText-Regular',
    textBold: 'SFProText-Bold',
    textLight: 'SFProText-Light',
    textSemibold: 'SFProText-Semibold',
    displaySemibold: 'SFProDisplay-Semibold',
};

const Text = styled.Text<Props>`
    text-align: ${(props) => props.align};
    color: ${(props) => props.color || '#111'};
    font-size: ${(props) => (props.size ? `${props.size}px` : DEFAULT_TEXT_SIZE)};
    font-family: ${(props) => (props.font ? FONTS[props.font] : FONTS.textRegular)};
    font-weight: ${(props) => props.weight};
    text-transform: ${(props) => props.transform || 'none'};
`;

export const AppText: React.FC<Props> = ({ align = 'left', children, weight = 'normal', transform = 'none', ...rest }) => {
    return (
        <Text align={align} weight={weight} transform={transform} {...rest}>
            {children}
        </Text>
    );
};
