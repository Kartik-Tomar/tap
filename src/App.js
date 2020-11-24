import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={Home} />
        <Route exact path='/login-signup' render={Login} />
        <Route exact path='/chat' render={Chat} />
      </Switch>
    </Router>
  );
};

export default App;
