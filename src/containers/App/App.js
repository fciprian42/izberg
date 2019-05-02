import React, { PureComponent } from 'react'

// Components
import SignUp from '../../components/SignUp';

import styles from './App.scss'

class App extends PureComponent {
    render() {
        return (
            <div className={styles.app}>
                <SignUp />
            </div>
        )
    }
}

export default App