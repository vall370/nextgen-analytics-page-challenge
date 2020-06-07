import React from 'react'
import styles from './graphs.module.css'
import AreaGraph from '../common/AreaGraph'

const Graphs = ({ stats }) => {
  const { individuals, companies } = stats

  return (
    <div className={styles.graphs}>
      <AreaGraph
        title={individuals.title}
        gradientType={individuals.gradient}
        data={individuals.data}
      />
      <AreaGraph
        title={companies.title}
        gradientType={companies.gradient}
        data={companies.data}
      />
    </div>
  )
}

export default Graphs