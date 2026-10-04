export const bayHazards = [
  {
    id: "liquid-spill",
    name: "Liquid Lubricant Spill",
    severity: "High Hazard",
    zone: "Pedestrian Walkway (Bay 4-A)",
    description: "An oily hydraulic fluid spill has leaked across the main designated walkway, creating an acute slip, trip, and fall hazard.",
    correctAction: "Keep people away, report the spill, and follow the site spill procedure. Only trained personnel with suitable equipment should clean it.",
    pos: { top: "68%", left: "42%" },
    category: "Slips & Trips",
    color: "bg-rose-500"
  },
  {
    id: "blocked-exit",
    name: "Blocked Emergency Fire Exit",
    severity: "Critical Violation",
    zone: "North Emergency Egress Door",
    description: "Three pallets containing stamped metal parts have been staged directly against the fire exit push-bar door.",
    correctAction: "Report the blocked exit immediately and arrange safe clearance by authorised personnel. Keep escape routes unobstructed.",
    pos: { top: "28%", left: "84%" },
    category: "Fire & Evacuation",
    color: "bg-rose-600"
  },
  {
    id: "unsafe-stacking",
    name: "Unstable High Pallet Stack",
    severity: "Critical Danger",
    zone: "Tier 3 Racking (Bay 4-C)",
    description: "Pallet stacked 4 tiers high with loose wrapping, leaning visibly towards the pedestrian transit aisle.",
    correctAction: "Cordon off the aisle immediately and request an FLT driver to de-stack and re-wrap the pallet securely.",
    pos: { top: "34%", left: "22%" },
    category: "Falling Objects",
    color: "bg-amber-500"
  },
  {
    id: "moving-forklift",
    name: "Forklift Speeding at Blind Corner",
    severity: "High Collision Risk",
    zone: "Aisle Intersection B-3",
    description: "Counterbalance truck rounding blind racking corner without sounding horn or checking overhead parabolic mirror.",
    correctAction: "Stay out of the vehicle route, alert the supervisor from a safe place, and follow the local traffic plan.",
    pos: { top: "62%", left: "76%" },
    category: "Plant & Vehicles",
    color: "bg-orange-500"
  },
  {
    id: "trip-hazard",
    name: "Trailing High-Voltage Charging Cable",
    severity: "Medium Risk",
    zone: "Scissor Lift Charging Station",
    description: "A loose 240V industrial charging lead is dragged across the primary pedestrian walkway without rubber cable ramping.",
    correctAction: "Keep clear and report the cable. Authorised personnel should isolate or reroute it safely; do not handle a damaged electrical lead.",
    pos: { top: "82%", left: "26%" },
    category: "Electrical & Tripping",
    color: "bg-yellow-500"
  },
  {
    id: "missing-ppe",
    name: "Worker Without Mandatory PPE",
    severity: "Safety Infraction",
    zone: "Assembly Picking Station 2",
    description: "Operative lifting metal engine blocks without high-visibility vest or protective safety gloves.",
    correctAction: "Halt the task, issue immediate PPE from the safety locker, and log the safety observation.",
    pos: { top: "45%", left: "55%" },
    category: "PPE Non-Compliance",
    color: "bg-cyan-500"
  }
];