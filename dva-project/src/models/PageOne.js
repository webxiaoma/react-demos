import modelExtends from 'dva-model-extend'
import {commonModel} from './model'

export default modelExtends(commonModel,{
  
    namespace: 'PageOne', 
  
    state: {
      result:0,
    },
  
  })


