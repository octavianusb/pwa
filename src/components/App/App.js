import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import Routes from '../Routes/Routes'
import Header from '../Header/Header'

import styles from './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className={styles.container}>
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
