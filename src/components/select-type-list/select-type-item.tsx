import React from 'react';
import styled from 'styled-components/native';
import { Image, ImageSourcePropType, ViewStyle, StyleSheet } from 'react-native';
import { images } from 'assets';
import { Type } from 'types/main-screen';

type Props = {
    icon: ImageSourcePropType;
    isActive: boolean;
    style?: ViewStyle;
    type: Type;
    onPress(index: Type): void;
};

const Container = styled.TouchableOpacity`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(228, 228, 228, 0.6);
    border-radius: 4px;
`;

const ActiveContainer = styled(Container)`
    width: 70px;
    height: 70px;
`;

const UnActiveContainer = styled(Container)`
    width: 48px;
    height: 48px;
`;

const ActiveImage = styled.Image`
    width: 50px;
    height: 50px;
`;

const UnActiveImage = styled.Image`
    width: 34px;
    height: 34px;
`;

const ActiveIndicatorContainer = styled.View`
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 80%;
    left: 80%;
`;

const ActiveIndicatorInner = styled.View`
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #00c48c;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const shadows = StyleSheet.create({
    itemShadow: {
        elevation: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
    },
    activeIndicatorShadow: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export const SelectTypeItem: React.FC<Props> = ({ icon, type, style, isActive, ...props }) => {
    const onPress = React.useCallback(() => props.onPress(type), [type, props]);

    if (isActive) {
        return (
            <ActiveContainer style={[style, shadows.itemShadow]}>
                <ActiveImage source={icon} />
                <ActiveIndicatorContainer style={shadows.activeIndicatorShadow}>
                    <ActiveIndicatorInner>
                        <Image source={images.icons.checkIcon} />
                    </ActiveIndicatorInner>
                </ActiveIndicatorContainer>
            </ActiveContainer>
        );
    }

    return (
        <UnActiveContainer onPress={onPress} style={[style, shadows.itemShadow]}>
            <UnActiveImage source={icon} />
        </UnActiveContainer>
    );
};
