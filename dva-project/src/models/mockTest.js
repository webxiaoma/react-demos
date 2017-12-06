import modelExtends from 'dva-model-extend' // 合并对象
import {commonModel} from './model'

import {query} from '../services/mock'

export default modelExtends(commonModel,{
    namespace: 'mockTest', 

    state: {
      result:{
        id:'',
        isMarried:'',
      },
    },
    effects: {
      *fetch({payload},{call,put}){
         const value = yield call(query,payload);
         console.log(value.data.data.list[0].name)
        //  yield put({type: 'updateState', payload:{result:value.data.data}})
      }
    }
  })

