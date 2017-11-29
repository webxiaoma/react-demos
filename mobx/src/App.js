import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider} from 'mobx-react'
import stores from './mobx/store'

import Mobx from './mobx/mCounter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mobx</h1>
        </header>
        <div>
          <Provider stores = {stores}>
            <Mobx/>
          </Provider>
        </div>  
      </div>
    );
  }
}

export default App;
