import React from 'react';
import { Navigation } from 'navigation';
import { Provider } from 'react-redux';
import configureStore from './state';

const App = () => {
    return (
        <>
            <Provider store={configureStore}>
                <Navigation />
            </Provider>
        </>
    );
};

export default App;
