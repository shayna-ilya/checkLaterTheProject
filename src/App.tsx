import React from 'react';
import { i18n } from 'translation';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { Navigation } from 'navigation';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    return (
        <>
            <SafeAreaProvider>
                <I18nextProvider i18n={i18n}>
                    <ActionSheetProvider>
                        <Provider store={store}>
                            <PersistGate loading={null} persistor={persistor}>
                                <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
                                <Navigation />
                            </PersistGate>
                        </Provider>
                    </ActionSheetProvider>
                </I18nextProvider>
            </SafeAreaProvider>
        </>
    );
};

export default App;
