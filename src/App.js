import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthProvider } from './firebase/Auth';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';

import './app.scss';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/chat' component={Chat} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
