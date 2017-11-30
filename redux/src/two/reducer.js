import { twoActions } from '../actions_type'
// reducer处理

export default function counter(state = {result:0},action){
  
    const count = state.result;
    switch(action.type){
        case twoActions.COUNT_ADD:
          return {result: count +1}
        case twoActions.COUNT_DECREASE:
          return {result: count -1}
        case twoActions.COUNT_SUB_ADD:  // 异步处理
          return {result: count + action.number}
        default:
          return state
    }

}




