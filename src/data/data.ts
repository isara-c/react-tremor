interface AssignedPerson {
  name: string
  initials: string
}

interface Project {
  company: string
  size: string
  probability: string
  duration: string
  status: "Drafted" | "Sent" | "Closed"
  assigned: AssignedPerson[]
}

interface Region {
  region: string
  project: Project[]
}
interface WaterQualityData {
  doc: number
  "pH AM": number
  "pH PM": number
  "Temp AM": number
  "Temp PM": number
}
export const waterQualityData: WaterQualityData[] = Array.from(
  { length: 60 },
  (_, i) => ({
    doc: i + 1,
    "pH AM": 7.8 + Math.random() * 0.4,
    "pH PM": 8.0 + Math.random() * 0.3,
    "Temp AM": 28 + Math.random() * 1.5,
    "Temp PM": 29 + Math.random() * 2,
  }),
)
export const Mg2: Region[] = [
  {
    region: "Europe",
    project: [
      {
        company: "Walton Holding",
        size: "50K USD",
        probability: "40%",
        duration: "18 months",
        status: "Drafted",
        assigned: [
          {
            name: "Emily Smith",
            initials: "E",
          },
          {
            name: "Max Warmer",
            initials: "M",
          },
          {
            name: "Victoria Steep",
            initials: "V",
          },
        ],
      },
      {
        company: "Zurich Coats LLC",
        size: "100-150K USD",
        probability: "80%",
        duration: "24 months",
        status: "Sent",
        assigned: [
          {
            name: "Emma Stone",
            initials: "E",
          },
          {
            name: "Chris Bold",
            initials: "C",
          },
        ],
      },
      {
        company: "Riverflow Media Group",
        size: "280-300K USD",
        probability: "80%",
        duration: "24 months",
        status: "Sent",
        assigned: [
          {
            name: "Emma Stephcorn",
            initials: "E",
          },
          {
            name: "Chris Bold",
            initials: "C",
          },
        ],
      },
      {
        company: "Nordic Solutions AG",
        size: "175K USD",
        probability: "60%",
        duration: "12 months",
        status: "Drafted",
        assigned: [
          {
            name: "Victoria Stone",
            initials: "V",
          },
          {
            name: "Max W.",
            initials: "M",
          },
        ],
      },
      {
        company: "Swiss Tech Innovations",
        size: "450K USD",
        probability: "90%",
        duration: "36 months",
        status: "Sent",
        assigned: [
          {
            name: "Emily Satally",
            initials: "E",
          },
          {
            name: "Chris Bold",
            initials: "C",
          },
        ],
      },
      {
        company: "Berlin Digital Hub",
        size: "200K USD",
        probability: "70%",
        duration: "15 months",
        status: "Drafted",
        assigned: [
          {
            name: "Emma Stone",
            initials: "E",
          },
        ],
      },
    ],
  },
  {
    region: "Asia",
    project: [
      {
        company: "Real Estate Group",
        size: "1.2M USD",
        probability: "100%",
        duration: "6 months",
        status: "Closed",
        assigned: [
          {
            name: "Lena Mayer",
            initials: "L",
          },
          {
            name: "Sara Brick",
            initials: "S",
          },
        ],
      },
      {
        company: "Grison Appartments",
        size: "100K USD",
        probability: "20%",
        duration: "12 months",
        status: "Drafted",
        assigned: [
          {
            name: "Jordan Afolter",
            initials: "J",
          },
          {
            name: "Corinna Bridge",
            initials: "C",
          },
        ],
      },
      {
        company: "Tokyo Tech Solutions",
        size: "750K USD",
        probability: "85%",
        duration: "24 months",
        status: "Sent",
        assigned: [
          {
            name: "Lena Mayer",
            initials: "L",
          },
          {
            name: "Jordan Corner",
            initials: "J",
          },
        ],
      },
      {
        company: "Singapore Systems Ltd",
        size: "300K USD",
        probability: "75%",
        duration: "18 months",
        status: "Drafted",
        assigned: [
          {
            name: "Sara Bridge",
            initials: "S",
          },
        ],
      },
      {
        company: "Seoul Digital Corp",
        size: "880K USD",
        probability: "95%",
        duration: "30 months",
        status: "Sent",
        assigned: [
          {
            name: "Corinna Berner",
            initials: "C",
          },
          {
            name: "Lena Mayer",
            initials: "L",
          },
        ],
      },
      {
        company: "Mumbai Innovations",
        size: "450K USD",
        probability: "40%",
        duration: "12 months",
        status: "Drafted",
        assigned: [
          {
            name: "Jordan Afolter",
            initials: "J",
          },
        ],
      },
    ],
  },
  {
    region: "North America",
    project: [
      {
        company: "Liquid Holdings Group",
        size: "5.1M USD",
        probability: "100%",
        duration: "Member",
        status: "Closed",
        assigned: [
          {
            name: "Charlie Anuk",
            initials: "C",
          },
        ],
      },
      {
        company: "Craft Labs, Inc.",
        size: "80-90K USD",
        probability: "80%",
        duration: "18 months",
        status: "Sent",
        assigned: [
          {
            name: "Charlie Anuk",
            initials: "C",
          },
          {
            name: "Patrick Daller",
            initials: "P",
          },
        ],
      },
      {
        company: "Toronto Tech Hub",
        size: "250K USD",
        probability: "65%",
        duration: "12 months",
        status: "Drafted",
        assigned: [
          {
            name: "Patrick Daller",
            initials: "P",
          },
          {
            name: "Charlie Anuk",
            initials: "C",
          },
        ],
      },
      {
        company: "Silicon Valley Startups",
        size: "1.5M USD",
        probability: "90%",
        duration: "24 months",
        status: "Sent",
        assigned: [
          {
            name: "Charlie Anuk",
            initials: "C",
          },
        ],
      },
      {
        company: "NYC Digital Solutions",
        size: "750K USD",
        probability: "70%",
        duration: "15 months",
        status: "Drafted",
        assigned: [
          {
            name: "Patrick Daller",
            initials: "P",
          },
        ],
      },
    ],
  },
]

