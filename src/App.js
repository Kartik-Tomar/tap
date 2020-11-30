import React from 'react';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';

import store from './redux/store';
import { AuthProvider } from './firebase/Auth';
import Routes from './Routes';

import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

toast.configure();
const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
};

export default App;
