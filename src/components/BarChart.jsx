import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ArrowUpIcon } from 'lucide-react'

const colorPalette = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8",
  "#F06292", "#AED581", "#7986CB", "#4DB6AC", "#FFD54F"
];

export default function IncidentBarChart() {
  const threatIncidentsSummary = [
    { category: 'Virus', incidents: 1200 },
    { category: 'Ransomware', incidents: 950 },
    { category: 'Trojan', incidents: 1350 },
    { category: 'Spyware', incidents: 890 },
    { category: 'Worm', incidents: 720 },
    { category: 'Adware', incidents: 640 },
    { category: 'Rootkit', incidents: 530 },
    { category: 'Botnet', incidents: 1180 },
    { category: 'Keylogger', incidents: 580 },
    { category: 'Phishing', incidents: 1450 },
  ].sort((a, b) => b.incidents - a.incidents)
    .map((item, index) => ({
      ...item,
      fill: colorPalette[index % colorPalette.length]
    }));

  return (
    <div className='flex gap-2 justify-between items-center'>

    <Card className="w-full max-w-3xl bg-[#020817] text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Threat Incidents Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={threatIncidentsSummary}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <XAxis type="number" stroke="#888888" />
              <YAxis 
                dataKey="category" 
                type="category" 
                width={100} 
                axisLine={false} 
                tickLine={false} 
                stroke="#888888"
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#333', border: 'none' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar 
                dataKey="incidents" 
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* <div className="mt-4 flex items-center">
        <ArrowUpIcon className="text-green-500 mr-2" />
        <span className="font-bold mr-2">Trending up by 5.2% this month</span>
      </div>
      <p className="text-gray-400 text-sm">Showing total incidents for the last 6 months</p> */}
      </CardContent>
    </Card>
    
    <div className="md:w-1/3 p-4">
  <h1 className="text-3xl font-bold text-white mb-4">Cyber Threat Incident Categories</h1>
  <p className="text-lg text-gray-300 mb-2">
    This bar chart provides a visual representation of the total number of cyber threat incidents categorized by type. The height of each bar corresponds to the frequency of incidents within that category.
  </p>
  <p className="text-lg text-gray-300">
    Analyze the chart to identify which types of threats are most prevalent. This can help in understanding the landscape of cyber threats and prioritizing security measures accordingly.
  </p>
</div>
    </div>
  )
}