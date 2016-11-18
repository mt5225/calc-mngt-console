import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import mngtConsoleApp from './reducers'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'
import RecordList from './components/RecordList'
import HospitalEditor from './components/HospitalEditor'


const logger = createLogger()

const store = createStore(
  mngtConsoleApp,
  applyMiddleware(logger, thunk, routerMiddleware(browserHistory))
)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/list" component={RecordList} />
        <Route path="/edit" component={HospitalEditor} />
        <Route path="*" component={RecordList} />
      </Router>
  </Provider>,
  document.getElementById('root')
)
