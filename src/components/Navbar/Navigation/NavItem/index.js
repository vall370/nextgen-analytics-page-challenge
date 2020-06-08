import React from 'react'
import styles from './navItem.module.css'

const NavItem = ({ name }) => {
  return (
    <p className={styles.navItem}>{name}</p>
  )
}

export default NavItem