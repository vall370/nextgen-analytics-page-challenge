import React from 'react'
import styles from './linkItem.module.css'

const LinkItem = ({ title, target, isActive }) => {


  return (
    <div className={styles.linkItemWrapper}>
      <a 
        href={target}
        alt={`link to ${title}`} 
        className={isActive ? `${styles.linkItem} ${styles.active}` : styles.linkItem}
      >
        {title}
      </a>
    </div>
  )
}

export default LinkItem