import React, { PureComponent } from 'react'
import { TextField, Button } from '@material-ui/core'

import styles from './Signup.scss'

class Signup extends PureComponent {
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
    }

    
    handleChange(event) {
        if (event && event.target) {
            this.setState({
                [event.target.id]: event.target.value
            }) 
        }
    }

    render() {
        return (
            <form onSubmit={(e) => {this.props.onSubmit(e, this.state.username)}} className={styles.form} autoComplete='off'>
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

                        <Button type='submit' variant="contained" color="primary" style={{marginTop: 20}}>
                            Let's go
                        </Button>
            </form>
        )
    }
}

export default Signup