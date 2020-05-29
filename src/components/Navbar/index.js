import React from 'react'
import styles from './navbar.module.css'
import Logo from './Logo'
import Navigation from './Navigation'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Navigation />
    </div>
  )
}

export default Navbar