import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Routes from './routes'

// Styles & Reset CSS
import 'normalize.css'
import './index.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1834AB'
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    useNextVariants: true,
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('app')
)