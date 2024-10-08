import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a2e] pt-4 sm:pt-4 pb-2 text-muted-foreground">        
      <div className="flex justify-center space-x-6 mb-4">
        <Link to={{ pathname: "https://gitlab.com" }} target="_blank" aria-label="GitLab">
          <GitlabIcon className="text-muted-foreground hover:text-white" />
        </Link>
        <Link to={{ pathname: "https://linkedin.com" }} target="_blank" aria-label="LinkedIn">
          <LinkedinIcon className="text-muted-foreground hover:text-white" />
        </Link>
        <Link to={{ pathname: "https://twitter.com" }} target="_blank" aria-label="Twitter">
          <TwitterIcon className="text-muted-foreground hover:text-white" />
        </Link>
      </div>
      
      <div className="mt-4 border-t border-border text-center text-xs text-muted-foreground">
        &copy; 2024 Incident Intel. All rights reserved. | <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
      </div>
    </footer>
  )
}

function GitlabIcon(props) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
