import { sagaActions } from '../actions_type'
import {put,takeEvery} from 'redux-saga/effects'


function* add(){
    console.log(333)
    yield put({type: sagaActions.COUNT_ADD})  // put类似dispatch,但是比dispatch可测试
}

function* decrease(){
    yield put({type: sagaActions.COUNT_DECREASE}) 
}



function* watch(){
    yield*  takeEvery('ADD', add)

}

export default function* root () {
    yield [
        watch()
    ]
  }