import React from 'react';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import { Icon } from 'components/icon';
import { ActivityIndicator, Container, defaultColor, defaultTextColor, IconContainer, InvisibleContainer, Title } from 'components/button/styles';

type Props = {
    title: string;
    buttonColor?: string;
    titleColor?: string;
    icon?: ImageSourcePropType;
    loading?: boolean;
};

export const Button: React.FC<Props> = ({ title, icon, loading, buttonColor, titleColor, ...props }) => {
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
        <TouchableOpacity>
            <Container style={{ backgroundColor: buttonColor || defaultColor }}>
                <IconContainer>{renderIcon()}</IconContainer>
                <Title style={{ color: titleColor || defaultTextColor }}>{title}</Title>
                <InvisibleContainer>
                    <IconContainer>{renderIcon()}</IconContainer>
                </InvisibleContainer>
            </Container>
        </TouchableOpacity>
    );
};
