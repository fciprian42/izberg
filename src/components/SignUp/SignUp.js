import React, { PureComponent } from 'react'
import { TextField, Button, Divider, Paper, Typography } from '@material-ui/core'
import { Animated } from 'react-animated-css'
import { userConstants } from '../../constants/userConstants'
import { connect } from 'react-redux'

import styles from './Signup.scss'

class Signup extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            error: false,
            validations: {
                isValid: false,
                score: 0
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    
    handleChange(event) {
        let score = 0

        if (this.state.password.length > 6) {score++}
        if (this.state.password.indexOf('\n') === -1 && this.state.password.indexOf(' ') === -1) {score++}
        if (/[A-Z]/.test(this.state.password)) {score++}
        if (/[\^$.|?*+()]/.test(this.state.password)) {score++}

        if (event && event.target) {
            this.setState({
                [event.target.id]: event.target.value,
                validations: {
                    score: score
                }
            }) 
        }
    }

    handleSubmit(event) {
        const { dispatch } = this.props

        event.preventDefault()

        if (this.state.passwordConfirm === this.state.password && 
            this.state.password.length > 6 &&
            this.state.password.indexOf('\n') === -1 && 
            this.state.password.indexOf(' ') === -1 &&
            /[A-Z]/.test(this.state.password) &&
            /[\^$.|?*+()]/.test(this.state.password)
            ) {
            dispatch({type: userConstants.SIGNUP, data: this.state.username})
        } else {
            let score = 0

            if (this.state.password.length > 6) {score++}
            if (this.state.password.indexOf('\n') === -1 && this.state.password.indexOf(' ') === -1) {score++}
            if (/[A-Z]/.test(this.state.password)) {score++}
            if (/[\^$.|?*+()]/.test(this.state.password)) {score++}

            this.setState({
                error: true,
                validations: {
                    ...this.state.validations,
                    score: score
                }
            })
        }
    }

    render() {
        return (<>
            {this.state.error && <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={this.state.error} className={styles.errorForm} style={{backgroundColor: `
                ${this.state.password !== this.state.passwordConfirm ? '#E91E63' : this.state.validations.score <= 2 && this.state.passwordConfirm === this.state.password ? '#E91E63' : this.state.validations.score > 2 && this.state.validations.score < 4 && this.state.passwordConfirm === this.state.password ? '#FFC107' : '#4CAF50'}
            `}}>
                {this.state.passwordConfirm !== this.state.password && <p>Password re-typed must match password.</p>}
                {this.state.validations.score <= 2 && this.state.passwordConfirm === this.state.password && <p>Password strength: very weak.</p>}
                {this.state.validations.score > 2 && this.state.validations.score <= 3 && this.state.passwordConfirm === this.state.password && <p>Password strength: weak.</p>}
                {this.state.validations.score >= 4 && this.state.passwordConfirm === this.state.password && <p>Password strength: strong.</p>} 
            </Animated>}
            <Paper className={styles.boxForm}>
                <Typography variant='h4' color='inherit' style={{paddingBottom: 10}}>
                    Join us at Izberg !
                </Typography>
                <Divider />
                <form onSubmit={this.handleSubmit} className={styles.form} autoComplete='off'>
                    <TextField
                        id='username'
                        tyoe='text'
                        label='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                        margin='normal'
                        required
                    />

                    <TextField
                        id='password'
                        label='Password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        margin='normal'
                        required
                    />

                    <TextField
                        id='passwordConfirm'
                        label='Re-type Password'
                        type='password'
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                        margin='normal'
                        required
                    />

                    <Button type='submit' variant="contained" color="primary" style={{marginTop: 20}}>
                        Let's go
                    </Button>
                </form>
            </Paper>
        </>)
    }
}

export default connect()(Signup)