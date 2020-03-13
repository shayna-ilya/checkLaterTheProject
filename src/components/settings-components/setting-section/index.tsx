import React from 'react';
import styled from 'styled-components/native';
import { AppText } from 'components/common/app-text';
import { ImageSourcePropType, ViewProps } from 'react-native';

type Props = {
    icon: ImageSourcePropType;
    title: string;
    description: string;
    ellipseColor: string;
    style?: ViewProps;
    onPress?(): void;
};

const Container = styled.TouchableOpacity`
    padding: 0 16px 20px 13px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: rgba(228, 228, 228, 0.3);
`;

const IconContainer = styled.View<{ backgroundColor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: ${(props) => props.backgroundColor};
`;

const Icon = styled.Image`
    width: 28px;
    height: 28px;
`;

const TextContainer = styled.View`
    margin-left: 18px;
    display: flex;
    flex-direction: column;
`;

const Title = styled(AppText)`
    margin-bottom: 3px;
`;

export const SettingSectionItem: React.FC<Props> = ({ icon, title, description, ellipseColor, style, onPress }) => {
    return (
        <Container style={style} onPress={onPress}>
            <IconContainer backgroundColor={ellipseColor}>
                <Icon source={icon} />
            </IconContainer>
            <TextContainer>
                <Title size={15} weight="normal">
                    {title}
                </Title>
                <AppText size={13} color="#999999">
                    {description}
                </AppText>
            </TextContainer>
        </Container>
    );
};
