import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Routerdom from './router_dom'
import Routerconfig from './router_config/routerConfig'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React - Router</h1>
        </header>
        <BrowserRouter>
           <Switch>  
                <Route path ='/router-dom/one' component={Routerdom} />
                <Route path ='/router-config' component={Routerconfig}/>

                <Route path ='/' render={() => <Redirect to="/router-dom/one"/>}/>
                <Route path ='/router-dom' render={() => <Redirect to="/router-dom/one"/>} />
                
           </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
