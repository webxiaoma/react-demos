import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
// Provider 组件可以将stores 中的数据分发给其下的所有组件
import {Provider} from 'react-redux' 
import Count from './one/count'
import {oneStores} from './one/stores'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redux</h1>
        </header>
        <div>
          <Provider store ={oneStores}> 
            <BrowserRouter>
              <Switch>
                  <Route path='/reudx_one' component={Count}/>    
              </Switch>
            </BrowserRouter>
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
