
import {extendObservable,observable,action,runInAction,useStrict} from 'mobx';

/*
不允许在动作之外进行状态修改,也就是修改状态我们必须通过action、runInAction
否则会报错

*/ 
useStrict(true)



// *********** ES5 写法

// const  states = function () {
//   extendObservable(this,{
//     result: 0,
//     add: action(function(){
//     	this.result++;
//     }),
//     decrease: action(function(){
//     	this.result--;
//     }),
//     asyncAdd: action(function(){ // 处理异步
//     	setTimeout(()=>{
//           runInAction(()=>this.result++); // 异步处理使用runInAction
//     	},1000)
//     })
    
//   })
// }



class states {
   @observable result = 0
   @action add = ()=>{
     this.result++;
   }
   @action decrease = ()=>{
      this.result--;
   }
   @action asyncAdd = () =>{ // 处理异步
    	setTimeout(()=>{
          runInAction(()=>this.result++); // 异步处理使用runInAction
    	},1000)
   }
}


export default new states()




