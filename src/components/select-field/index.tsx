import React from 'react';
import styled from 'styled-components/native';
import { AppText } from 'components/app-text';
import { Image, TouchableOpacity, ViewStyle } from 'react-native';
import { images } from 'assets';

type Props = {
    label: string;
    style?: ViewStyle;
    text: string;
    onPress(): void;
};

const Label = styled.Text`
    width: 100%;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 15px;
    text-transform: capitalize;
`;

const TextContainer = styled.View`
    width: 100%;
    border: rgba(228, 228, 228, 0.6) 1px solid;
    border-radius: 5px;
    font-size: 13px;
    line-height: 18px;
    height: 50px;
    display: flex;
    justify-content: center;
`;

const ChevronContainer = styled.View`
    position: absolute;
    left: 88%;
    top: 21%;
`;

export const SelectField: React.FC<Props> = ({ label, style, text, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={style}>
            <Label>{label}</Label>
            <TextContainer>
                <AppText>{text}</AppText>
                <ChevronContainer>
                    <Image source={images.icons.chevronDown} />
                </ChevronContainer>
            </TextContainer>
        </TouchableOpacity>
    );
};
