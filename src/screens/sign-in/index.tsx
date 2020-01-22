import React from 'react';
import { TextInput } from 'components/text-input';
import { Button } from 'components/button';
import { images } from 'assets';
import { AppText } from 'components/app-text';
import styled from 'styled-components/native';

const ScreenContainer = styled.View`
    flex: 1;
    background-color: #fff;
    height: 100%;
    margin-bottom: auto;
`;

const BottomContainer = styled.View`
    flex: 1;
    margin-top: auto;
    justify-content: flex-end;
`;

export const SignInScreen: React.FC = () => {
    return (
        <ScreenContainer>
            <TextInput label="Email Address" />
            <TextInput label="Password" autoCompleteType="password" secureTextEntry />
            <Button title="Login" />
            <Button mode="text" titleColor="#6979F8" title="Forget password" />
            <BottomContainer>
                <AppText align="center">Or Login with</AppText>
                <Button style={{ marginBottom: 15 }} buttonColor="#0084F4" icon={images.icons.facebook} title="Continue with Facebook" />
                <Button buttonColor="#0084F4" icon={images.icons.google} title="Continue with Google" />
            </BottomContainer>
        </ScreenContainer>
    );
};
