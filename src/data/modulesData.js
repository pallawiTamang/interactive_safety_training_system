export const initialModules = [
  {
    id: "hse-101",
    code: "HSE-101",
    title: "Workplace Safety Basics",
    category: "Core Fundamentals",
    description: "Essential health and safety legislation, duty of care under Health and Safety at Work Act (HASAWA 1974), and baseline hazard awareness.",
    difficulty: "Beginner",
    duration: "15 mins",
    progress: 0,
    status: "Published",
    icon: "ShieldAlert",
    gradient: "from-blue-600 to-cyan-600",
    summary: "Understand legal rights, employer obligations, employee duties, and how to spot routine industrial risks before they escalate.",
    lessons: [
      {
        id: 1,
        title: "1. Legal Framework & Duty of Care",
        objectives: [
          "Understand the Health & Safety at Work Act 1974",
          "Identify employee duties and employer responsibilities",
          "Recognise the legal right to stop unsafe work"
        ],
        content: "Under UK legislation (HASAWA 1974), both employers and employees share a non-delegable duty of care. Workers are legally required to take reasonable care of their own health and safety and that of others who may be affected by their acts or omissions. You have the statutory right and obligation to halt operations if you identify an uncontrolled critical risk.",
        warnings: [
          "Never attempt tasks for which you have not received certified training.",
          "Failure to follow safety procedures carries legal liability for both workers and supervisors."
        ],
        rules: [
          "Always report hazards immediately to your designated safety representative.",
          "Cooperate fully with mandatory safety protocols and PPE requirements.",
          "Keep walkways and transit lanes free from obstacles at all times."
        ]
      },
      {
        id: 2,
        title: "2. The Hierarchy of Hazard Control",
        objectives: [
          "Differentiate between Elimination, Substitution, Engineering, Administrative, and PPE",
          "Recognise why PPE is always the last line of defence"
        ],
        content: "The hierarchy of risk control prioritises actions from most effective to least effective: 1. Elimination (physically remove hazard), 2. Substitution (replace with safer alternative), 3. Engineering Controls (isolate people from hazard), 4. Administrative Controls (change work methods), and 5. PPE (protect worker with gear). PPE should never be the sole mitigation when higher-level controls are viable.",
        warnings: [
          "Relying solely on PPE without addressing root environmental hazards increases catastrophic failure probability."
        ],
        rules: [
          "Evaluate whether hazardous steps can be eliminated prior to task execution.",
          "Inspect all safety guards, interlocks, and emergency stops before machinery start-up."
        ]
      }
    ]
  },
  {
    id: "hse-202",
    code: "HSE-202",
    title: "Warehouse Safety",
    category: "Facility Operations",
    description: "Safe navigation through high-traffic automotive bays, aisle safety protocols, pallet rack weight capacities, and pedestrian walkway separation.",
    difficulty: "Essential",
    duration: "20 mins",
    progress: 0,
    status: "Published",
    icon: "Boxes",
    gradient: "from-amber-600 to-orange-600",
    summary: "Master warehouse transit etiquette, safe pedestrian crossings, racking integrity checks, and high-density storage management.",
    lessons: [
      {
        id: 1,
        title: "1. Segregated Pedestrian & Plant Zones",
        objectives: [
          "Identify designated floor markings and pedestrian walkways",
          "Apply the 3-metre exclusion bubble around moving plant",
          "Utilise blind corner convex mirrors and horn etiquette"
        ],
        content: "Automotive warehousing requires high volume throughput with constant interaction between pedestrians and heavy plant machinery. Designated pedestrian blue/yellow floor walkways must be strictly adhered to. Pedestrians must maintain eye contact with plant drivers before crossing designated transit zones and observe all physical crash barriers.",
        warnings: [
          "Pedestrians must never assume a forklift operator has spotted them.",
          "Never wear personal audio headphones or use smartphones while moving through warehouse bays."
        ],
        rules: [
          "Stay strictly inside yellow floor-marked pedestrian lanes.",
          "Stop, listen, and inspect convex mirrors at all blind aisle intersections.",
          "Ensure high-visibility vests are fastened and visible from all 360 degrees."
        ]
      },
      {
        id: 2,
        title: "2. Racking Safety & Pallet Integrity",
        objectives: [
          "Inspect pallet racking for upright column impact damage",
          "Respect maximum permissible shelf loading limits",
          "Verify pallet stability and wrap standards"
        ],
        content: "Pallet racking columns support heavy automotive components (engines, gearboxes, pressed steel). Any collision from a vehicle must be reported immediately, even if no collapse occurs. Uprights with more than 3mm deflection must be isolated and offloaded immediately by qualified racking inspectors under SEMA standards.",
        warnings: [
          "Overloading pallet tiers can cause catastrophic progressive cascade collapses.",
          "Never climb racking uprights or beam members under any circumstance."
        ],
        rules: [
          "Verify the Safe Working Load (SWL) plaque displayed on every rack end frame.",
          "Immediately report red-risk deflected uprights and barricade affected aisles.",
          "Ensure top pallet layers are shrink-wrapped and interlocked."
        ]
      }
    ]
  },
  {
    id: "hse-303",
    code: "HSE-303",
    title: "Manual Handling & Lifting",
    category: "Ergonomics & Physical Safety",
    description: "Biomechanics of safe lifting, kinetic lifting techniques, load assessment (TILE criteria), and repetitive strain prevention.",
    difficulty: "Beginner",
    duration: "15 mins",
    progress: 0,
    status: "Published",
    icon: "Activity",
    gradient: "from-emerald-600 to-teal-600",
    summary: "Protect your spine and muscular health through proper kinetic lifting techniques and mechanical assist utilization.",
    lessons: [
      {
        id: 1,
        title: "1. The TILE Assessment Framework",
        objectives: [
          "Evaluate Task, Individual, Load, and Environment prior to lifting",
          "Understand that there is no universal safe lifting weight; assess each task"
        ],
        content: "Prior to lifting any component or container, complete a dynamic TILE assessment: Task (twisting, stooping, carrying distances), Individual (physical capability, fitness, training), Load (heavy, bulky, sharp, unstable), and Environment (slippery floors, poor lighting, steps, tight aisles). If any risk factor is high, team lifts or mechanical aids must be deployed.",
        warnings: [
          "Do not lift more than you can comfortably manage; use suitable aids or seek help.",
          "Never twist your torso while carrying or lifting a load."
        ],
        rules: [
          "Assess load weight and stability by gently testing a corner first.",
          "Position your feet shoulder-width apart with the leading foot pointed in the direction of travel.",
          "Bend your knees, keep your spine in neutral alignment, and hold the load close to your waist."
        ]
      }
    ]
  },
  {
    id: "hse-404",
    code: "HSE-404",
    title: "Forklift & Vehicle Safety",
    category: "Machinery & Heavy Plant",
    description: "Counterbalance and reach truck dynamics, pre-use daily checks, speed regulations, load centers, and battery charging bay safety.",
    difficulty: "Intermediate",
    duration: "25 mins",
    progress: 0,
    status: "Published",
    icon: "Truck",
    gradient: "from-rose-600 to-red-600",
    summary: "Critical vehicle protocols, stability triangle principles, battery charging safety, and shared bay protocols.",
    lessons: [
      {
        id: 1,
        title: "1. The Stability Triangle & Load Centers",
        objectives: [
          "Understand the 3-point stability triangle of counterbalanced forklifts",
          "Prevent dynamic tip-overs when cornering or carrying loads elevated"
        ],
        content: "A forklift's center of gravity is dynamic. When unladen, it sits near the rear steer axle; when loaded, it shifts forward towards the drive axle. Operating with forks raised higher than 150mm during travel drastically elevates the roll center, causing fatal rollover events during abrupt turns or braking on gradients.",
        warnings: [
          "In the event of a rollover, NEVER attempt to jump clear. Hold the steering wheel, brace your feet, and lean away from the impact.",
          "Operating an FLT without valid RTITB/ITSSAR licensing is a severe statutory violation."
        ],
        rules: [
          "Travel with mast tilted back and forks lowered to 100mm-150mm off the ground.",
          "Sound horn at all intersections, doorways, and blind bends.",
          "Strictly observe the 5 mph warehouse speed limit."
        ]
      }
    ]
  },
  {
    id: "hse-505",
    code: "HSE-505",
    title: "Emergency Procedures",
    category: "Incident Response",
    description: "Fire evacuation pathways, assembly point protocols, chemical spill containment (COSHH), and incident reporting (RIDDOR).",
    difficulty: "Essential",
    duration: "15 mins",
    progress: 0,
    status: "Published",
    icon: "BellRing",
    gradient: "from-purple-600 to-indigo-600",
    summary: "Immediate actions for fire sirens, emergency exit clearance, chemical spill containment kits, and injury reporting.",
    lessons: [
      {
        id: 1,
        title: "1. Fire Evacuation & Clear Exits",
        objectives: [
          "Locate primary and secondary fire exit routes in Bay 4",
          "Understand the duty to keep push-bar escape routes 100% unobstructed"
        ],
        content: "In the event of fire alarms sounding, all machinery must be placed in a safe condition (forks lowered to ground, engines switched off, emergency brakes applied) and workers must evacuate immediately via designated fire doors to Assembly Point C. Never re-enter the facility until authorized by the Chief Incident Officer.",
        warnings: [
          "Never stack pallets, waste cages, or goods within 1.5 metres of emergency exit doors.",
          "Never use fire hoses or water extinguishers on lithium battery or electrical fires."
        ],
        rules: [
          "Walk calmly to the nearest emergency exit; do not run or stop to collect personal belongings.",
          "Report immediately to your shift supervisor at Assembly Point C for roll call.",
          "Keep all break-glass call points and extinguisher stations clearly visible and accessible."
        ]
      }
    ]
  },
  {
    id: "hse-606",
    code: "HSE-606",
    title: "Personal Protective Equipment (PPE)",
    category: "Protective Gear",
    description: "Selection, inspection, proper donning, maintenance, and mandatory workplace regulations for PPE in automotive storage facilities.",
    difficulty: "Essential",
    duration: "15 mins",
    progress: 0,
    status: "Published",
    icon: "HardHat",
    gradient: "from-cyan-600 to-blue-700",
    summary: "Correct selection, fitment, and mandatory usage of high-visibility garments, composite toe boots, impact gloves, and eye protection.",
    lessons: [
      {
        id: 1,
        title: "1. Mandatory PPE Standards for Logistics",
        objectives: [
          "Identify mandatory PPE requirements for automotive warehouse zones",
          "Inspect PPE for degradation, damage, and compliance with EN ISO standards"
        ],
        content: "Personal Protective Equipment acts as your final defense against physical trauma. In automotive distribution facilities, high-visibility class 2 vests ensure 360-degree detection by forklift operators. Steel/composite toe-cap safety footwear (EN ISO 20345 S3) shields against falling pallets and rolling wheel crushing, while cut-resistant nitrile gloves prevent lacerations from metal stamped components.",
        warnings: [
          "Worn or damaged PPE must be replaced immediately; cracked helmets lose structural impact resistance.",
          "Failure to wear designated PPE in operational zones will result in immediate suspension from the bay floor."
        ],
        rules: [
          "Wear High-Vis vest (EN ISO 20471) fully zipped at all times.",
          "Safety boots with composite/steel toe protection and puncture-resistant soles are mandatory across all transit aisles.",
          "Wear appropriate gloves rated for mechanical abrasion and chemical resistance when handling automotive liquids."
        ]
      }
    ]
  },
  {
    id: "hse-701",
    code: "HSE-701",
    title: "Working at Height Safety",
    category: "High-Risk Operations",
    description: "Safe use of stepladders, mobile elevating work platforms (MEWPs), scaffold towers, and fall arrest harnesses under UK Work at Height Regulations 2005.",
    difficulty: "Intermediate",
    duration: "20 mins",
    progress: 0,
    status: "Published",
    icon: "Layers",
    gradient: "from-sky-600 to-indigo-600",
    summary: "Understand the hierarchy of fall protection: avoid work at height where viable, prevent falls using collective equipment, and minimise consequences using fall arrest.",
    lessons: [
      {
        id: 1,
        title: "1. The Work at Height Hierarchy & Risk Controls",
        objectives: [
          "Understand statutory obligations under the Work at Height Regulations 2005",
          "Apply the hierarchy of control: Avoid, Prevent, and Mitigate",
          "Inspect ladders, mobile access towers, and podium steps before use"
        ],
        content: "Work at height remains one of the leading causes of fatal and major occupational injuries in the logistics and warehousing sector. Under UK law, work at height is defined as any place where a person could fall a distance liable to cause personal injury. Employers and workers must avoid work at height wherever reasonably practicable. Where height cannot be avoided, collective prevention measures (guardrails, scissor lifts, MEWPs) must take precedence over personal equipment.",
        warnings: [
          "Never stand on the top three rungs of an extension ladder or top step of a stepladder unless specifically engineered with an integral platform and handrail.",
          "Do not use damaged, uncertified, or improvised access equipment such as pallets or forklift forks to gain height."
        ],
        rules: [
          "Maintain three points of contact (two feet and one hand, or two hands and one foot) at all times when climbing.",
          "Inspect ladders, locking stays, and anti-slip feet prior to every work shift.",
          "Barricade the ground exclusion zone beneath elevated works to protect pedestrians from dropped tools."
        ]
      }
    ]
  },
  {
    id: "hse-702",
    code: "HSE-702",
    title: "Fire Safety & Emergency Response",
    category: "Emergency Preparedness",
    description: "Fire triangle science, extinguisher classification (CO2, Foam, Powder, Water), alarm actuation, evacuation routes, and designated assembly protocols.",
    difficulty: "Essential",
    duration: "15 mins",
    progress: 0,
    status: "Published",
    icon: "Flame",
    gradient: "from-rose-600 to-orange-600",
    summary: "Master immediate fire detection response, safe operation of portable extinguishers using the PASS method, and orderly evacuation to emergency assembly points.",
    lessons: [
      {
        id: 1,
        title: "1. Fire Classification & Extinguisher Deployment",
        objectives: [
          "Identify fire classes: Class A (solids), Class B (liquids), Class C (gases), and Electrical risks",
          "Select the correct extinguisher agent and recognize colour-coding bands",
          "Execute the PASS technique (Pull, Aim, Squeeze, Sweep) for small incipient fires"
        ],
        content: "Warehouse facilities contain substantial fire loads including packaging cardboard, wooden pallets, shrink wrap, and flammable forklift fluids. Understanding the Fire Triangle (Heat, Fuel, Oxygen) is fundamental to swift suppression. Using the wrong extinguisher—such as applying water to an electrical panel or oil fire—can cause explosive flashovers or fatal electrocution. Only fight a fire if you are trained, the fire is smaller than a waste bin, and your escape route is completely unobstructed.",
        warnings: [
          "NEVER use water or foam extinguishers on live electrical equipment or battery charging bays.",
          "If a fire spreads beyond its immediate ignition source, do not attempt suppression; evacuate immediately and sound the alarm."
        ],
        rules: [
          "Keep all fire exit doors, push bars, and extinguisher call stations free from pallet obstructions.",
          "Upon hearing the fire siren, immediately de-energise plant, leave personal items behind, and proceed to Assembly Point C.",
          "Check extinguisher inspection tags monthly for correct pressure gauge readings and unbroken tamper seals."
        ]
      }
    ]
  },
  {
    id: "hse-703",
    code: "HSE-703",
    title: "Warehouse Traffic & Pedestrian Safety",
    category: "Facility Logistics",
    description: "Rigorous segregation of heavy material handling equipment and personnel, one-way transit aisles, speed enforcement, and loading bay safety.",
    difficulty: "Essential",
    duration: "20 mins",
    progress: 0,
    status: "Published",
    icon: "Truck",
    gradient: "from-amber-600 to-yellow-600",
    summary: "Eliminate pedestrian-vehicle collisions through dedicated walkway compliance, active blind-corner mirror monitoring, and driver eye-contact protocols.",
    lessons: [
      {
        id: 1,
        title: "1. Segregated Logistics Circulation & Plant Protocol",
        objectives: [
          "Recognize demarcated pedestrian blue routes, crossing zones, and vehicle thoroughfares",
          "Apply the mandatory 3-metre exclusion zone around operational reach trucks and forklifts",
          "Comply with loading dock safety interlocks and vehicle wheel chocking"
        ],
        content: "The interaction between pedestrians and material handling equipment (counterbalance forklifts, reach trucks, and powered pallet trucks) represents a major hazard in distribution centres. Physical separation remains the most effective control measure. Where shared zones exist, pedestrians must never enter a vehicle's turning circle or blind spot without explicit driver acknowledgement and confirmation by horn or hand signal.",
        warnings: [
          "Never assume a forklift driver has seen you; reversing trucks have substantial blind zones behind the counterweight.",
          "Do not cross loading bay ramps while articulated lorries are actively reversing into dock seals.",
        ],
        rules: [
          "Wear certified Class 2 high-visibility vests fastened properly across all logistics bays.",
          "Stop, look both ways, and check ceiling-mounted convex mirrors before stepping through intersection portals.",
          "Strictly observe the 5 mph indoor vehicle speed restriction and mandatory stopping markings."
        ]
      }
    ]
  },
  {
    id: "hse-704",
    code: "HSE-704",
    title: "Chemical & COSHH Awareness",
    category: "Hazardous Materials",
    description: "Safe handling of industrial chemicals, battery acids, and cleaning solvents under Control of Substances Hazardous to Health Regulations 2002.",
    difficulty: "Intermediate",
    duration: "25 mins",
    progress: 0,
    status: "Published",
    icon: "FlaskConical",
    gradient: "from-purple-600 to-pink-600",
    summary: "Interpret GHS hazard pictograms, consult Safety Data Sheets (SDS), utilise chemical spill containment kits, and prevent skin and respiratory exposure.",
    lessons: [
      {
        id: 1,
        title: "1. COSHH Assessment & Hazard Pictograms",
        objectives: [
          "Interpret the nine standard GHS chemical hazard pictograms (corrosive, flammable, toxic, health hazard)",
          "Locate and extract critical PPE and first aid guidance from Safety Data Sheets (SDS)",
          "Deploy neutralising spill granules and bunding socks for accidental chemical leaks"
        ],
        content: "Under the COSHH Regulations 2002, workers must be protected against hazardous substances including battery acid (sulphuric acid in forklift charging rooms), industrial degreasers, lubricants, and hydraulic fluids. Every chemical container in the facility must have a clear manufacturer label and a corresponding SDS stored at the local safety station. In the event of a spill, isolate ignition sources and deploy chemical-absorbent pillows immediately.",
        warnings: [
          "Never mix chemical cleaning agents or industrial solvents; mixing bleach with acidic descalers generates lethal chlorine gas.",
          "In the event of acid splashes to the eyes, flush immediately with eyewash solution for a minimum of 15 continuous minutes."
        ],
        rules: [
          "Verify container integrity and check expiry dates before transporting chemical drums.",
          "Wear chemical-resistant nitrile gloves and splash goggles when decanting liquids or servicing batteries.",
          "Dispose of contaminated spill materials in designated hazardous waste bins with sealed liners."
        ]
      }
    ]
  },
  {
    id: "hse-705",
    code: "HSE-705",
    title: "Electrical Safety Awareness",
    category: "Technical & Equipment",
    description: "Statutory compliance with Electricity at Work Regulations 1989, portable appliance inspection (PAT), battery charging risk, and LOTO basic isolation.",
    difficulty: "Intermediate",
    duration: "15 mins",
    progress: 0,
    status: "Published",
    icon: "Zap",
    gradient: "from-yellow-500 to-amber-600",
    summary: "Identify electrical shock and arc flash dangers, inspect cables and plug casings, prevent circuit overload, and follow safe isolation procedures.",
    lessons: [
      {
        id: 1,
        title: "1. Electrical Hazards & Safe Isolation Principles",
        objectives: [
          "Comply with the Electricity at Work Regulations 1989",
          "Conduct visual pre-use inspections of power leads, sockets, and extension reels",
          "Understand Lockout/Tagout (LOTO) tags on de-energised distribution boards"
        ],
        content: "Electricity is an invisible hazard capable of causing severe burns, fatal cardiac shock, and explosive arc flashes. In industrial warehousing, common electrical risks arise from damaged flexible cables on mobile conveyors, wet charging stations, and overloaded distribution boards. Any equipment displaying frayed insulation, scorch marks, or loose wiring must be locked out immediately and reported to licensed maintenance technicians.",
        warnings: [
          "Never touch an electric shock victim until the circuit has been isolated or you have removed them using an insulated, non-conductive rescue hook.",
          "Do not open three-phase electrical distribution panels unless you are a qualified and authorized electrical engineer."
        ],
        rules: [
          "Uncoil cable extension reels fully during continuous operation to prevent thermal overheating and melting.",
          "Check that all portable appliances exhibit a valid and current PAT inspection sticker before use.",
          "Keep battery charging stations well ventilated to disperse flammable hydrogen gas accumulation."
        ]
      }
    ]
  },
  {
    id: "hse-706",
    code: "HSE-706",
    title: "Slips, Trips & Falls Prevention",
    category: "Workplace Health & Ergonomics",
    description: "Housekeeping standards, floor contamination control, trailing cable management, anti-slip footwear, and wet surface warning demarcation.",
    difficulty: "Beginner",
    duration: "15 mins",
    progress: 0,
    status: "Published",
    icon: "Footprints",
    gradient: "from-teal-600 to-emerald-600",
    summary: "Prevent the single most common cause of workplace injury through proactive housekeeping, immediate spill containment, and clear walkway maintenance.",
    lessons: [
      {
        id: 1,
        title: "1. Proactive Housekeeping & Floor Hazard Mitigation",
        objectives: [
          "Identify the primary causes of warehouse slips, trips, and level falls",
          "Implement 'Clean as you go' housekeeping practices across all packing and dispatch bays",
          "Position high-visibility yellow floor warning cones at wet or contaminated zones"
        ],
        content: "Slips and trips account for over a third of all non-fatal major injuries reported to the Health and Safety Executive (HSE) each year. The majority of these incidents are completely preventable through disciplined housekeeping. Slip hazards typically result from fluid leaks, condensation, and plastic film discarded on polished concrete. Trip hazards stem from stray banding, discarded pallets, uneven expansion joints, and trailing electrical power cords.",
        warnings: [
          "Never step over loose plastic strapping or pallet banding; banding wraps easily around ankles causing violent falls.",
          "Do not run or rush on stairs or wet ramps under any circumstances."
        ],
        rules: [
          "Adopt a 'See it, Sort it' culture: clean up liquid spills immediately or place hazard cones while fetching a mop.",
          "Ensure footwear features certified slip-resistant soles (SRC rating) with clean tread patterns.",
          "Keep all stairwells, aisles, and emergency exits clear of discarded boxes and empty wooden pallets."
        ]
      }
    ]
  }
];