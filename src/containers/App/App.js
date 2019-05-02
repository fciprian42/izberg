import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Paper, Typography, Divider } from '@material-ui/core'
import { userConstants } from '../../constants/userConstants'

import styles from './App.scss'

import Signup from '../../components/Signup'

class App extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event, username) {
        const { dispatch } = this.props

        event.preventDefault()
        
        dispatch({type: userConstants.SIGNUP, data: username})
    }

    render() {
        const { username, isRegistred } = this.props
        return (
            <div className={styles.app}>
                {!isRegistred && <Paper className={styles.boxForm}>
                    <Typography variant='h4' color='inherit' style={{paddingBottom: 10}}>
                        Join us at Izberg !
                    </Typography>
                    <Divider />
                    <Signup onSubmit={this.handleSubmit} />
                </Paper>}
                {isRegistred && <div>
                    Welcome, {username && username}
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.user.username,
        isRegistred: state.user.isRegistred
    };
};

export default connect(mapStateToProps)(App)