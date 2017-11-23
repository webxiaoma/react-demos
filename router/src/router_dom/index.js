
import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Layout from '../layout';

import One from './one'
import Two from './two'

const fun = ()=>{
	console.log('getUserConfirmation 方法')
}



export default () => (
   <Layout>
      <h3>router-dom 例子</h3>
	   <BrowserRouter getUserConfirmation={fun()}>
           <Switch>
              <Route path='/router-dom/one' component={One} children={({ match }) =>(
                   <div>{match}</div>
              	)}/>
              <Route path='/router-dom/two' component={Two}/>
              <Route path ='/router-dom/three' render={() => <Redirect to="/router-dom/one"/>}/>
           </Switch>
	   </BrowserRouter>
   </Layout>
)



