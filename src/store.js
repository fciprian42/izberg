import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { connectRoutes } from 'redux-first-router'

import userReducer from './reducers/userReducer'

const history = createBrowserHistory()
const routes = { home: '/' }

const { reducer, middleware } = connectRoutes(history, routes);

const store = createStore(
    combineReducers({location: reducer, user: userReducer}),
    {},
    compose(applyMiddleware(middleware))
)

export default store