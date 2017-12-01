import React,{Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

import * as actions from './actions'
import Show from './show'
import NavBar from '../router' // 路由



class Count extends Component{
    render(){
        const { result, dispatch } = this.props;
        // 处理action 创建函数 将action创建函数合并
        let bindActionCreator = bindActionCreators(actions,dispatch);
        console.log("bindActionCreators:" , bindActionCreator) 
        return(
         <NavBar>
            <div>
                <h2>简易计算器 （redux 异步使用中间件 redux-think）</h2> 
                <Show result={result}>  
                    <button onClick={()=>bindActionCreator.add()}>增加</button>
                    <button onClick={()=>bindActionCreator.decrease()}>减少</button>
                    <button onClick={()=>bindActionCreator.asyncDecrease(dispatch)}>异步增加</button>
                </Show> 
            </div>
         </NavBar>
        )
    }   
}


// 将state中的数据传给展示组件， 生成容器组件
export default  connect(
   state => ({result: state.twoReducer.result})
)(Count)