import React from 'react';
import ReactNative, { TextInputProps, TouchableWithoutFeedback, ViewStyle, Image, View } from 'react-native';
import { Container, Input, Label } from 'components/text-input/styles';

type Props = {
    label?: string;
    labelTextTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    style?: ViewStyle;
    inputStyle?: ViewStyle;
    onPress?(): void;
    listMode?: boolean;
} & TextInputProps;

export const TextInput: React.FC<Props> = ({ label, style, onPress, inputStyle, listMode, labelTextTransform, ...props }) => {
    const inputRef = React.useRef<ReactNative.TextInput>(null);

    const focus = React.useCallback(() => inputRef.current?.focus(), []);

    const handlePress = React.useCallback(() => (onPress ? onPress() : focus()), [focus, onPress]);

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <Container style={style}>
                <Label textTransform={labelTextTransform}>{label}</Label>
                <View pointerEvents="none">
                    <Input editable={!listMode} {...props} style={inputStyle} ref={inputRef} />
                </View>
            </Container>
        </TouchableWithoutFeedback>
    );
};
