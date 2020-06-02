import React from 'react'
import styles from './analyticsItem.module.css'

const AnalytisItem = ({ title, amount, currency, color }) => {

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  if (currency) {
    amount = numberWithCommas(amount)
  }
  return (
    <div className={styles.analyticsItem}>
      <p className={styles.title}>{title}</p>
      <div className={styles.amount}>
        {currency && <p style={{color: `${color}`}}>NOK</p>}
        <h1 style={{color: `${color}`}}>{amount}</h1>
      </div>
    </div>
  )
}

export default AnalytisItem