import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
// console.log(dva)
import MainLayout from './components/MainLayout'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
          <Route path="/" exact render={() => <Redirect to="/one" />} />
          <Route path="/one" exact component = {require('./routes/PageOne')} />
          <Route path="/two" exact component = {require('./routes/PageTwo')} />
          <Route path="/mock" exact component = {require('./routes/mockTest')} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;




