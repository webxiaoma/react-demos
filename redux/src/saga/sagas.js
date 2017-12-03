import { sagaActions } from '../actions_type'
import {put,call,fork,takeEvery,takeLatest,all} from 'redux-saga/effects'


function* add(){
    yield put({type: sagaActions.COUNT_ADD})  // put类似dispatch,但是比dispatch可测试
}

function* decrease(){
    yield put({type: sagaActions.COUNT_DECREASE}) 
}

function* asyncAdd(){ // 异步操作
    const sum = yield call((args)=>{
       return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log(args) // 参数 sum
            resolve();
        },1000)
       })
       
    },'sum')
    yield put({type: sagaActions.COUNT_SUB_ADD, payLoad:2}) 

}

export default function* rootSaga() {
    yield all([
        takeEvery('ADD', add),
        takeEvery('DECTEASE',decrease),
        takeLatest('ASYNC_DECTEASE',asyncAdd)
    ])
  }