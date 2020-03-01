import React from 'react';
import { i18n } from 'translation';
import { I18nextProvider } from 'react-i18next';
import { Navigation } from 'navigation';
import { Provider } from 'react-redux';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <ActionSheetProvider>
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <Navigation />
                        </PersistGate>
                    </Provider>
                </ActionSheetProvider>
            </I18nextProvider>
        </>
    );
};

export default App;
