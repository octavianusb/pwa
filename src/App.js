import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import posts from './blog-posts.json'

// CSS
import styles from './App.css'

// COMPONENTS
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import PostDetail from './components/PostDetail/PostDetail'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className={styles.container}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/post/:slug' component={props => {
                const post = posts.posts.filter(post => props.match.params.slug === post.slug)
                return <PostDetail post={post} />
              }} />

              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
