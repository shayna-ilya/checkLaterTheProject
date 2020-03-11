import React from 'react';
import { ImageSourcePropType, TouchableOpacity, ViewStyle } from 'react-native';
import { Icon } from 'components/icon';
import { ActivityIndicator, Container, ContainerMode, defaultTextColor, IconContainer, InvisibleContainer, Title } from 'components/common/button/styles';
import {AppText} from "components/common/app-text";

type Props = {
    title: string;
    onPress?(): void;
    buttonColor?: string;
    titleColor?: string;
    icon?: ImageSourcePropType;
    loading?: boolean;
    mode?: ContainerMode;
    style?: ViewStyle;
    titleSize?: number;
};

export const Button: React.FC<Props> = ({ onPress, title, icon, mode = 'contained', titleSize, loading, buttonColor, titleColor = defaultTextColor, ...props }) => {
    const renderIcon = () => {
        if (loading) {
            return <ActivityIndicator color="#fff" />;
        }
        if (icon) {
            return <Icon img={icon as ImageSourcePropType} />;
        }
        return null;
    };

    return (
        <TouchableOpacity onPress={onPress} style={props.style}>
            <Container backgroundColor={buttonColor} mode={mode}>
                <IconContainer>{renderIcon()}</IconContainer>
                <AppText size={titleSize} color={titleColor}>{title}</AppText>
                <InvisibleContainer>
                    <IconContainer>{renderIcon()}</IconContainer>
                </InvisibleContainer>
            </Container>
        </TouchableOpacity>
    );
};
