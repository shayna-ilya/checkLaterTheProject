import React from 'react';
import ReactNative, { TextInputProps, TouchableWithoutFeedback, ViewStyle, View } from 'react-native';
import { Container, Input, Label } from 'components/common/text-input/styles';

type Props = {
    label?: string;
    labelFontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    labelTextTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    style?: ViewStyle;
    inputStyle?: ViewStyle;
    onPress?(): void;
    listMode?: boolean;
} & TextInputProps;

export const TextInput: React.FC<Props> = ({ label, style, onPress, inputStyle, listMode, labelTextTransform, labelFontWeight, ...props }) => {
    const inputRef = React.useRef<ReactNative.TextInput>(null);

    const focus = React.useCallback(() => inputRef.current?.focus(), []);

    const handlePress = React.useCallback(() => (onPress ? onPress() : focus()), [focus, onPress]);

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <Container style={style}>
                <Label fontWeight={labelFontWeight} textTransform={labelTextTransform}>
                    {label}
                </Label>
                <View pointerEvents="none">
                    <Input editable={!listMode} {...props} style={inputStyle} ref={inputRef} />
                </View>
            </Container>
        </TouchableWithoutFeedback>
    );
};
