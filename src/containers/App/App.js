import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Animated } from 'react-animated-css'
import { Typography, Avatar } from '@material-ui/core'

import styles from './App.scss'

import Signup from '../../components/Signup'

class App extends PureComponent {
    render() {
        const { username, isRegistred } = this.props.store
        return (
            <div className={styles.app}>
                {!isRegistred && <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={!isRegistred}>
                    <Signup />
                </Animated>}
                {username && isRegistred && <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={isRegistred} className={styles.flex}>
                    <Avatar className={styles.avatar}>{username && username.charAt(0).toUpperCase()}</Avatar>
                    <Typography variant='h4' color='inherit'>
                        Welcome, {username && username}
                    </Typography>
                </Animated>}
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