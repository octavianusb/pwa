import React from 'react'

// COMPONENTS
import Post from '../Post/Post'

export default function ({posts}) {
  return (
    <div>
      { posts.length
        ? posts.map(post => <Post {...post} key={post.slug} titleLink />)
        : <p>{'Awaiting posts'}</p>
      }
    </div>
  )
}
