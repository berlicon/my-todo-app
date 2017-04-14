import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import App from './App';
import About from './About'
import { Router, Route, /*Link,*/ browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('<App/> component renders without crashing', () => {
  let store = createStore(reducer, window['devToolsExtension'] ? window['devToolsExtension']() : f => f)
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/home" component={App}/>
          <Route path="/categories/:id" component={App}/>
        </Router>
      </Provider>
    </MuiThemeProvider>, div);
});
