import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '@client/store';

import { App } from './routes';

const AppRoot = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const appRoot = document.getElementById('app-root');

ReactDOM.render(<AppRoot />, appRoot);
