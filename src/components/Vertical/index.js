import React from 'react'
import styles from './vertical.module.css'

import GROUP_ICON from '../../assets/icons/Group 174.svg'
import FUNDS_ICON from '../../assets/icons/funds.svg'
import PATH_ICON from '../../assets/icons/Path 188.svg'
import HISTORY_ICON from '../../assets/icons/history.svg'
import VERIFICATION_ICON from '../../assets/icons/verification-window-button.svg'
import LOCKED_ICON from '../../assets/icons/locked-padlock (1).svg'
 
const Vertical = () => {

  return (
    <div className={styles.vertical}>
      <img src={GROUP_ICON} alt="groups"/>
      <img src={FUNDS_ICON} alt="funding"/>
      <img src={PATH_ICON} alt="path"/>
      <img src={HISTORY_ICON} alt="history"/>
      <img src={VERIFICATION_ICON} alt="verification"/>
      <img src={LOCKED_ICON} alt="lock"/>
    </div>
  )
}

export default Vertical