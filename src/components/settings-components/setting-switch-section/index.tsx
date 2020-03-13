import React from 'react';
import styled from 'styled-components/native';
import { AppText } from 'components/common/app-text';
import { StyleSheet } from 'react-native';

type Props = {
    switchValue: boolean;
    title: string;
    handleSwitch(value: boolean): void;
};

const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px 12px 20px;
    border-bottom-width: 1px;
    border-color: rgba(228, 228, 228, 0.3);
`;

const Switch = styled.Switch`
    width: 48px;
    height: 28px;
    border-width: 1px;
`;

export const SettingSwitchSection: React.FC<Props> = ({ title, switchValue, handleSwitch }) => {
    return (
        <Container>
            <AppText size={17}>{title}</AppText>
            <Switch thumbColor="#6979F8" onValueChange={handleSwitch} value={switchValue} />
        </Container>
    );
};
