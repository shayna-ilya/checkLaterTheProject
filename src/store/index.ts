import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'store/ducks';

const sagaMiddleware = createSagaMiddleware();
// configure middlewares
const middlewares = [sagaMiddleware];
// compose enhancers
const enhancer = compose(applyMiddleware(...middlewares));

// rehydrate store on app start
const initialState = {};

// create store
const store = createStore(rootReducer, initialState, enhancer);

sagaMiddleware.run(function*() {});

// export store singleton instance
export default store;
