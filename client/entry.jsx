'use strict';

import 'styles/main.css';

import React from 'react/addons';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import configureStore from 'store/configureStore.jsx';

let store = configureStore();

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.body
);
