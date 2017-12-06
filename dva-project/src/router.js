import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

import MainLayout from './components/MainLayout'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
          <Route path="/" exact render={() => <Redirect to="/one" />} />
          <Route path="/one" exact component = {require('./routes/PageOne')} />
          <Route path="/two" exact component = {require('./routes/PageTwo')} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;




