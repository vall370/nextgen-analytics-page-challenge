import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts'
import styles from './signups.module.css'

const SignupsChart = ({ totals }) => {
  const { data } = totals
  const totalAmount = data[0].value + data[1].value

  return (
    <div className={styles.totalSignups}>
      <ResponsiveContainer width={300} height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={100}
            outerRadius={120}
            stroke={0}
            fill="#82ca9d"
          >
            <Cell fill='#1bfbe4' />
            <Cell fill='#ff56ee' />
            <Label value={totalAmount} position="center" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={styles.table}>
        <div id={styles.tableTitle}>
          <p>Total signups</p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Individuals</td>
              <td className={styles.value} id={styles.individuals}>{data[0].value}</td>
            </tr>
            <tr>
              <td>Comapnies</td>
              <td className={styles.value} id={styles.companies}>{data[1].value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SignupsChart
