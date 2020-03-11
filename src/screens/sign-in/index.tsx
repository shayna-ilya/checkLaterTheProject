import React from 'react';
import { TextInput } from 'components/common/text-input';
import { Button } from 'components/common/button';
import { images } from 'assets';
import { AppText } from 'components/common/app-text';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import { ROUTES } from '../../navigation/route-names';

const ScreenContainer = styled.View`
    flex: 1;
    background-color: #fff;
    height: 100%;
    margin-bottom: auto;
    padding: 0 25px 30px 25px;
`;

const BottomContainer = styled.View`
    flex: 1;
    margin-top: auto;
    justify-content: flex-end;
`;

const StyledInput = styled(TextInput)`
    margin-bottom: 20px;
`;

const LightText = styled(AppText)`
    margin-top: 15px;
    margin-bottom: 25px;
    width: 50%;
`;

const BottomContainerText = styled(AppText)`
    margin-bottom: 15px;
`;

const TopContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SignInScreen: React.FC = () => {
    const { navigate } = useNavigation();

    const navigateToSignUpScreen = React.useCallback(() => navigate(ROUTES.signUpScreen), [navigate]);
    const navigateToMainScreen = React.useCallback(() => navigate(ROUTES.mainScreen), [navigate]);

    return (
        <ScreenContainer>
            <TopContainer>
                <AppText font="displaySemibold" size={34}>
                    Welcome Back
                </AppText>
                <Button onPress={navigateToSignUpScreen} mode="text" titleColor="#6979F8" title="Sign up" />
            </TopContainer>

            <LightText color="#999999" font="textLight" numberOfLines={2}>
                Signing up or login to see our top picks for you.
            </LightText>
            <StyledInput label="Email Address" />
            <StyledInput label="Password" autoCompleteType="password" secureTextEntry />
            <Button title="Login" onPress={navigateToMainScreen} titleColor="#FFFFFF" />
            <Button mode="text" titleColor="#6979F8" title="Forget password" />
            <BottomContainer>
                <BottomContainerText color="#999999" font="textLight" align="center">
                    Or Login with
                </BottomContainerText>
                <Button style={{ marginBottom: 15 }} titleColor="#FFFFFF" buttonColor="#0084F4" icon={images.icons.facebook} title="Continue with Facebook" />
                <Button buttonColor="#0084F4" titleColor="#FFFFFF" icon={images.icons.google} title="Continue with Google" />
            </BottomContainer>
        </ScreenContainer>
    );
};
