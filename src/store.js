import { createStore, combineReducers } from 'redux'
import { connectRoutes } from 'redux-first-router'
import { createBrowserHistory } from 'history'

import userReducer from './reducers/userReducer'

const history = createBrowserHistory()
const routes = { home: '/' }

const { reducer } = connectRoutes(history, routes);

const store = createStore(
    combineReducers({location: reducer, user: userReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store