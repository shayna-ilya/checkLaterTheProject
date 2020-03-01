import React from 'react';
import { Navigation } from 'navigation';
import { Provider } from 'react-redux';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import configureStore from './state';

const App = () => {
    return (
        <>
            <ActionSheetProvider>
                <Provider store={configureStore}>
                    <Navigation />
                </Provider>
            </ActionSheetProvider>
        </>
    );
};

export default App;
