import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'components/text-input';

export const SignInScreen: React.FC = () => {
    return (
        <View style={{backgroundColor: 'white'}}>
            <TextInput placeholder="dick" />
        </View>
    );
};
