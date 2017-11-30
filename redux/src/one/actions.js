import { oneActions } from '../actions_type'

// 这里我们没有用创建函数，在two中我们用了创建函数
const countOne = {
    add: {
        type: oneActions.COUNT_ADD,
    },
    decrease: {
        type: oneActions.COUNT_DECREASE
    },
}


export {countOne} 