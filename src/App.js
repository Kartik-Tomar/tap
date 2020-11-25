import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Chat from './pages/Chat/Chat';

import './app.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/chat' component={Chat} />
      </Switch>
    </Router>
  );
};

export default App;
