import React from 'react'

import styles from './About.css'

export default function About () {
  return (
    <div>
      <h1 className={styles.heading}>{'Welcome to ABOUT page!'}</h1>
      <p className={styles.bio}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
    </div>
  )
}
