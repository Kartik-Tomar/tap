import React, { useContext } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthContext } from './firebase/Auth';
import Home from './pages/Home/Home';
import MyProfile from './pages/MyProfile/MyProfile';
import Chat from './pages/Chat/Chat';

const Routes = () => {
  const { pending } = useContext(AuthContext);
  return (
    <>
      {!pending && (
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/my-profile' component={MyProfile} />
            <Route exact path='/chat' component={Chat} />
          </Switch>
        </Router>
      )}
    </>
  );
};

export default Routes;
