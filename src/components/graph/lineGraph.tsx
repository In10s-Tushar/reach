import React from 'react'
import Chart from 'react-google-charts'

interface ILineGraphData {
  data: object
}

const LineGraph = (props: ILineGraphData) => {
  const { data } = props

  return (
    <React.Fragment>
      <Chart
        chartType="LineChart"
        width="100%"
        height="320px"
        data={data}
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

export default LineGraph
