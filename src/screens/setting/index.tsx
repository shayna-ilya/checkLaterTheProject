import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from 'components/common/app-text';
import { images } from 'assets';
import { SettingSectionItem } from 'components/settings-components/setting-section-item';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type Props = {} & DrawerNavigationProp<any>;

const Container = styled(SafeAreaView)`
    background-color: white;
    height: 100%;
`;
const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px 10px 15px;
    margin-bottom: 40px;
    border-bottom-width: 1px;
    border-color: rgba(228, 228, 228, 0.6);
`;

const StyledImage = styled.Image`
    width: 28px;
    height: 28px;
`;

const StyledSettingSectionItem = styled(SettingSectionItem)`
    margin-bottom: 10px;
`;

export const Setting: React.FC<Props> = ({ navigate }) => {
    return (
        <Container>
            <Header>
                <AppText font="displaySemibold" size={34}>
                    Setting
                </AppText>
                <StyledImage source={images.icons.settings} />
            </Header>
            <StyledSettingSectionItem icon={images.icons.eye} title="Appearance" ellipseColor="#00C48C" description="Theme, inpus blablabla" />
            <StyledSettingSectionItem icon={images.icons.bell} title="Push Notifications" ellipseColor="#A6D6FF" description="Lorem inpus blablabla" />
            <StyledSettingSectionItem icon={images.icons.user} title="Profile" ellipseColor="#FF98A8" description="Sync, Lorem inpus blablabla" />
        </Container>
    );
};
