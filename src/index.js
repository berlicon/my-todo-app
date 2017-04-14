import React from 'react'
import ReactDOM from 'react-dom'
import { createStore/*, combineReducers, applyMiddleware*/ } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, /*Link,*/ browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import createHistory from 'history/createBrowserHistory'
//import { Route } from 'react-router'
//import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import './index.css'
import App from './components/App'
import About from './components/About'
import reducers from './reducers'

//react-redux-router - DOES NOT WORK!!!
// const history = createHistory()
// const middleware = routerMiddleware(history)
// const store = createStore(combineReducers({
//     ...reducers,
//     router: routerReducer
//   }),
//   applyMiddleware(middleware),
//   window['devToolsExtension'] ? window['devToolsExtension']() : f => f)

const store = createStore(reducers, window['devToolsExtension'] ? window['devToolsExtension']() : f => f)

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
    </MuiThemeProvider>,
  document.getElementById('root')
);
      // <App />

      //react-redux-router - DOES NOT WORK!!!
      // <ConnectedRouter history={history}>
      //   <div>
      //     <Route exact path="/" component={App}/>
      //     <Route path="/about" component={About}/>
      //     <Route path="/home" component={App}/>
      //   </div>
      // </ConnectedRouter>
