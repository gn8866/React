import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import itemApp from './reducer'
import fetchMiddleware from './fetchmiddleware'
import App from './App'
import PageA from './PageA';
import PageB from './PageB';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';

// @Store
//
// store = createStore(reducer)
// 使用redux dev tools
// 如果要正常使用是使用 const store = createStore(dealItem, applyMiddleware(fetchMiddleware))
const store = createStore(itemApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(fetchMiddleware))

const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */}
    <Router history={history} children={ App }>
      <Route path="/" component={App}>
        <Route path="PageA" component={PageA}/>
        <Route path="PageB" component={PageB}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)