import modelExtends from 'dva-model-extend' // 合并对象
import {commonModel} from './model'

import {reqPost,reqGet} from '../services/mock'

export default modelExtends(commonModel,{
    namespace: 'mockTest', 

    state: {
      result:{
        id:'',
        isMarried:'',
        name:'',
        other:{
          first:'',
          middle:'',
          last:'',
        } 
      },
    },
    effects: {
      *fetch({payload},{call,put}){

         const value = yield call(reqPost,payload);  // post 请求
        //  const value = yield call(reqGet,payload);  // get 请求
        //  console.log(value)
         if(value.data.success){
            yield put({type: 'updateState', payload:{result:value.data.newData}})
         }
      }
    }
  })

