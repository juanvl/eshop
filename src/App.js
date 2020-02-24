import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { PersistGate } from 'redux-persist/integration/react';

import Routes from '~/routes';
import GlobalStyles from '~/styles/global';

import { store, persistor } from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </PersistGate>
  </Provider>
);

export default App;
