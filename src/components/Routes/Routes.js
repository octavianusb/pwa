import React from 'react'
import { Route, Switch } from 'react-router-dom'

import posts from '../../blog-posts.json'

// COMPONENTS
import Home from '../Home/Home'
import PostDetail from '../PostDetail/PostDetail'
import About from '../About/About'
import NotFound from '../NotFound/NotFound'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home posts={posts.posts} />} />
      <Route path='/about' component={About} />
      <Route path='/post/:slug' component={props => {
        const post = posts.posts.filter(post => props.match.params.slug === post.slug)
        return <PostDetail post={post[0]} />
      }} />

      <Route component={NotFound} />
    </Switch>
  )
}
