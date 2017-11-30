
import { twoActions } from '../actions_type'


// 这里我们用了action 创建函数，在one中我们没有用创建函数


export  function add(){
   return {
     type: twoActions.COUNT_ADD
   }
}

export function decrease(){
   return {
    type: twoActions.COUNT_DECREASE
   }
}


function subAdd(number){ // 异步调用后要dispatch 的 action
    return {
      type:twoActions.COUNT_SUB_ADD,
      number
    }
}

export function asyncDecrease (dispatch){ // 异步调用
    return () =>{  // 因为中间件thunk的作用，这里可以返回一个函数对象
        setTimeout(()=>{
            dispatch(subAdd(2))
        },1000)
    }
}


