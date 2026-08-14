export type ActivityTag = "Trust-Building" | "Leadership" | "Communication" | "Strategy";

export type Activity = {
  slug: string;
  name: string;
  category: "Indoor" | "Outdoor";
  focus: string;
  purpose: string;
  benefits: string;
  tags: ActivityTag[];
};

export const activities: Activity[] = [
  {
    slug: "human-knot",
    name: "Human Knot",
    category: "Indoor",
    focus: "Trust & Collaboration",
    purpose: "Team stands in a circle, joins hands randomly, and must untangle itself without letting go.",
    benefits: "Builds problem-solving under physical constraint, encourages verbal communication, and breaks down personal space barriers between colleagues.",
    tags: ["Trust-Building"],
  },
  {
    slug: "marshmallow-challenge",
    name: "Marshmallow Challenge",
    category: "Indoor",
    focus: "Innovation & Problem-Solving",
    purpose: "Teams build the tallest free-standing structure using spaghetti, tape, string, and one marshmallow — in 18 minutes.",
    benefits: "Encourages rapid prototyping, teaches teams to fail fast and adapt, and reveals how planning vs. action balance affects outcomes.",
    tags: ["Strategy"],
  },
  {
    slug: "blindfold-maze",
    name: "Blindfold Maze / Trust Walk",
    category: "Indoor",
    focus: "Trust & Communication",
    purpose: "One teammate is blindfolded and guided through an obstacle course using only verbal instructions from a partner.",
    benefits: "Builds deep trust, sharpens active listening, and strengthens precise, clear communication under pressure.",
    tags: ["Trust-Building", "Communication"],
  },
  {
    slug: "back-to-back-drawing",
    name: "Back-to-Back Drawing",
    category: "Indoor",
    focus: "Communication",
    purpose: "Two participants sit back-to-back — one describes a shape/image, the other draws it without seeing it.",
    benefits: "Highlights gaps in communication clarity, teaches structured instruction-giving, and builds patience and active listening.",
    tags: ["Communication"],
  },
  {
    slug: "business-whispers",
    name: "Business Whispers",
    category: "Indoor",
    focus: "Communication",
    purpose: "A business message is passed verbally down a chain of team members; the final version is compared to the original.",
    benefits: "Demonstrates how information distorts across teams, reinforcing the need for clear, documented communication in the workplace.",
    tags: ["Communication"],
  },
  {
    slug: "escape-room-simulation",
    name: "Escape Room Simulation",
    category: "Indoor",
    focus: "Problem-Solving & Leadership",
    purpose: "Teams solve a series of puzzles and clues within a time limit to \"escape\" a themed room or scenario.",
    benefits: "Builds collaborative problem-solving, reveals natural leaders under pressure, and boosts collective decision-making speed.",
    tags: ["Leadership", "Strategy"],
  },
  {
    slug: "perfect-square",
    name: "The Perfect Square",
    category: "Indoor",
    focus: "Leadership & Coordination",
    purpose: "A blindfolded team must form a perfect square using a single rope, relying only on verbal coordination.",
    benefits: "Strengthens group coordination, surfaces informal leadership, and builds patience in achieving a shared goal.",
    tags: ["Leadership"],
  },
  {
    slug: "pitch-challenge",
    name: "10-Minute Pitch Challenge",
    category: "Indoor",
    focus: "Entrepreneurship & Confidence",
    purpose: "Small teams are given a random product/problem and must build and present a business pitch in 10 minutes.",
    benefits: "Builds an ownership mindset, sharpens quick thinking, and develops confident public speaking under time pressure.",
    tags: ["Communication"],
  },
  {
    slug: "egg-drop-challenge",
    name: "Egg Drop Challenge",
    category: "Outdoor",
    focus: "Innovation & Risk-Taking",
    purpose: "Teams design a protective structure to prevent a raw egg from breaking when dropped from a height.",
    benefits: "Encourages creative engineering thinking, calculated risk-taking, and teamwork under a clear, visible goal.",
    tags: ["Strategy"],
  },
  {
    slug: "bridge-building-challenge",
    name: "Bridge Building Challenge",
    category: "Outdoor",
    focus: "Collaboration & Strategy",
    purpose: "Two sub-teams design and build separate halves of a bridge using limited materials — which must connect perfectly in the middle.",
    benefits: "Builds cross-team coordination, strategic planning, and highlights the cost of poor communication between groups.",
    tags: ["Strategy"],
  },
  {
    slug: "tug-of-war",
    name: "Tug of War (Strategy Edition)",
    category: "Outdoor",
    focus: "Team Spirit & Motivation",
    purpose: "Classic tug-of-war reimagined with strategy rounds — teams choose formation, timing, and tactics before pulling.",
    benefits: "Builds physical team synergy, boosts morale and energy, and reinforces the value of collective strategy over individual strength.",
    tags: ["Strategy"],
  },
  {
    slug: "amazing-race",
    name: "Amazing Race (Corporate Edition)",
    category: "Outdoor",
    focus: "Leadership & Time Management",
    purpose: "Teams navigate a series of location-based challenges and clues across a campus or outdoor area, racing against time.",
    benefits: "Sharpens time management, decision-making under pressure, and natural leadership emergence within teams.",
    tags: ["Leadership"],
  },
  {
    slug: "human-chess",
    name: "Human Chess / Life-Size Board Games",
    category: "Outdoor",
    focus: "Strategic Thinking",
    purpose: "Teams act as \"living pieces\" on a giant board game, making real-time strategic moves as a group.",
    benefits: "Builds strategic thinking, collective decision-making, and teaches teams to think several steps ahead together.",
    tags: ["Strategy"],
  },
  {
    slug: "obstacle-course-relay",
    name: "Obstacle Course Relay",
    category: "Outdoor",
    focus: "Endurance & Team Coordination",
    purpose: "Teams complete a physical obstacle course in relay format, each member depending on the next.",
    benefits: "Builds physical energy and morale, reinforces accountability to teammates, and strengthens group resilience.",
    tags: [],
  },
  {
    slug: "flag-capture",
    name: "Flag Capture / Strategic Territory Game",
    category: "Outdoor",
    focus: "Strategy & Leadership",
    purpose: "Teams compete to capture an opposing team's \"flag\" using strategy, stealth, and coordinated movement.",
    benefits: "Builds tactical planning, situational leadership, and reinforces the balance between individual initiative and team strategy.",
    tags: ["Strategy", "Leadership"],
  },
];
