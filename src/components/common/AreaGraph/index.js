import React from 'react'
import { AreaChart, XAxis, YAxis, Area, ResponsiveContainer } from 'recharts'
import '../charts.css'

const AreaGraph = ({ title, data, gradientType }) => {

  return (
    <div className='chart-container'>
      <div className='chart-title'>
        <p>{title}</p>
      </div>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart width={500} height={250} data={data}
          margin={{ top: 120, right: 0, left: 0, bottom: 0 }}
          cursor='pointer'
        >
          <defs>
            <linearGradient id='gradientOne' x1='0' y1='0' x2='0' y2='1' >
              <stop offset='5%' stopColor='rgb(78, 255, 207)' stopOpacity={1} />
              <stop offset='95%' stopColor='rgb(8, 162, 186)' stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id='gradientTwo' x1='0' y1='0' x2='0' y2='1' >
              <stop offset='5%' stopColor='rgb(255, 86, 238)' stopOpacity={1} />
              <stop offset='95%' stopColor='rgb(62, 87, 194)' stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' axisLine={false} tickLine={false} mirror={true} tickMargin={5} padding={{ left: 0 }}/>
          <YAxis axisLine={false} tickLine={false} mirror={true} tickMargin={5} padding={{ bottom: 0 }}/>
          <Area type='monotone' dataKey='amount' stroke='false' fillOpacity={1} fill={`url(#${gradientType})`} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaGraph