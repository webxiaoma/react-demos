import { oneActions } from '../actions_type'
// reducer处理

export default function oneCounter(state = {result:0},action){
    const count = state.result;
    switch(action.type){
        case oneActions.COUNT_ADD:
          return {result: count +1}
        case oneActions.COUNT_DECREASE:
          return {result: count -1}
        default:
          return state
    }

}





