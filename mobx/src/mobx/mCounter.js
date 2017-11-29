
import React from 'react'
import { inject,observer } from 'mobx-react';
import Show from './mshow'

// ES5 写法

// const Mcounter = inject("stores")(observer(class Mcounter extends React.Component{
//     render() {
//         return ( 
//           <div>
//             <h2>简易计算器（mobx ES5）</h2>         
//             <Show result={this.props.stores.result}>
//                <button onClick={()=>this.props.stores.add()}>增加</button>
//                <button onClick={()=>this.props.stores.decrease()}>减少</button>
//                <button onClick={()=>this.props.stores.asyncAdd()}>异步增加操作</button>
//             </Show>
//          </div>
//         )
//     }
// }))




// ES6 写法

@inject('stores') @observer
class Mcounter extends React.Component{
    constructor(){
       super()
    }
    render() {
        return ( 
          <div>
             <h2>简易计算器（mobx ES6）</h2> 
             <Show result={this.props.stores.result}>  
                <button onClick={()=>this.props.stores.add()}>增加</button>
                <button onClick={()=>this.props.stores.decrease()}>减少</button>
                <button onClick={()=>this.props.stores.asyncAdd()}>异步增加操作</button>
                
             </Show> 
          </div>
        )
    }
}




export default  Mcounter;
