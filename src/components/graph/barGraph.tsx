import React from 'react'
import Chart from 'react-google-charts'

const BarGraph = () => {
  const dataTables = [
    ['State', 'Count', { role: 'style' }],
    ['Total', 432, '#144679'],
    ['Success', 322, '#f36526'],
    ['Error', 110, 'red'],
  ]

  return (
    <React.Fragment>
      <Chart
        chartType="BarChart"
        width="100%"
        height="320px"
        data={dataTables}
        options={{
          curveType: 'function',
          legend: { position: 'none' },
          hAxis: {
            title: 'Deliver Counts',
          },
        }}
      />
    </React.Fragment>
  )
}

export default BarGraph
