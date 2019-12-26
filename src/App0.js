import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
//import {createStore} from "redux";

//import Routes from './routes';
import configureStore from './store/configureStore'

import createHistory from "history/createBrowserHistory";
//import rootReducer from './reducers';
//import logo from './logo.svg';
//import 'bootstrap/scss/bootstrap.scss';
//import Register from '../components/register';

/*const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>*/

//const store=createStore(rootReducer);

//Add loacl storage
import { PersistGate } from 'redux-persist/integration/react'
// End Add loacl storage

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import { Router, Switch, Route, IndexRoute } from 'react-router-dom';
import PrivateRoute from './auth';
import Layout from './containers/layouts';
import Login from './containers/login';
import ComposeEmail from './containers/composeemail';
import Register from './components/register';

const history = createHistory();

export default class App extends Component {
  render() {
    const { initialState } = this.props

    {/*New Add loacl storage*/}
    const { store, persistor } = configureStore(history, initialState)
    {/* Old
    const store = configureStore(history, initialState)
    End Add loacl storage */}

    return (
        <Provider store={store} key='provider'>
        {/*Add loacl storage*/}
        <PersistGate loading={null} persistor={persistor}>
        {/*End Add loacl storage*/}
              {//}<Routes history={history} store={store} />
            }
            <ConnectedRouter history={history}>
              <div>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <PrivateRoute exact path="/" component={Layout} />
                  <PrivateRoute exact path="/compose_email" component={ComposeEmail} />
              </div>

            </ConnectedRouter>
        {/*Add loacl storage*/}
        </PersistGate>
        {/*//End Add loacl storage*/}
        </Provider>
    );
  }
}
