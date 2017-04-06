import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import App from './App';

it('<App/> component renders without crashing', () => {
  let store = createStore(reducer, window['devToolsExtension'] ? window['devToolsExtension']() : f => f)
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
});
