import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import GlobalStyles from '~/styles/global';
import theme from '~/styles/theme';

import { store, persistor } from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
