import { Link } from "react-router-dom";

export default function Component() {
  return (
    <footer className="bg-muted pt-2 sm:pt-2 pb-1 text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 md:px-4">
        <div className="flex flex-col gap-1">
          <Link to="#" className="flex items-center gap-1" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Incident Intel</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Comprehensive cyber threat analysis and incident intelligence.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="grid">
            <h4 className="text-sm font-medium text-foreground">Quick Links</h4>
            <Link to="#" className="text-xs hover:underline" prefetch={false}>
              About
            </Link>
            <Link to="#" className="text-xs hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid">
            <h4 className="text-sm font-medium text-foreground">Resources</h4>
            <Link to="#" className="text-xs hover:underline" prefetch={false}>
              Threat Reports
            </Link>
            <Link to="#" className="text-xs hover:underline" prefetch={false}>
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-medium text-foreground">Connect with us</h4>
          <div className="flex gap-2">
            <Link to="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <GitlabIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-2 border-t border-border text-center text-xs text-muted-foreground">
        &copy; 2024 Cyber Intel. All rights reserved.
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


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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
