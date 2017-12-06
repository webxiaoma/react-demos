import modelExtends from 'dva-model-extend'
import {commonModel} from './model'

import key from 'keymaster' // 键盘事件

export default modelExtends(commonModel,{
    namespace: 'PageTwo',
  
    state: {
        result:0,
    },
  
    effects: { // 异步操作
      *asyncAdd({ payload },{ call, put, select }){
        const sumOne = yield call(function(){
           return new Promise((reslove,reject)=>{
               setTimeout(function(){
                 reslove(2)
               },1000)
           })
        })
        // select 可以根据namespace，获取 store里的相对应的model中的state数据
        const newResultOne = yield select(store=>store.PageTwo)  
        console.log(newResultOne)
        yield put({ type: 'updateState', payload:{result:newResultOne.result + sumOne} });
      },
      *asyncDecrease({ payload },{ call, put, select }){
        const sumTwo = yield call(function(){
            return new Promise((reslove,reject)=>{
                setTimeout(function(){
                  reslove(2)
                },1000)
            })
         })
         const newResultTwo = yield select(store=>store.PageTwo) 
         yield put({ type: 'updateState',  payload:{result:newResultTwo.result - sumTwo} });
      }
    },
  


    // 我们这里将reducer 分离的，当然如果你不愿意分离，也是可以的
    // reducers: {

    // },


    // Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。
    // 数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。

    subscriptions: {
        setup({ dispatch, history }) {  // 监听 history 变化，当进入 `/` 时触发 `asyncAdd` action
            return history.listen(({ pathname }) => {
                if (pathname === '/two') {
                  dispatch({ type: 'asyncAdd' });
                }
            });
        },
        keyboardWatcher({ dispatch }) { // 键盘监听
            key('up', () => { dispatch({type:'asyncAdd'}) });
            key('down', () => { dispatch({type:'asyncDecrease'}) });
        },
    }
    
})