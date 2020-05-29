import React from 'react'
import appLogo from '../../../assets/images/logo.png'
import styles from './logo.module.css'

const Logo = () => {
  return (
      <img 
        src={appLogo}
        alt="logo" 
        className={styles.logo}
      />
  )
}

export default Logo