interface DataChart {
  date: string
  "Biomass": number
  "MBW": number
}

interface DataChart2 {
  date: string
  Mg2: number
  "Alk": number
}

interface DataChart3 {
  date: string
  Std: number
  Feed: number
}

interface DataChart4 {
  date: string
  Sanity: number
}

export const dataChart: DataChart[] = [
  {
    date: "Jan 24",
    "Biomass": 30.23,
    "MBW": 22.67,
  },
  {
    date: "Feb 24",
    "Biomass": 30.31,
    "MBW": 24.23,
  },
  {
    date: "Mar 24",
    "Biomass": 31.46,
    "MBW": 25.78,
  },
  {
    date: "Apr 24",
    "Biomass": 31.46,
    "MBW": 24.23,
  },
  {
    date: "May 24",
    "Biomass": 31.39,
    "MBW": 23.32,
  },
  {
    date: "Jun 24",
    "Biomass": 31.65,
    "MBW": 23.32,
  },
]


// interface MainChart {
//   date: string
//   Round_1: number
//   Round_2: number
//   Round_3: number
//   Dead: number
// }
// export const MainChart: MainChart[] = [
//   {
//     date: "Jan 24",
//     Round_1: 120,
//     Round_2: 120,
//     Round_3: number
//     "Alk": 55000,
//   },
//   {
//     date: "Feb 24",
//     Mg2: 183,
//     "Alk": 75400,
//   },
//   {
//     date: "Mar 24",
//     Mg2: 165,
//     "Alk": 50450,
//   },
//   {
//     date: "Apr 24",
//     Mg2: 99,
//     "Alk": 41540,
//   },
//   {
//     date: "May 24",
//     Mg2: 194,
//     "Alk": 63850,
//   },
//   {
//     date: "Jun 24",
//     Mg2: 241,
//     "Alk": 73850,
//   },
// ]

export const dataChart2: DataChart2[] = [
  {
    date: "Jan 24",
    Mg2: 120,
    "Alk": 55000,
  },
  {
    date: "Feb 24",
    Mg2: 183,
    "Alk": 75400,
  },
  {
    date: "Mar 24",
    Mg2: 165,
    "Alk": 50450,
  },
  {
    date: "Apr 24",
    Mg2: 99,
    "Alk": 41540,
  },
  {
    date: "May 24",
    Mg2: 194,
    "Alk": 63850,
  },
  {
    date: "Jun 24",
    Mg2: 241,
    "Alk": 73850,
  },
]

export const dataChart3: DataChart3[] = [
  {
    date: "Jan 24",
    Std: 8,
    Feed: 12,
  },
  {
    date: "Feb 24",
    Std: 9,
    Feed: 12,
  },
  {
    date: "Mar 24",
    Std: 6,
    Feed: 12,
  },
  {
    date: "Apr 24",
    Std: 5,
    Feed: 12,
  },
  {
    date: "May 24",
    Std: 12,
    Feed: 12,
  },
  {
    date: "Jun 24",
    Std: 9,
    Feed: 12,
  },
]

