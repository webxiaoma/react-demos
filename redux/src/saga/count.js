import React,{Component} from 'react'
import {connect} from 'react-redux'
import {put} from 'redux-saga/effects'

import Show from './show'
import NavBar from '../router' // 路由



class Count extends Component{
    render(){
        const {dispatch} = this.props;
        console.log(this.props)
        return(
         <NavBar>
            <div>
                <h2>简易计算器 （redux 异步redux-saga）</h2> 
                <Show result={this.props.result}>  
                    <button onClick={()=>dispatch({type:'ADD'})}>增加</button>
                    <button onClick={()=>dispatch({type:'DECTEASE'})}>减少</button>
                    <button onClick={()=>dispatch({type:'ASYNC_DECTEASE'})}>延迟1秒加2</button>
                    <p>
                       <button onClick={()=>dispatch({type:'TAKE_ADD'})}>先点击我，在点击右边按钮,才会加3</button>
                       <button onClick={()=>dispatch({type:'TAKE_SUCCESS'})}>先点击左边按钮，在点击我，才会加3</button>
                    </p>
                </Show> 
            </div>
         </NavBar>
        )
    }
}

// 将数据传给展示组件， 导出容器组件
export default  connect(
   (state)=>({result:state.sagaReducer.result})
)(Count)