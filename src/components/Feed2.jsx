import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { AlertTriangleIcon, ClockIcon, FilterIcon, GlobeIcon, LinkIcon, MapPinIcon, SearchIcon, UserIcon } from "lucide-react"


const generateRandomPost = (id) => {
  const threats = ['Ransomware', 'Phishing', 'DDoS', 'Data Breach', 'Malware']
  const sectors = ['Healthcare', 'Finance', 'Education', 'Government', 'Retail']
  const countries = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Japan']
  const authors = ['CyberSec Analyst', 'Threat Hunter', 'Security Researcher', 'Incident Responder']

  return {
    post_id: `${id}`,
    post_title: `${threats[Math.floor(Math.random() * threats.length)]} Attack Targeting ${sectors[Math.floor(Math.random() * sectors.length)]} Sector`,
    post_desc: `A sophisticated cyber attack has been detected targeting organizations in the ${sectors[Math.floor(Math.random() * sectors.length)]} sector. The attack involves ${threats[Math.floor(Math.random() * threats.length)].toLowerCase()} techniques and has already affected multiple entities.`,
    internal_created_at: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
    author: authors[Math.floor(Math.random() * authors.length)],
    post_url: `${process.env.REACT_APP_BASE_URL}/post/${id}`,
    post_tags: [threats[Math.floor(Math.random() * threats.length)], sectors[Math.floor(Math.random() * sectors.length)], 'cybersecurity'],
    mentions: [`Organization ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`, `Entity ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`],
    country_tag: countries[Math.floor(Math.random() * countries.length)]
  }
}

export default function Feed2() {


  const [posts, setPosts] = useState(() => Array.from({ length: 5 }, (_, i) => generateRandomPost(i + 1)))

  const loadMore = () => {
    const newPosts = Array.from({ length: 3 }, (_, i) => generateRandomPost(posts.length + i + 1))
    setPosts([...posts, ...newPosts])
  }

  return (
    <div className="min-h-screen bg-transparent">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            <div className="mb-6 flex items-center  ">
              <Input className="flex-grow mr-2 text-[#D1D5DB] bg-[#1E2A38] broder-1-[#3A506B] placeholder-[#6B7280]" placeholder="Search incidents..." />
              <Button variant="outline" className="text-white ">
                <SearchIcon className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>

            {posts.map((post) => (
              <Card key={post.post_id} className="mb-6 bg-[#18181b]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold">{post.post_title}</CardTitle>
                    <Badge variant="destructive" className="text-xs">
                      <AlertTriangleIcon className="w-3 h-3 mr-1" />
                      Cyber Threat
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {post.author}
                    <ClockIcon className="w-4 h-4 ml-4 mr-1" />
                    {new Date(post.internal_created_at).toLocaleDateString()}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base mb-4">{post.post_desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.post_tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  {post.mentions.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Mentions:</h4>
                      <ul className="list-disc list-inside">
                        {post.mentions.map((mention, index) => (
                          <li key={index} className="text-sm">{mention}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      Location:
                    </span>
                    <Badge className="ml-2" variant="outline">{post.country_tag}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="bg-white text-black hover:bg-slate-200 hover:text-black" asChild>
                    <a href={post.post_url} rel="noopener noreferrer" target='_blank'>
                      <LinkIcon className="w-4 h-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <div className="mt-6 text-center">
              <Button onClick={loadMore}>Load More Incidents</Button>
            </div>
          </div>

          <div className="w-full md:w-1/4 fixed right-0">
            <Card className="h-screen">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="threat-type" className="block text-sm font-medium mb-1">Threat Type</label>
                    <select id="threat-type" className="w-full border rounded-md p-2 bg-[#1E2A38]">
                      <option value="">All Types</option>
                      <option value="ransomware">Ransomware</option>
                      <option value="phishing">Phishing</option>
                      <option value="ddos">DDoS</option>
                      <option value="data-breach">Data Breach</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium mb-1">Sector</label>
                    <select id="sector" className="w-full border rounded-md p-2 bg-[#1E2A38]">
                      <option value="">All Sectors</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="education">Education</option>
                      <option value="government">Government</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date-range" className="block text-sm font-medium mb-1">Date Range</label>
                    <select id="date-range" className="w-full border rounded-md p-2 bg-[#1E2A38]">
                      <option value="7">Last 7 days</option>
                      <option value="30">Last 30 days</option>
                      <option value="90">Last 90 days</option>
                    </select>
                  </div>
                  <Button className="w-full">
                    <FilterIcon className="w-4 h-4 mr-2" />
                    Apply Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}