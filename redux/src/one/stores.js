import {createStore} from 'redux'


// reducer处理

function counter(state = {result:0},action){
    const count = state.result;
    switch(action.type){
        case 'COUNT_ADD':
          return {result: count +1}
        case 'COUNT_DECREASE':
          return {result: count -1}
        case 'COUNT_ASYNC_ADD':
          return {result: count +1}
        default:
          return state
    }

}



const oneStores = createStore(counter);

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = oneStores.subscribe(() =>
   console.log(oneStores.getState())
)

/*
上边结果结构：
{
  result：0
}

http://cn.redux.js.org/docs/basics/Reducers.html

当然redux官网提出，如果reducer是一个纯函数
并且我们可以拆分reducer,
1.从 redux 引入 combineReducers
2.将所用拆分的reducer 通过combineReducers 处理，
3.将处理后的整个reducer传到createStore 中，这时你可以看看stores.getState()打印出来的东西
4.在count中根据stores结构 改一下result 的获取

*/ 

export {oneStores}