export const dataChart4: DataChart4[] = [
  {
    date: "Jan 24",
    Sanity: 0.891,
  },
  {
    date: "Feb 24",
    Sanity: 0.084,
  },
  {
    date: "Mar 24",
    Sanity: 0.155,
  },
  {
    date: "Apr 24",
    Sanity: 0.75,
  },
  {
    date: "May 24",
    Sanity: 0.221,
  },
  {
    date: "Jun 24",
    Sanity: 0.561,
  },
]

interface Progress {
  current: number
  total: number
}

interface AuditDate {
  date: string
  auditor: string
}

interface Document {
  name: string
  status: "OK" | "Needs update" | "In audit"
}

interface Section {
  id: string
  title: string
  certified: string
  progress: Progress
  status: "complete" | "warning"
  auditDates: AuditDate[]
  documents: Document[]
}

export const sections: Section[] = [
  {
    id: "item-1",
    title: "CompTIA Security+",
    certified: "ISO",
    progress: { current: 46, total: 46 },
    status: "complete",
    auditDates: [
      { date: "Dec 10, 2023", auditor: "Max Duster" },
      { date: "Dec 12, 2023", auditor: "Emma Stone" },
    ],
    documents: [
      { name: "policy_overview.xlsx", status: "OK" },
      { name: "employee_guidelines.xlsx", status: "Needs update" },
      { name: "compliance_checklist.xlsx", status: "In audit" },
    ],
  },
  {
    id: "item-2",
    title: "SAFe Certifications",
    certified: "IEC 2701",
    progress: { current: 32, total: 41 },
    status: "warning",
    auditDates: [
      { date: "Jan 15, 2024", auditor: "Sarah Johnson" },
      { date: "Jan 20, 2024", auditor: "Mike Peters" },
    ],
    documents: [
      { name: "certification_records.xlsx", status: "OK" },
      { name: "training_logs.xlsx", status: "In audit" },
      { name: "assessment_results.xlsx", status: "Needs update" },
    ],
  },
  {
    id: "item-3",
    title: "PMP Certifications",
    certified: "ISO",
    progress: { current: 21, total: 21 },
    status: "complete",
    auditDates: [
      { date: "Feb 5, 2024", auditor: "Lisa Chen" },
      { date: "Feb 8, 2024", auditor: "Tom Wilson" },
    ],
    documents: [
      { name: "project_documents.xlsx", status: "OK" },
      { name: "methodology_guide.xlsx", status: "OK" },
      { name: "best_practices.xlsx", status: "In audit" },
    ],
  },
  {
    id: "item-4",
    title: "Cloud Certifications",
    certified: "SOC 2",
    progress: { current: 21, total: 21 },
    status: "complete",
    auditDates: [
      { date: "Mar 1, 2024", auditor: "Alex Kumar" },
      { date: "Mar 5, 2024", auditor: "Rachel Green" },
    ],
    documents: [
      { name: "aws_certifications.xlsx", status: "OK" },
      { name: "azure_competencies.xlsx", status: "OK" },
      { name: "gcp_credentials.xlsx", status: "In audit" },
      { name: "cloud_security.xlsx", status: "OK" },
    ],
  },
]

interface GrowthData {
  week: number;
  'น้ำหนัก (g)': number;
}

interface MortalityData {
  doc: number;
  'จำนวนกุ้งตาย (ตัว)': number;
}

export const growthDataCycle1: GrowthData[] = Array.from({ length: 16 }, (_, i) => ({
  week: i + 1,
  'น้ำหนัก (g)': parseFloat((0.5 * Math.pow(1.45, i) + Math.random() * 0.5).toFixed(2)),
}));

export const growthDataCycle2: GrowthData[] = Array.from({ length: 16 }, (_, i) => ({
  week: i + 1,
  'น้ำหนัก (g)': parseFloat((0.45 * Math.pow(1.48, i) + Math.random() * 0.4).toFixed(2)),
}));

export const growthDataCycle3: GrowthData[] = Array.from({ length: 16 }, (_, i) => ({
  week: i + 1,
  'น้ำหนัก (g)': parseFloat((0.52 * Math.pow(1.42, i) + Math.random() * 0.6).toFixed(2)),
}));

export const mortalityData: MortalityData[] = Array.from({ length: 120 }, (_, i) => ({
  doc: i + 1,
  'จำนวนกุ้งตาย (ตัว)': Math.floor(Math.random() * (i < 80 ? 50 : 150)) + 10,
}));