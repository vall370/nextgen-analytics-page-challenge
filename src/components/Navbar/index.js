import React from 'react'
import styles from './navbar.module.css'
import Logo from './Logo'
import Navigation from './Navigation'
import UserMenu from './UserMenu'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Navigation />
      <UserMenu />
    </div>
  )
}

export default Navbar