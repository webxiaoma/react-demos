import React from 'react'
import {Link} from 'react-router-dom'

import './router.css'



// 路由配置
class Nav extends React.Component{
	render(){
		return (
		    <div className='nav-bar'>
		      <Link to='/reudx_one'>reudx</Link>
		      <Link to='/reudx_two'>reudx异步处理</Link>
		    </div>
		)
	}
}



export default ({children})=>(
    <div>
       <Nav/>
       <div>
          {children}
       </div>
    </div>
)