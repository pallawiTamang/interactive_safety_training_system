export const sampleUsers = [
  {
    id: "EMP-4091",
    name: "Alex Morgan",
    email: "alex.morgan@logistics.demo",
    role: "employee",
    department: "Bay 4 Inbound Logistics",
    progress: 68,
    avgScore: 88,
    status: "Active",
    joinedDate: "2025-11-10",
    completedModules: ["hse-101", "hse-303"],
    lastActive: "Today, 09:42 AM",
    avatarBg: "from-blue-600 to-cyan-500"
  },
  {
    id: "EMP-4092",
    name: "Sarah Chen",
    email: "sarah.chen@logistics.demo",
    role: "employee",
    department: "Automotive Parts Assembly",
    progress: 100,
    avgScore: 95,
    status: "Active",
    joinedDate: "2025-08-14",
    completedModules: ["hse-101", "hse-202", "hse-303", "hse-404", "hse-505", "hse-606"],
    lastActive: "Yesterday",
    avatarBg: "from-emerald-600 to-teal-500"
  },
  {
    id: "EMP-4093",
    name: "David Okafor",
    email: "david.o@logistics.demo",
    role: "employee",
    department: "Forklift Fleet Operations",
    progress: 50,
    avgScore: 74,
    status: "Active",
    joinedDate: "2026-01-05",
    completedModules: ["hse-101", "hse-404"],
    lastActive: "2 days ago",
    avatarBg: "from-purple-600 to-indigo-500"
  },
  {
    id: "EMP-4094",
    name: "Emma Watson",
    email: "emma.w@logistics.demo",
    role: "employee",
    department: "Dispatch & Outbound",
    progress: 33,
    avgScore: 82,
    status: "Active",
    joinedDate: "2026-02-18",
    completedModules: ["hse-101"],
    lastActive: "3 days ago",
    avatarBg: "from-pink-600 to-rose-500"
  },
  {
    id: "EMP-4095",
    name: "Liam O'Connor",
    email: "liam.oc@logistics.demo",
    role: "employee",
    department: "High-Bay Bulk Storage",
    progress: 15,
    avgScore: 62,
    status: "Review Required",
    joinedDate: "2026-03-01",
    completedModules: [],
    lastActive: "1 week ago",
    avatarBg: "from-amber-600 to-orange-500"
  }
];

export const sampleAdmin = {
  id: "ADM-101",
  name: "Marcus Vance",
  email: "supervisor@logistics.demo",
  role: "admin",
  department: "Health, Safety & Compliance Division",
  title: "Lead Safety Auditor & Shift Supervisor",
  avatarBg: "from-cyan-600 to-blue-700"
};

export const adminKPIs = {
  totalUsers: 148,
  activeLearners: 124,
  trainingModules: 12,
  completedTrainings: 89,
  pendingTrainings: 23,
  averageQuizScore: 84.6,
  complianceRate: 91.2
};

export const safetyTips = [
  {
    id: 1,
    tip: "Never cut across forklift travel lanes diagonally. Always cross at 90-degree angles at designated pedestrian crossings.",
    category: "Warehouse Transit"
  },
  {
    id: 2,
    tip: "Inspect your safety boots monthly. Replace immediately if the composite toe is exposed, cracked, or the tread is worn down.",
    category: "PPE Safety"
  },
  {
    id: 3,
    tip: "When lifting from floor level, test the weight by nudging a corner with your foot before committing to a manual lift.",
    category: "Manual Handling"
  }
];

export const systemNotifications = [
  {
    id: 1,
    title: "Annual Warehouse Refresher Reminder",
    type: "reminder",
    timestamp: "10 mins ago",
    content: "All shift operators must complete HSE-404 Forklift & Vehicle Safety by Friday 17:00."
  },
  {
    id: 2,
    title: "New Employee Onboarded",
    type: "user",
    timestamp: "1 hour ago",
    content: "Liam O'Connor added to Bay 4 Logistics roster. Initial induction required."
  },
  {
    id: 3,
    title: "High Quiz Score Logged",
    type: "assessment",
    timestamp: "3 hours ago",
    content: "Sarah Chen scored 100% in Warehouse Safety Assessment Examination."
  },
  {
    id: 4,
    title: "Incomplete Module Alert",
    type: "alert",
    timestamp: "1 day ago",
    content: "3 operators in Outbound Dispatch have overdue Emergency Procedures modules."
  }
];