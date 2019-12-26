import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import { Router, Switch, Route, IndexRoute } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes';
import configureStore from './store/configureStore'

const history = createHistory();

export default class App extends Component {
  render() {
    const { initialState } = this.props
    const { store, persistor } = configureStore(history, initialState)

    return (
        <Provider store={store} key='provider'>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
              <Routes store={store}/>
            </ConnectedRouter>
        </PersistGate>
        </Provider>
    );
  }
}
