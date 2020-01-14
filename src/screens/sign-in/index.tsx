import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'components/text-input';
import { Button } from 'components/button';

export const SignInScreen: React.FC = () => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TextInput label="Email Address" />
            <TextInput label="Password" autoCompleteType="password" secureTextEntry />
            <Button title="Login" />
            <Button title="Continue with Facebook" />
        </View>
    );
};
