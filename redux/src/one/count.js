import React,{Component} from 'react'
import {connect} from 'react-redux'

import {countOne} from './actions'
import Show from './show'
import NavBar from '../router' // 路由



class Count extends Component{
    render(){
        return(
         <NavBar>
            <div>
                <h2>简易计算器 （redux 同步）</h2> 
                <Show result={this.props.result}>  
                    <button onClick={()=>this.props.add()}>增加</button>
                    <button onClick={()=>this.props.decrease()}>减少</button>
                </Show> 
            </div>
         </NavBar>
        )
    }
}


//  处理 展示组件，生成容器组件

const mapStateToProps = (state, ownProps) => { // 处理state
    return {
        result: state.oneReducer.result
    }
}


const mapDispatchToProps = (dispatch, ownProps) => { // 方法
    return {
        add: () => {
            dispatch(countOne.add)
        },
        decrease:() =>{
            dispatch(countOne.decrease)
        },
    }
}


// 将数据传给展示组件， 导出容器组件
export default  connect(
    mapStateToProps,
    mapDispatchToProps // 该参数不是必须的
)(Count)