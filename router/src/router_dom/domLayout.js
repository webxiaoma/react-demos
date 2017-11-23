
import React from 'react';
import {Link} from 'react-router-dom';
import './style.less';

class Nav extends React.Component{
	render(){
		return (
		    <div className="layout-nav">
		      <Link to='/router-dom/one'>one</Link>
		      <Link to='/router-dom/two'>two</Link>
		      <Link to='/router-dom/three'>从定向到one</Link>
		    </div>
		)
	}
}

export default ({children}) => (
	<div>
	    <Nav/>
	    <div  className='content'>{children}</div>
	</div>   
)

