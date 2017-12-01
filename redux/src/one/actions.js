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

/*
注释：action中type是必须要写的，另外其的键名不是必须的，你可以任意起，不过社区给了一个标准，

{
    type:""，       // 必写，必须是字符串
    payload: {},    // 属性可以是任何类型的值。它代表了行动的有效载荷（例如交互时传递的一些数据）
    error: true,    // 错误信息true则可以将可选属性设置为。
    meta:"",        // 属性可以是任何类型的值。它旨在用于任何不属于有效负载的额外信息。

}


*/ 
