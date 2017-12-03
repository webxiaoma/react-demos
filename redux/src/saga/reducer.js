import { sagaActions } from '../actions_type'
// reducer处理

export default function oneCounter(state = {result:0},action){
    const count = state.result;
    switch(action.type){
        case sagaActions.COUNT_ADD:
          return {result: count +1}
        case sagaActions.COUNT_DECREASE:
          return {result: count -1}
        case sagaActions.COUNT_SUB_ADD:
          return {result: count + action.payLoad}
        default:
          return state
    }

}





