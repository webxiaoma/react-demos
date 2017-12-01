import React from 'react'
import {Link} from 'react-router-dom'

import './router.css'



// 路由配置
class Nav extends React.Component{
	render(){
		return (
		    <div className='nav-bar'>
		      <Link to='/reudx_one'>reudx</Link>
		      <Link to='/reudx_two'>异步redux-thunk</Link>
		      <Link to='/reudx_three'>异步redux-sag</Link>
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