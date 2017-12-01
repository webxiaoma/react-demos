import { sagaActions } from '../actions_type'
import {put,takeEvery} from 'redux-saga/effects'


function* add(){
    console.log(333)
    yield put({type: sagaActions.COUNT_ADD})  // put类似dispatch,但是比dispatch可测试
}

function* decrease(){
    yield put({type: sagaActions.COUNT_DECREASE}) 
}



export default function* rootSaga() {
    yield [
        takeEvery('ADD', add),
    ]
  }