import React from 'react';
import ReactNative, { TouchableWithoutFeedback, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

const Input = styled.TextInput`
    width: 100%;
    border: rgba(228, 228, 228, 0.6) 1px solid;
    border-radius: 5px;
`;

const Label = styled.Text`
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    line-height: 20px;
    margin-bottom: 15px;
    text-transform: uppercase;
`;

const Container = styled.View`
    margin: 0 25px 0 25px;
`;

type Props = {
    label: string;
    containerStyle: ViewStyle;
    inputStyle: ViewStyle;
};

export const TextInput: React.FC<Props> = ({ label, containerStyle, inputStyle, ...props }) => {
    const inputRef = React.useRef<ReactNative.TextInput>(null);

    const focus = React.useCallback(() => inputRef.current?.focus(), []);

    return (
        <TouchableWithoutFeedback onPress={focus}>
            <Container style={containerStyle}>
                <Label>{label}</Label>
                <Input style={inputStyle} ref={inputRef} />
            </Container>
        </TouchableWithoutFeedback>
    );
};