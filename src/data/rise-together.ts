export type RiseTogetherModule = {
  module: string;
  focus: string;
  activities: string;
  outcome: string;
};

export type DeliveryFormat = {
  name: string;
  duration: string;
  desc: string;
};

export const riseTogether = {
  programName: "RISE TOGETHER",
  alternateName: "The Rise Lab",
  tagline: "Arise Masters' Signature Experiential Team-Building & Leadership Program",
  supportingTagline: "We Don't Train Teams. We Transform Them.",
  philosophy:
    "Forget PowerPoints that put people to sleep. RISE TOGETHER is built on one hard truth: people don't change because they were told to — they change because they experienced it. Every session runs on the proven Experiential Learning Cycle, engineered to convert activity into action long after the workshop ends.",
  experientialLearningCycle: ["Experience", "Reflect", "Generalize", "Apply"],
  objectives: [
    "Forge unbreakable trust and communication within teams",
    "Dismantle silos between departments and functions",
    "Build sharp, self-aware, emotionally intelligent leaders",
    "Sharpen decision-making and problem-solving under real pressure",
    "Instill a fearless, ownership-driven, entrepreneurial mindset",
    "Build a workplace culture that is safe, respectful, and legally sound",
  ],
  audience: [
    "Corporates and IT/ITES organizations serious about culture as a competitive edge",
    "First-time managers stepping into leadership",
    "Newly merged or cross-functional teams needing fast alignment",
    "Organizations undergoing culture transformation, scale-up, or hybrid-work realignment",
  ],
  modules: [
    {
      module: "Module 1: Ignite Trust",
      focus: "Psychological safety, rapport",
      activities: "Human Knot, Trust Circles, Reimagined Icebreakers",
      outcome: "Faster bonding, zero hierarchy friction",
    },
    {
      module: "Module 2: Command Communication",
      focus: "Active listening, clarity, feedback",
      activities: "Blindfold Maze, Business Whispers, Back-to-Back Build",
      outcome: "Fewer breakdowns, sharper cross-team clarity",
    },
    {
      module: "Module 3: Collaborate & Conquer",
      focus: "Collective decision-making",
      activities: "Marshmallow Challenge, Egg Drop, Escape Room Simulation",
      outcome: "Teams that solve hard problems together, fast",
    },
    {
      module: "Module 4: Lead with EQ",
      focus: "Self-awareness, empathy, conflict mastery",
      activities: "EI Mapping, Live Role-Play Simulations, Perspective Circles",
      outcome: "Leaders who manage people, not just projects",
    },
    {
      module: "Module 5: Think Like an Owner",
      focus: "Innovation, accountability, risk-taking",
      activities: "Business Simulation Game, 10-Minute Pitch Challenge, Failure Resume",
      outcome: "An entrepreneurial mindset embedded across the org",
    },
    {
      module: "Module 6: Respect in Action (POSH & POCSO)",
      focus: "Compliance + culture of respect",
      activities: "Scenario Case Studies, Bystander Intervention Drills, Certified Facilitator Q&A",
      outcome: "A workplace that is compliant, safe, and trusted",
    },
  ] satisfies RiseTogetherModule[],
  moduleFootnote:
    "Every module ends with a facilitated debrief that ties the activity directly to workplace reality — this is what separates Arise Masters from \"fun and games\" vendors.",
  deliveryFormats: [
    { name: "Half-Day Sprint", duration: "4 hrs", desc: "Two focused modules, built for team offsites" },
    { name: "Full-Day Immersion", duration: "8 hrs", desc: "Three to four modules with deep-dive debriefs" },
    { name: "2-Day Leadership Retreat", duration: "2 days", desc: "Full program including EQ and entrepreneurship tracks" },
    { name: "Compliance Intensives", duration: "Custom", desc: "Dedicated POSH / POCSO Train-the-Trainer certification workshops" },
    { name: "Virtual/Hybrid Editions", duration: "Custom", desc: "High-energy digital breakout adaptations of every core activity" },
  ] satisfies DeliveryFormat[],
  batchSize: "15–40 participants per batch (scalable with co-facilitators for larger enterprise rollouts)",
  whatClientsGet: [
    "Pre-program discovery call and needs assessment",
    "Fully customized activity design mapped to your team's real challenges",
    "Post-program impact report with behavioral recommendations",
    "Certificates of participation (formal certification for POSH/POCSO tracks)",
  ],
};
