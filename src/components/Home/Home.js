import React from 'react'
import posts from '../../blog-posts.json'

// COMPONENTS
import Post from '../Post/Post'

export default function () {
  return (
    <div>
      {posts.posts.map(post => <Post {...post} key={post.slug} />)}
    </div>
  )
}
