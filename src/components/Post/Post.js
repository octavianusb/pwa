import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Post.css'

export default function Post (props) {
  return (
    <div>
      <h2 className={styles.title}>
        {
          props.titleLink
          ? <Link to={`/post/${props.slug}`}>{props.title}</Link> : props.title
        }
      </h2>
      <p className={styles.content}>{props.excerpt}</p>
    </div>
  )
}
