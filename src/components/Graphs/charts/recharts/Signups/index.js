import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import { data01, data02 } from './data'

const SignupsChart = () => {
  return (
  <PieChart width={730} height={250}>
    <Pie 
      data={data02} 
      dataKey="value" 
      innerRadius={85} 
      outerRadius={100} 
      stroke={0}
      fill="#82ca9d" 
    >
      <Cell fill='#1bfbe4' />
      <Cell fill='#ff56ee' />
    </Pie>
  </PieChart>
  )
}  

export default SignupsChart
                            