import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '@client/store';

const Component = () => (
  <Provider store={store}>
    <div>
      <h1>TNY Tech Test Boilerplate App</h1>
      <p>Happy coding!</p>
    </div>
  </Provider>
);

const AppRoot = () => <Provider store={store}><Component /></Provider>;

const appRoot = document.getElementById('app-root');

ReactDOM.render(<AppRoot />, appRoot);
