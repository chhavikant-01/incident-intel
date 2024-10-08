import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { ArrowUpIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function PieChartSeverity() {
  const severityCounts = [
    { severity: 'Low', count: 720, fill: '#4e79a7' },
    { severity: 'Medium', count: 600, fill: '#f28e2c' },
    { severity: 'High', count: 300, fill: '#e15759' },
  ]

  const total = severityCounts.reduce((sum, { count }) => sum + count, 0)

  return (
    <div className='flex gap-2 justify-between items-center'>

    <div className="md:w-1/3 p-4">
  <h1 className="text-3xl font-bold text-white mb-4">Severity Breakdown of Cyber Threat Incidents</h1>
  <p className="text-lg text-gray-300 mb-2">
  This chart provides an overview of the distribution of cyber threat incidents categorized by severity. The severity levels are classified into three categories: Low, Medium, and High. 

  </p>
  <p className="text-lg text-gray-300">
  The Low severity incidents are the most common, reflecting threats that are less impactful but still present. Medium severity incidents represent a moderate level of threat, with a higher impact on affected systems. The High severity incidents are the most critical, indicating severe threats that require immediate attention and remediation.
  </p>
</div>

        <Card className="w-full max-w-3xl bg-[#020817] text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Severity Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={severityCounts}
              dataKey="count"
              nameKey="severity"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ severity, count }) => `${severity}: ${count}`}
              labelLine={false}
            >
              {severityCounts.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
    </div>

  )
}