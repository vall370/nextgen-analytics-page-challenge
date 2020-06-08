import React from 'react'
import styles from './signups.module.css'
import PieGraph from '../common/PieGraph'
import GenderStats from './GenderStats'
import LatestSigups from './LatestSignups'

const Signups = ({ stats }) => {
  const { totals } = stats

  return (
    <div className={styles.signups}>
      <PieGraph totals={totals} />
      <GenderStats />
      <LatestSigups />
    </div>
  )
}

export default Signups