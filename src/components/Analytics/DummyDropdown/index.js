import React from 'react'
import styles from './dummyDropdown.module.css'

const DummyDropdown = () => {
  return (
    <div className={styles.dropdown}>
      <p>OVERVIEW</p>
      <div className={styles.caret}></div>
    </div>
  )
}

export default DummyDropdown