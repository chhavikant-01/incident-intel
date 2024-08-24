import { useState } from 'react'
import { ResponsiveBump } from '@nivo/bump'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Checkbox } from "./ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "./ui/dropdown-menu"
import { ChevronLeft, ChevronRight, Search, Clock } from 'lucide-react'

// Mock data for the Bump chart
const bumpData = [
  {
    "id": "Viruses",
    "data": [
      { "x": 1, "y": 3 },
      { "x": 2, "y": 1 },
      { "x": 3, "y": 2 },
      { "x": 4, "y": 4 },
      { "x": 5, "y": 3 }
    ]
  },
  {
    "id": "Worms",
    "data": [
      { "x": 1, "y": 2 },
      { "x": 2, "y": 3 },
      { "x": 3, "y": 1 },
      { "x": 4, "y": 2 },
      { "x": 5, "y": 1 }
    ]
  },
  {
    "id": "Ransomware",
    "data": [
      { "x": 1, "y": 1 },
      { "x": 2, "y": 2 },
      { "x": 3, "y": 3 },
      { "x": 4, "y": 1 },
      { "x": 5, "y": 2 }
    ]
  },
  {
    "id": "Bots",
    "data": [
      { "x": 1, "y": 4 },
      { "x": 2, "y": 4 },
      { "x": 3, "y": 4 },
      { "x": 4, "y": 3 },
      { "x": 5, "y": 4 }
    ]
  }
]

// Mock data for incident cards
const incidentData = [
  {
    id: 1,
    title: "Major Ransomware Attack on Healthcare Provider",
    description: "A large healthcare provider suffered a ransomware attack, affecting patient data and disrupting operations. The attack is believed to have originated from...",
    category: "Ransomware",
    severity: "Critical",
    industry: "Healthcare",
    uploadedAt: new Date(Date.now() - 3600000) // 1 hour ago
  },
  {
    id: 2,
    title: "New Worm Exploiting Zero-Day Vulnerability",
    description: "A new worm is rapidly spreading across corporate networks, exploiting a zero-day vulnerability in popular VPN software. Security researchers are warning...",
    category: "Worms",
    severity: "High",
    industry: "Multiple",
    uploadedAt: new Date(Date.now() - 86400000) // 1 day ago
  },
  {
    id: 3,
    title: "Botnet Targeting IoT Devices Discovered",
    description: "A large botnet targeting IoT devices has been discovered by security researchers. The botnet, dubbed 'IoTrojan', is estimated to have infected over 500,000 devices...",
    category: "Bots",
    severity: "Medium",
    industry: "IoT",
    uploadedAt: new Date(Date.now() - 259200000) // 3 days ago
  }
]


export default function Feed() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedMalware, setSelectedMalware] = useState([])
  const [selectedSeverity, setSelectedSeverity] = useState([])
  const [searchKeyword, setSearchKeyword] = useState("")

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const handleMalwareChange = (value) => {
    setSelectedMalware(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  const handleSeverityChange = (value) => {
    setSelectedSeverity(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  function formatUploadedTime(date) {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
    return `${Math.floor(diffInSeconds / 2592000)} months ago`
  }

  return (
    <div className="flex h-screen text-gray-100 bg-gradient-to-r from-[#000036] via-[#050576] to-[#000036]">
      {/* Sidebar */}
      <motion.div
        initial={{ width: sidebarOpen ? 256 : 0 }}
        animate={{ width: sidebarOpen ? 256 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-4 mt-10 bg-transperant rounded-lg">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Malware Type</h3>
            {['Viruses', 'Worms', 'Ransomware', 'Bots'].map((type) => (
              <div key={type} className="flex items-center mb-2">
                <Checkbox
                  id={type}
                  className="bg-white"
                  checked={selectedMalware.includes(type)}
                  onCheckedChange={() => handleMalwareChange(type)}
                />
                <label htmlFor={type} className="ml-2">{type}</label>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Severity</h3>
            {['Critical', 'High', 'Medium', 'Low'].map((severity) => (
              <div key={severity} className="flex items-center mb-2">
                <Checkbox
                  id={severity}
                  checked={selectedSeverity.includes(severity)}
                  onCheckedChange={() => handleSeverityChange(severity)}
                />
                <label htmlFor={severity} className="ml-2">{severity}</label>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
          <div className='flex cursor-pointer' onClick={toggleSidebar}>
            <span className='items-center justify-center flex'>
              {sidebarOpen ? "":"Apply filters"}
            </span>
            <Button size="icon" >
                {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
            </Button>
          </div>
            <h1 className="text-3xl font-bold">Cyber Incidents Feed</h1>
          </div>

          {/* Bump Chart */}
          <Card className="mb-8 bg-[#07072a] border-0 text-white">
            <CardHeader>
              <CardTitle>Malware Incidents Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ height: '400px' }}>
                <ResponsiveBump
                  data={bumpData}
                  colors={{ scheme: 'category10' }}
                  lineWidth={3}
                  theme={
                    {
                      "background": "#07072a",
                      "text": {
                        "fill": "#ffffff"
                      }
                    }
                  }
                  activeLineWidth={6}
                  inactiveLineWidth={3}
                  inactiveOpacity={0.15}
                  pointSize={10}
                  activePointSize={16}
                  inactivePointSize={0}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={3}
                  activePointBorderWidth={3}
                  pointBorderColor={{ from: 'serie.color' }}
                  axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: -36
                  }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: 32
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'ranking',
                    legendPosition: 'middle',
                    legendOffset: -40
                  }}
                  margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
                  axisRight={null}
                />
              </div>
            </CardContent>
          </Card>

          <div className='flex justify-between'>
          <div className="mb-4">
            <div className="flex items-center">
              <Input
                id="search"
                placeholder="Search keywords..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="bg-gray-700 text-white"
              />
              <Search className="ml-2 text-gray-400" />
            </div>
          </div>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="shrink-0 bg-[#00002a]" variant="outline">
              <ListOrderedIcon className="w-4 h-4 mr-2" />
              Sort
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuRadioGroup value="relevance">
              <DropdownMenuRadioItem value="relevance">Relevance</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="a-z">A-Z</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="z-a">Z-A</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
          </div>

          {/* Incident Cards */}
          <motion.div layout className="space-y-6">
            <AnimatePresence>
              {incidentData.map((incident) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] border-0 text-white">
                    <CardHeader>
                      <CardTitle>{incident.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{incident.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-600 rounded-full text-sm">{incident.category}</span>
                        <span className="px-2 py-1 bg-red-600 rounded-full text-sm">{incident.severity}</span>
                        <span className="px-2 py-1 bg-green-600 rounded-full text-sm">{incident.industry}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{formatUploadedTime(incident.uploadedAt)}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}
