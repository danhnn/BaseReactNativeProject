import { compose, createStore, applyMiddleware } from 'redux';
import reducers from "./reducers";
import rootSaga from "./sagas";
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
const sagaMiddleware = createSagaMiddleware();
// Store
export const store = createStore(persistedReducer
  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(sagaMiddleware, thunk)
  )
);
let persistor = persistStore(store)
sagaMiddleware.run(rootSaga);

export default class Store extends PureComponent {

  render() {
    return (
      <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          {this.props.children}
        </PersistGate>
      </Provider>
    )
  }
}

