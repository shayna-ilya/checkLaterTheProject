import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from 'components/app-text';
import { Image } from 'react-native';
import { images } from 'assets';

type Props = {};

const Container = styled(SafeAreaView)`
    background-color: white;
    height: 100%;
`;
const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px 0 15px;
    margin-bottom: 10px;
`;

const Divider = styled.View`
    border-bottom-width: 1px;
    border-color: rgba(228, 228, 228, 0.6);
`;

const StyledImage = styled.Image`
    width: 28px;
    height: 28px;
`;

export const Setting: React.FC<Props> = () => {
    return (
        <Container>
            <Header>
                <AppText font="displaySemibold" size={34}>
                    Setting
                </AppText>
                <StyledImage source={images.icons.settings} />
            </Header>
            <Divider />
        </Container>
    );
};
