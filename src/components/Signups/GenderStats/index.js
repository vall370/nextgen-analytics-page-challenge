import React from 'react'
import styles from './genderStats.module.css'

const GenderStats = () => {
  return (
    <div className={styles.genderStats}>
      <div className={styles.byGender}>
        <p>By Gender</p>
      </div>
      <div className={styles.dropdown}>
        <p>Female</p>
        <div className={styles.caret}></div>
      </div>
      <div className={styles.dropdown}>
        <p>Individuals</p>
        <div className={styles.caret}></div>
      </div>
      <div className={styles.amount}>
        <p>102</p>
      </div>
    </div>
  )
}

export default GenderStats