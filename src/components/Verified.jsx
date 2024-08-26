// Discard it if its not needed | Card with different threat can be sorted based of scores

"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import TopActors from "./TopActors";

export default function Verified() {
  const [filterSource, setFilterSource] = useState("all");
  const [filterSeverity, setFilterSeverity] = useState("all");

  const posts = [
    //Dummy data
    {
      post_id: 1,
      post_title: "SQL Injection in e-commerce platform",
      post_description:
        "Vulnerability allows attackers to execute arbitrary SQL commands and gain unauthorized access to sensitive data.",
      date: "2024-08-25",
      author: "John Doe",
      post_url: "https://trustedsite.com/sql-injection",
      post_tags: ["SQL Injection", "High"],
      post_resources: ["https://trustedsite.com/resource1"],
      severity: "high",
      score: 10, // Example score
    },
    {
      post_id: 2,
      post_title: "Cross-Site Scripting (XSS) in customer portal",
      post_description:
        "Flaw enables malicious scripts to be injected and executed in the victim's browser, potentially leading to data theft and account takeover.",
      date: "2024-08-24",
      author: "Jane Doe",
      post_url: "https://untrustedsite.com/xss",
      post_tags: ["XSS", "Medium"],
      post_resources: ["https://untrustedsite.com/resource1"],
      severity: "medium",
      score: 6, // Example score
    },
    {
      post_id: 3,
      post_title: "Insecure Direct Object Reference in API",
      post_description:
        "Vulnerability permits direct access to internal objects without proper authorization checks, exposing sensitive information.",
      date: "2024-08-23",
      author: "John Doe",
      post_url: "https://trustedsite.com/insecure-object",
      post_tags: ["IDOR", "High"],
      post_resources: ["https://trustedsite.com/resource2"],
      severity: "high",
      score: 8, // Example score
    },
    {
      post_id: 4,
      post_title: "Broken Authentication in mobile app",
      post_description:
        "Weakness in the authentication mechanism allows attackers to gain unauthorized access to user accounts.",
      date: "2024-08-22",
      author: "Alice Smith",
      post_url: "https://untrustedsite.com/broken-auth",
      post_tags: ["Authentication", "Critical"],
      post_resources: [],
      severity: "critical",
      score: 5, // Example score
    },
    {
      post_id: 5,
      post_title: "Sensitive Data Exposure in cloud storage",
      post_description:
        "Misconfiguration leads to the unintended exposure of sensitive data, such as customer records and financial information.",
      date: "2024-08-21",
      author: "Bob Johnson",
      post_url: "https://trustedsite.com/data-exposure",
      post_tags: ["Data Exposure", "High"],
      post_resources: ["https://trustedsite.com/resource3"],
      severity: "high",
      score: 9, // Example score
    },
    {
      post_id: 6,
      post_title: "Denial of Service (DoS) vulnerability in network device",
      post_description:
        "Flaw enables attackers to exhaust system resources and disrupt the availability of the targeted service or application.",
      date: "2024-08-20",
      author: "Jane Doe",
      post_url: "https://untrustedsite.com/dos",
      post_tags: ["DoS", "Medium"],
      post_resources: [],
      severity: "medium",
      score: 7, // Example score
    },
    {
      post_id: 7,
      post_title: "Privilege Escalation in operating system",
      post_description:
        "Allows attackers to gain elevated access rights to system resources that should be inaccessible.",
      date: "2024-08-19",
      author: "John Doe",
      post_url: "https://trustedsite.com/privilege-escalation",
      post_tags: ["Privilege Escalation", "High"],
      post_resources: ["https://trustedsite.com/resource4"],
      severity: "high",
      score: 11, // Example score
    },
    {
      post_id: 8,
      post_title: "Cross-Site Request Forgery (CSRF) in web application",
      post_description:
        "Enables attackers to execute unauthorized actions on behalf of an authenticated user.",
      date: "2024-08-18",
      author: "Alice Smith",
      post_url: "https://untrustedsite.com/csrf",
      post_tags: ["CSRF", "Medium"],
      post_resources: ["https://untrustedsite.com/resource5"],
      severity: "medium",
      score: 4, // Example score
    },
    {
      post_id: 9,
      post_title: "Remote Code Execution (RCE) in server software",
      post_description:
        "Allows attackers to execute arbitrary code on the server, potentially leading to full system compromise.",
      date: "2024-08-17",
      author: "Bob Johnson",
      post_url: "https://trustedsite.com/rce",
      post_tags: ["RCE", "Critical"],
      post_resources: ["https://trustedsite.com/resource6"],
      severity: "critical",
      score: 12, // Example score
    },
    {
      post_id: 10,
      post_title: "Buffer Overflow in firmware",
      post_description:
        "Exploits buffer overflow vulnerability in firmware, leading to system crashes or remote code execution.",
      date: "2024-08-16",
      author: "John Doe",
      post_url: "https://trustedsite.com/buffer-overflow",
      post_tags: ["Buffer Overflow", "Critical"],
      post_resources: ["https://trustedsite.com/resource7"],
      severity: "critical",
      score: 10, // Example score
    },
  ];

  const filteredVulnerabilities = posts.filter((vulnerability) => {
    const { score } = vulnerability;
    const isVerified = score >= 7 ? "verified" : "unverified";

    if (filterSource !== "all" && isVerified !== filterSource) {
      return false;
    }
    if (filterSeverity !== "all" && vulnerability.severity !== filterSeverity) {
      return false;
    }
    return true;
  });

  return (
    <div className="container">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold mb-8">
          Cybersecurity Vulnerabilities
        </h1>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Select
              value={filterSource}
              onValueChange={setFilterSource}
              className="w-48"
            >
              <SelectTrigger>
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="unverified">Unverified</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filterSeverity}
              onValueChange={setFilterSeverity}
              className="w-48"
            >
              <SelectTrigger>
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Report a Vulnerability</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVulnerabilities.map((vulnerability, index) => {
            const isVerified =
              vulnerability.score >= 7 ? "verified" : "unverified";
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{vulnerability.post_title}</CardTitle>
                  <CardDescription>
                    {vulnerability.post_description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between my-2">
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${isVerified === "verified"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {isVerified}
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${vulnerability.severity === "critical"
                        ? "bg-red-100 text-red-800"
                        : vulnerability.severity === "high"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {vulnerability.severity}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 max-w-[150px]`}
                    >
                      <strong>Date:</strong> {vulnerability.date}
                    </div>
                    <div
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 max-w-[150px]`}
                    >
                      <strong>Author:</strong> {vulnerability.author}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
