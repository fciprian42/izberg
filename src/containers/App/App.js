import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'

import styles from './App.scss'

import Signup from '../../components/Signup'

class App extends PureComponent {
    render() {
        const { username, isRegistred } = this.props.store
        return (
            <div className={styles.app}>
                {!isRegistred && <Signup />}
                {isRegistred && <div>
                    <Typography variant='h4' color='inherit'>
                        Welcome, {username && username}
                    </Typography>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        store: {
            username: state.user.username,
            isRegistred: state.user.isRegistred
        }
    };
};

export default connect(mapStateToProps)(App)