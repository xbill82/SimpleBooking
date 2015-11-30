import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookingAppReducer from '../reducers/index.jsx';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(bookingAppReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index.jsx', () => {
      const nextReducer = require('../reducers/index.jsx');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
