import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Main from './src/screens/Main/Main';

import rootReducer from './src/redux/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
