import React from 'react'
import ThreatMap from '../components/ThreatMap'
import IncidentBarChart from '../components/BarChart'
import PieChartSeverity from '../components/PieChart'

const Analytics = () => {
  return (
    <div className='flex flex-col gap-10'>
        <ThreatMap />
        <IncidentBarChart />
        <PieChartSeverity />
    </div>
  )
}

export default Analytics