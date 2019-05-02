import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

// Containers
import App from './containers/App'

// Components
import Navbar from './components/Navbar'

const Routes = ({}) => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />

                <Route exact path='/' component={App} />
            </Router>
        </Provider>
    )
}

export default Routes