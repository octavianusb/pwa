import React from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import styles from './Header.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>{'PWA'}</h1>
        <nav>
          <ul className={styles.list}>
            <li className={styles.listItem}><NavLink activeClassName='selected' className={styles.link} to='/'>{'Posts'}</NavLink></li>
            <li className={styles.listItem}><NavLink activeClassName='selected' className={styles.link} to='/about'>{'About'}</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
