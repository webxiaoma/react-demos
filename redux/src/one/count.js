import React,{Component} from 'react'
import {connect} from 'react-redux'

import {count} from './actions'
import Show from './show'
import NavBar from '../router' // 路由



class Count extends Component{
    render(){
        return(
         <NavBar>
            <div>
                <h2>简易计算器 （同步）</h2> 
                <Show result={this.props.result}>  
                    <button onClick={()=>this.props.add()}>增加</button>
                    <button onClick={()=>this.props.decrease()}>减少</button>
                </Show> 
            </div>
         </NavBar>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        result: state.result
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: () => {
            dispatch(count.add)
        },
        decrease:() =>{
            dispatch(count.decrease)
        },
    }
}


// 将数据传给展示组件， 导出容器组件
export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Count)