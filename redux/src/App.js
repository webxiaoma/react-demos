import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware  from 'redux-saga'
// Provider 组件可以将stores 中的数据分发给其下的所有组件
import {Provider} from 'react-redux' 

import Countone from './one/count'
import Counttwo from './two/count'
import Countsaga from './saga/count'

// 引入拆分的reducer
import oneReducer from './one/reducer' // one 文件的reducer
import twoReducer from './two/reducer' // two 文件的reducer
import sagaReducer from './saga/reducer' // saga 文件的reducer

// 引入saga文件中的saga
import sagas from './saga/sagas'

// 合并拆分的reducer
const reducer = combineReducers({oneReducer,twoReducer,sagaReducer})

// 创建saga中间并件sagas传入
const SagaMiddleware = createSagaMiddleware();

// 将reducer 传入store
const  Stores = createStore(
  reducer,
  applyMiddleware(thunk,SagaMiddleware) // 使用中间件thunk 来处理 异步操作 two文件用到
);

SagaMiddleware.run(sagas) 


// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = Stores.subscribe(() =>
   console.log('数据更新了：',Stores.getState())
)


/*
上边state结构：
{
  oneReducer: {result:0}
}

http://cn.redux.js.org/docs/basics/Reducers.html

redux官网提出，如果reducer是一个纯函数
并且我们可以拆分reducer,
1.从 redux 引入 combineReducers
2.将所用拆分的reducer 通过combineReducers 处理，
3.将处理后的整个reducer传到createStore 中，这时你可以看看stores.getState()打印出来的东西
4.在count中根据stores结构 改一下result 的获取

*/ 


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redux</h1>
        </header>
        <div>
          <Provider store ={Stores}> 
            <BrowserRouter>
              <Switch>
                  <Route path='/reudx_one' component={Countone}/>    
                  <Route path='/reudx_two' component={Counttwo}/> 
                  <Route path='/reudx_three' component={Countsaga}/>   
                  <Route path='/' render={() => <Redirect to="/reudx_one"/>}/>
              </Switch>
            </BrowserRouter>
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
