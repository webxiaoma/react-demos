import React from 'react'
import {Link} from 'react-router-dom'

import './layout.less'

class Nav extends React.Component{
	render(){
		return (
		    <div className='nav-bar'>
		      <Link to='/router-dom'>react-router-dom</Link>
		      <Link to='/router-config'>react-router-config</Link>
		    </div>
		)
	}
}
   
export default ({children})=>(
    <div>
       <Nav/>
       <div className='warp-div'>
         {children}
       </div>
    </div>
)	
