import { Icons } from "@/components/icons";
import { FileText, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Chirag Anand",
  initials: "CA",
  url: "https://github.com/chirag-433",
  location: "Bengaluru, India",
  locationLink: "https://maps.google.com/?q=Bengaluru,India",
  description: "Full-stack developer and competitive programmer.",
  summary:
    "I'm Chirag Anand, a full-stack engineer who builds web applications and developer tools from interface to backend. My projects include PsychEdge, a trading analytics platform with live market data and AI-generated signals; gocli, a concurrent Go tool for monitoring APIs and websites; and a Python CLI for GitHub repository insights. I enjoy building end-to-end features, working with APIs and real-time data, and contributing to open source. I'm also part of Point Blank, recognized as **Student Community of the Year at IndiaFOSS 2026**.",
  avatarUrl: "/chirag-anand.jpg",
  skills: [
    { name: "Go", icon: Golang },
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript" },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Drizzle ORM" },
    { name: "Tailwind CSS" },
    { name: "REST APIs" },
    { name: "WebSockets" },
    { name: "Git & GitHub" },
    { name: "Unit Testing" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Chirag_Anand_Resume.pdf", icon: FileText, label: "Resume (PDF)", download: true },
  ],
  contact: {
    email: "anandchirag31@gmail.com",
    tel: "+91 6206744797",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/chirag-433",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chirag-anand-b85141241/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:anandchirag31@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "InVesalius",
      logoUrl: "/logos/invesalius.jpg",
      title: "Open-source contributor · Python, wxPython",
      start: "May 2026",
      end: "May 2026",
      description:
        "Added a reusable progress dialog for mask import and export in a 3D medical imaging application. Added per-stage updates, cancellation support, and safe abort handling to avoid leaving partial files.",
    },
    {
      company: "OpenLakeForge",
      logoUrl: "/logos/openlakeforge.png",
      title: "Open-source contributor · SQL, Trino, testing",
      start: "Oct 2026",
      end: "Oct 2026",
      description:
        "Fixed handling for empty SQL query files and added tests for empty Trino stderr fallbacks. Both pull requests were merged.",
    },
    {
      company: "napari",
      logoUrl: "/logos/napari.png",
      title: "Open-source contributor · Python, testing",
      start: "2026",
      end: "2026",
      description:
        "Opened three pull requests and wrote tests for changes to napari, a multidimensional image viewer.",
    },
    {
      company: "Point Blank",
      logoUrl: "/logos/point-blank.svg",
      logoWide: true,
      title: "Member · Student-run technology club",
      start: "2026",
      end: "Present",
      description:
        "Member of Point Blank, an interdisciplinary student technology community recognized as Student Community of the Year at IndiaFOSS 2026.",
    },
  ],
  education: [
    {
      school: "Dayananda Sagar College of Engineering",
      logoUrl: "/logos/dsce.png",
      logoCrop: true,
      href: "https://www.dsce.edu.in/",
      degree: "B.E. in Computer Science Engineering (Data Science) · CGPA 9.2/10",
      start: "Sep 2025",
      end: "Sep 2029",
    },
  ],
  competitiveProgramming: [
    { label: "Codeforces", value: "1224 max rating · 400+ problems" },
    { label: "CodeChef", value: "1523 max rating · 150+ problems" },
    { label: "LeetCode", value: "165+ problems solved" },
  ],
  projects: [
    {
      title: "gocli",
      href: "https://github.com/chirag-433/gocli",
      dates: "Go · API & website health monitor",
      active: true,
      description:
        "A dependency-free Go CLI that checks endpoint status, latency, response size, and TLS certificate expiry. Concurrent probes, live watch mode, saved endpoints, and graceful shutdown make it useful for monitoring APIs and websites from the terminal.",
      technologies: ["Go", "net/http", "crypto/tls", "Goroutines", "httptest"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/chirag-433/gocli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/gocli-cover.png",
    },
    {
      title: "PsychEdge",
      href: "https://github.com/chirag-433/PshychEdge",
      dates: "React · TypeScript · Express · PostgreSQL",
      active: true,
      description:
        "A full-stack trading analytics platform combining live market data, AI-generated trade signals, and behavioral tracking. Includes portfolio metrics, trade journaling, discipline scoring, and alerts for patterns such as FOMO and revenge trading.",
      technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "Drizzle ORM", "WebSockets", "Groq Llama 3.1"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/chirag-433/PshychEdge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/psychedge-cover.png",
    },
    {
      title: "GitHub Repository Stats CLI",
      href: "https://github.com/chirag-433/repo-stats-cli",
      dates: "Python · GitHub REST API",
      active: true,
      description:
        "A Python command-line tool that retrieves repository stars, forks, issues, primary language, and contributor counts from the GitHub REST API. Accepts repository URLs or owner/name inputs and formats results with Rich.",
      technologies: ["Python", "GitHub REST API", "Requests", "Rich"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/chirag-433/repo-stats-cli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/repo-stats-cli-cover.png",
    },
  ],
  hackathons: [
    {
      title: "Altaria Hackathon",
      dates: "2026",
      location: "Finalist · Round 2",
      description: "Selected to advance to Round 2 of the Altaria Hackathon.",
      image: "/achievements/altaria.jpg",
      links: [] as { href: string; icon: React.ReactNode; title: string }[],
    },
    {
      title: "Triada CTF",
      dates: "2026",
      location: "11th place · 60+ teams",
      description: "Placed 11th among more than 60 teams.",
      image: "/achievements/triada-ctf.jpg",
      links: [] as { href: string; icon: React.ReactNode; title: string }[],
    },
    {
      title: "IndiaFOSS 2026",
      dates: "2026",
      location: "Student Community of the Year",
      description: "Point Blank was recognized as Student Community of the Year.",
      image: "/achievements/indiafoss-2026.png",
      links: [] as { href: string; icon: React.ReactNode; title: string }[],
    },
  ],
} as const;
