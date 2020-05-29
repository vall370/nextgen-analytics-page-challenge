import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import Spinner from '../../../ui/Spinner'

const AreaChart = ({ type }) => {
  const [state, setState] = useState({})

  let content = null

  useEffect(() => {
    if (type === 'individuals') {
      setState({ 
        title: 'Individials',
        dataSet: [1, 9, 3, 2.5, 3, 2.5, 10],
        colorStops: {
          first: "rgba(78, 255, 207, 1)",
          second: "rgba(8, 164, 188, 0.05)"
        }
      })
    } else {
      setState({ 
        title: 'Companies', 
        dataSet: [1, 7, 4, 10, 8, 3, 9],
        colorStops: {
          first: "rgb(255, 86, 238)",
          second: "rgb(62, 87, 194)"
        }
      })
    }
  }, [setState, type])

  const displayData = (canvas) => {
    const ctx = canvas.getContext("2d");
    console.log('ctx', ctx)
    const gradient = ctx.createLinearGradient(0, 0, 0, 350)
    gradient.addColorStop(0, state.colorStops.first)
    gradient.addColorStop(1, state.colorStops.second)

    return {
      labels: ["Jun'19", "Jul'10", "Aug'19", "Sep'19", "Oct'19", "Nov'19", "Dec'19"],
      datasets: [
        {
          label: state.title,
          data: state.dataSet,
          backgroundColor: gradient
        }
      ]
    }
  }

  if (state.title) {
    content = (
      <div style={{ width: '700px' }}>
        <Line 
          data={displayData}
          options={{
            title: {
              display: true,
              text: state.title,
              fontSize: 25
            },
            legend: {
              display: false
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
        />
      </div>
    )
  } else {
    content = <Spinner />
  }

  return content
}

export default AreaChart