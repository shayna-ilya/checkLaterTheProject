import React from 'react';
import ReactNative, { TextInputProps, TouchableWithoutFeedback, ViewStyle, Image, View } from 'react-native';
import { Container, Input, Label } from 'components/text-input/styles';
import styled from 'styled-components/native';
import { images } from 'assets';

type Props = {
    label?: string;
    labelTextTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    style?: ViewStyle;
    inputStyle?: ViewStyle;
    listMode?: boolean;
} & TextInputProps;

const ChevronContainer = styled.View`
    position: absolute;
    left: 88%;
    top: 21%;
`;

export const TextInput: React.FC<Props> = ({ label, style, inputStyle, listMode, labelTextTransform, ...props }) => {
    const inputRef = React.useRef<ReactNative.TextInput>(null);

    const focus = React.useCallback(() => inputRef.current?.focus(), []);

    return (
        <TouchableWithoutFeedback onPress={focus}>
            <Container style={style}>
                <Label textTransform={labelTextTransform}>{label}</Label>
                <View>
                    <Input editable={!listMode} {...props} style={inputStyle} ref={inputRef} />
                    {listMode && (
                        <ChevronContainer>
                            <Image source={images.icons.chevronDown} />
                        </ChevronContainer>
                    )}
                </View>
            </Container>
        </TouchableWithoutFeedback>
    );
};
