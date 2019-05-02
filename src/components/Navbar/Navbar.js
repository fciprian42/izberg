import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import styles from './Navbar.scss'

const Navbar = ({}) => {
    return (<>
        <AppBar position='static'>
            <Toolbar className={styles.flex}>
                <div>
                    <img className={styles.logo} src='https://cdn.welcometothejungle.co/uploads/organization/logo/3238/150487/izberg-marketplace.png' height={40} />
                </div>
                <Typography variant='h6' color='inherit'>
                    Izberg
                </Typography>
            </Toolbar>
        </AppBar>
    </>)
}

export default Navbar