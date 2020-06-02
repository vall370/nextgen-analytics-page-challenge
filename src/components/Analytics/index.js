import React from 'react'
import styles from './analytics.module.css'

import DummyDropdown from './DummyDropdown'
import AnalytisItem from './AnalyticsItem'

const Analytics = () => {

  const dummyData = [
    {
      title: 'Total signups',
      amount: 648,
      color: 'var(--tertiary-color)'
    },
    {
      title: 'Last week',
      amount: 12,
      color: 'var(--secondary-color)'
    },
    {
      title: 'Total investments',
      amount: 102,
      color: 'var(--primary-color:)'
    },
    {
      title: 'Average investments',
      amount: 345656,
      currency: true,
      color: 'var(--tertiary-color)'
    },
    {
      title: 'Total exits',
      amount: 23,
      color: 'var(--secondary-color)'
    }
  ]

  const items = dummyData.map((item, index) => {
    return (
      <AnalytisItem 
        key={index}
        title={item.title}
        amount={item.amount}
        currency={item.currency}
        color={item.color}
      />
    )
  })

  return (
    <div className={styles.analytics}>
      <DummyDropdown />
      {items}
    </div>
  )
}

export default Analytics