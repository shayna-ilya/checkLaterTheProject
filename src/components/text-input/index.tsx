import React from 'react';
import ReactNative, { TextInputProps, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { Container, Input, Label } from 'components/text-input/styles';

type Props = {
    label: string;
    containerStyle?: ViewStyle;
    inputStyle?: ViewStyle;
} & TextInputProps;

export const TextInput: React.FC<Props> = ({ label, containerStyle, inputStyle, ...props }) => {
    const inputRef = React.useRef<ReactNative.TextInput>(null);

    const focus = React.useCallback(() => inputRef.current?.focus(), []);

    return (
        <TouchableWithoutFeedback onPress={focus}>
            <Container style={containerStyle}>
                <Label>{label}</Label>
                <Input {...props} style={inputStyle} ref={inputRef} />
            </Container>
        </TouchableWithoutFeedback>
    );
};
