import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Link } from 'react-router-dom'
import { AlertTriangleIcon, ArrowLeftIcon, CalendarIcon, ClockIcon, FileTextIcon, GlobeIcon, LinkIcon, MapPinIcon, ShieldIcon, UserIcon } from "lucide-react"
import Footer from './Footer'

// Note: In a real application, you would fetch this data from an API
const incidentData = {
  id: "INC-2024-001",
  title: "Sophisticated Ransomware Attack on Healthcare Sector",
  severity: "Critical",
  status: "Active",
  createdAt: "2024-08-25T19:03:30Z",
  updatedAt: "2024-08-26T10:15:00Z",
  author: "Jane Doe, Senior Threat Analyst",
  affectedSectors: ["Healthcare", "Pharmaceuticals"],
  countries: ["USA", "Canada", "UK"],
  tags: ["ransomware", "healthcare", "data exfiltration", "phishing"],
  description: "A sophisticated ransomware attack has been detected targeting healthcare organizations across North America and the UK. The attack involves a new strain of ransomware, tentatively named 'MediCrypt', which not only encrypts data but also exfiltrates sensitive patient information.",
  timeline: [
    { date: "2024-08-20", event: "Initial phishing emails detected" },
    { date: "2024-08-22", event: "First ransomware execution observed" },
    { date: "2024-08-24", event: "Multiple healthcare organizations report data encryption" },
    { date: "2024-08-25", event: "Ransomware strain identified and named 'MediCrypt'" },
    { date: "2024-08-26", event: "Public disclosure and emergency response initiated" }
  ],
  technicalDetails: {
    malwareType: "Ransomware",
    deliveryMethod: "Phishing emails with malicious attachments",
    fileTypes: [".exe", ".dll", ".ps1"],
    networkIndicators: ["185.234.x.x", "91.195.x.x"],
    encryptionMethod: "AES-256 for file encryption, RSA-4096 for key encryption"
  },
  iocs: [
    { type: "File Hash", value: "5f2b7f33d5f6a7b7a1d5f6a7b7a1d5f6" },
    { type: "Domain", value: "medicrypt-payment.com" },
    { type: "Email Subject", value: "Urgent: Update to Medical Record System" }
  ],
  impactAssessment: "The MediCrypt ransomware has affected over 30 healthcare organizations, potentially compromising millions of patient records. Critical medical systems have been taken offline, leading to disruptions in patient care and postponed procedures.",
  mitigationSteps: [
    "Immediately isolate affected systems",
    "Activate incident response plan",
    "Conduct a thorough security audit of all systems",
    "Implement multi-factor authentication across all access points",
    "Enhance email filtering and user awareness training",
    "Ensure all systems are patched and up-to-date"
  ],
  relatedIncidents: [
    { id: "INC-2023-089", title: "Phishing Campaign Targeting Medical Staff" },
    { id: "INC-2024-003", title: "Data Breach at Major Health Insurance Provider" }
  ],
  references: [
    { title: "MediCrypt Technical Analysis", url: "https://example.com/medicrypt-analysis" },
    { title: "Healthcare Cybersecurity Advisory", url: "https://example.com/health-cyber-advisory" }
  ]
}

export default function Post() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{incidentData.title}</h1>
          <div className="flex items-center space-x-4">
            <Badge variant="destructive" className="text-sm">
              <AlertTriangleIcon className="w-4 h-4 mr-1" />
              {incidentData.severity}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {incidentData.status}
            </Badge>
            <span className="text-sm">
              <ClockIcon className="w-4 h-4 inline mr-1" />
              Last Updated: {new Date(incidentData.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <Card className="bg-[#18181b]">
            <CardHeader>
              <CardTitle>Incident Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{incidentData.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Affected Sectors</h3>
                  <div className="flex flex-wrap gap-2">
                    {incidentData.affectedSectors.map((sector, index) => (
                      <Badge key={index} variant="outline">{sector}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Affected Countries</h3>
                  <div className="flex flex-wrap gap-2">
                    {incidentData.countries.map((country, index) => (
                      <Badge key={index} variant="outline">
                        <GlobeIcon className="w-4 h-4 mr-1" />
                        {country}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {incidentData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#18181b]">
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Malware Type</h3>
                  <p>{incidentData.technicalDetails.malwareType}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Delivery Method</h3>
                  <p>{incidentData.technicalDetails.deliveryMethod}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">File Types</h3>
                  <div className="flex flex-wrap gap-2">
                    {incidentData.technicalDetails.fileTypes.map((type, index) => (
                      <Badge key={index} variant="outline">
                        <FileTextIcon className="w-4 h-4 mr-1" />
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Network Indicators</h3>
                  <div className="flex flex-wrap gap-2">
                    {incidentData.technicalDetails.networkIndicators.map((indicator, index) => (
                      <Badge key={index} variant="outline">
                        <GlobeIcon className="w-4 h-4 mr-1" />
                        {indicator}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Encryption Method</h3>
                <p>{incidentData.technicalDetails.encryptionMethod}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#18181b]">
            <CardHeader>
              <CardTitle>Impact Assessment & Mitigation</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Impact Assessment</h3>
              <p className="mb-4">{incidentData.impactAssessment}</p>
              <h3 className="font-semibold mb-2">Mitigation Steps</h3>
              <ul className="list-disc pl-5 space-y-2">
                {incidentData.mitigationSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#18181b]">
            <CardHeader>
              <CardTitle>References & Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {incidentData.references.map((ref, index) => (
                  <li key={index}>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                      <LinkIcon className="w-4 h-4 mr-2" />
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#18181b]">
            <CardHeader>
              <CardTitle>Related Incidents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {incidentData.relatedIncidents.map((incident, index) => (
                  <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h3 className="font-semibold">{incident.title}</h3>
                    <p className="text-sm text-muted-foreground">Incident ID: {incident.id}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>
      </main>

      <Footer />
    </div>
  )
}
