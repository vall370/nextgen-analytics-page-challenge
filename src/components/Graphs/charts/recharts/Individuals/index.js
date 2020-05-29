import React from 'react'
import { AreaChart, XAxis, YAxis, Area, Tooltip, ResponsiveContainer } from 'recharts'
import { data } from './data'

const IndividualsChart = () => {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart width={700} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        cursor="pointer"
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1" >
            <stop offset="5%" stopColor='rgb(78, 255, 207)' stopOpacity={1} />
            <stop offset="95%" stopColor="rgb(8, 164, 188)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} tickLine={false} mirror={true} tickMargin={10} padding={{ left: 30 }}/>
        <YAxis axisLine={false} tickLine={false} mirror={true} tickMargin={10} />
        {/* <Tooltip cursor={false} /> */}
        <Area type="monotone" dataKey="uv" stroke="rgb(8, 164, 188)" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default IndividualsChart