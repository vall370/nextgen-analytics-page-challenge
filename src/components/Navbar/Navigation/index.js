import React from 'react'
import styles from './navigation.module.css'
import NavItem from './NavItem'

const linkData = [
  'ACCOUNT',
  'CHARTS',
  'HELP'
]

const Navigation = () => {
  const links = linkData.map(link => {
    return (
      <li key={link}>
        <NavItem name={link} />
      </li>
    )
  })

  return (
    <nav className={styles.navigation}>
      <ul>
        {links}
      </ul>
    </nav>
  )
}

export default Navigation