import React from 'react'

// COMPONENTS
import Post from '../Post/Post'

export default function PostDetail (props) {
  return (
    <div><Post {...props.post} /></div>
  )
}
