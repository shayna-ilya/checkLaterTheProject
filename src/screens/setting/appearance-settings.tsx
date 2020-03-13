import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SettingSwitchSection } from 'components/settings-components/setting-switch-section';
import { useDispatch, useSelector } from 'react-redux';
import { getIsDarkModeEnable, getIsImagesEnabled } from 'store/ducks/settings/selectors';
import { setIsDarkModeEnabled, setIsImagesEnabled } from 'store/ducks/settings/actions';

const Container = styled(SafeAreaView)`
    height: 100%;
    background-color: white;
`;

export const AppearanceSettingsScreen: React.FC = () => {
    const isDarkModeEnabled = useSelector(getIsDarkModeEnable);
    const isImagesEnabled = useSelector(getIsImagesEnabled);
    const dispatch = useDispatch();

    const handleDarkModeSwitch = React.useCallback((value: boolean) => dispatch(setIsDarkModeEnabled(value)), [dispatch]);
    const handleImageSwitch = React.useCallback((value: boolean) => dispatch(setIsImagesEnabled(value)), [dispatch]);

    return (
        <Container>
            <SettingSwitchSection handleSwitch={handleDarkModeSwitch} title="Dark mode" switchValue={isDarkModeEnabled} />
            <SettingSwitchSection handleSwitch={handleImageSwitch} title="Use images" switchValue={isImagesEnabled} />
        </Container>
    );
};
