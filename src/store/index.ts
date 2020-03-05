import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from 'store/ducks';

const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ['authReducer'],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: ['counterReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
// configure middlewares
const middlewares = [sagaMiddleware];
// compose enhancers
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

// rehydrate store on app start
const initialState = {};

// create store
const store = createStore(persistedReducer, initialState, enhancer);
const persistor = persistStore(store);
sagaMiddleware.run(function*() {});

// export store singleton instance
export { store, persistor };
