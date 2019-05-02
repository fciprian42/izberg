import React, { PureComponent } from 'react'
import { Paper, Typography, Divider, TextField, Button } from '@material-ui/core'

import styles from './SignUp.scss'

class SignUp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',

            validations: {
                isValid: false,
                score: 0
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        if (event && event.target) {
            this.setState({
                [event.target.id]: event.target.value
            }) 
        }
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <>
                <Paper className={styles.boxForm}>
                    <Typography variant='h4' color='inherit' style={{paddingBottom: 10}}>
                        Join us at Izberg !
                    </Typography>
                    <Divider />
                    <form onSubmit={this.handleSubmit} className={styles.form} autoComplete='off'>
                        <TextField
                            id='username'
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

                        <Button variant="contained" color="primary" style={{marginTop: 20}}>
                            Let's go
                        </Button>
                    </form>
                </Paper>
            </>
        )
    }
}

export default SignUp