import React from 'react'
import styles from './userMenu.module.css'
import AVATAR_IMG from '../../../assets/images/avatar@2x.png'
import moment from 'moment'

const UserMenu = () => {
  const date = moment().format('DD-MM-YYYY')
  const time = moment().format('h:mm A')
  
  return (
    <div className={styles.userMenu}>
      <img src={AVATAR_IMG} alt="avatar" />
      <div className={styles.userName}><p>Elsa Andersen</p></div>
      <div className={styles.dateTime}>
        <p className={styles.date}>{date}</p>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  )
}

export default UserMenu