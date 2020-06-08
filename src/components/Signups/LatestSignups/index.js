import React from 'react'
import styles from './latestSignups.module.css'

const LatestSignups = () => {
  const dummyData = [
    {
      type: 'individual',
      name: 'David Hansen',
      date: '02-03-2020 - 2PM'
    },
    {
      type: 'company',
      name: 'Shopify',
      date: '05-03-2020 - 10:30AM'
    },
    {
      type: 'company',
      name: 'Shopify',
      date: '05-03-2020 - 3PM'
    }
  ]

  const list = dummyData.map((item, index) => {
    return (
      <tr key={index} className={styles.listRow}>
        <td className={styles.name} id={item.type === 'individual' ? `${styles.individual}` : `${styles.company}`}>{item.name}</td>
        <td>{item.date}</td>
      </tr>
    )
  })
  return (
    <div className={styles.latestSignups}>
      <div>
        <div className={styles.latestSignupsHeader}>
          <h1>Latest signups</h1>
          <table>
            <tbody>
              <tr>
                <td className={styles.name}>Name</td>
                <td>Scheduled Meeting</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table className={styles.list}>
            <tbody>
              {list}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LatestSignups