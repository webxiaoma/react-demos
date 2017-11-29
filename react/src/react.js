
import React from 'react'


const Show = (props) => {
    return(
        <div>
            <div>计算结果：{ props.result }</div>

            {props.children}
        </div>
    )
}



class Counter extends React.Component{
   constructor(props){
     super(props)
     this.state = {
        result: 0,
     }
   }
   add(){
     let newResult = this.state.result;
     newResult++;
     this.setState({
        result: newResult,
     })
   }
   decrease(){
    let newResult = this.state.result;
    newResult--;
     this.setState({
        result: newResult,
     })
   }

   render(){
       return(
         <div>
            <h2>简易计算器（react）</h2>         
            <Show result={this.state.result}>
               <button onClick={()=>this.add()}>增加</button>
               <button onClick={()=>this.decrease()}>减少</button>
            </Show>
         </div>

        )
   }

}

export  { Counter}