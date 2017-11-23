import React from 'react'

export default Layout extends React.Component{
	render(){
		return(
           <div>
               {this.props.children}
           </div>
		)
	}
}