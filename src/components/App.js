import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import logo from '../logo.svg';
import './App.css';
import Header from './header.js';
import Main from './main.js';
import  reducer  from '../redux/reducers/reducers';

const middleware = applyMiddleware(ReduxThunk, createLogger());
const store = createStore(reducer, middleware);

class App extends Component {
  render() {
    return (

        <Provider store={store}>
          <div>
            <Header />
            <Main />
          </div>
        </Provider>
    );
  }
}

export default App;
