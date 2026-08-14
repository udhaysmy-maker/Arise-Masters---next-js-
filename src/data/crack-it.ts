export type CoachingAudience = {
  category: string;
  who: string;
};

export type Differentiator = {
  title: string;
  desc: string;
};

export type ProcessStage = {
  stage: string;
  whatHappens: string;
};

export const crackIt = {
  programName: "CRACK IT",
  tagline: "Personalized Interview Mastery Coaching by Arise Masters",
  hero: {
    headline: "Your Next \"Yes\" Starts With the Right Preparation.",
    subheadline:
      "Whether it's a Government exam interview, a PSU panel, an IT technical round, or a corporate leadership interview — Arise Masters gives you personalized, one-on-one coaching designed around YOU, not a generic script.",
    supportingLine:
      "We don't just prepare you to answer questions. We prepare you to walk in with confidence, clarity, and command — and walk out with an offer.",
  },
  whyExists: {
    intro: "Most people don't fail interviews because they lack knowledge. They fail because they:",
    painPoints: [
      "Freeze under pressure and lose their train of thought",
      "Struggle to structure answers clearly, even when they know the subject",
      "Can't communicate their real strengths with confidence",
      "Have never practiced in a real, high-pressure, panel-style environment",
      "Don't know how to handle unexpected or tricky questions",
    ],
    closing:
      "Arise Masters exists to fix exactly that. With a certified corporate facilitator and leadership trainer at the helm, this isn't generic interview advice you find online — it's a structured, personalized coaching journey built around your specific interview, your specific role, and your specific weak spots.",
  },
  audience: [
    { category: "Government Interviews", who: "UPSC, State PSC, banking, defence, and other government recruitment interviews" },
    { category: "PSU Interviews", who: "Public Sector Undertaking panel interviews across technical and managerial roles" },
    { category: "IT & Tech Interviews", who: "Technical rounds, HR rounds, and managerial rounds for IT professionals — freshers to leadership" },
    { category: "Corporate & Leadership Interviews", who: "Mid-to-senior level corporate roles, career switches, and leadership panel interviews" },
    { category: "Freshers & First-Time Job Seekers", who: "Campus placements and first-job interview readiness" },
    { category: "Career Returners & Switchers", who: "Professionals returning after a break or switching industries/roles" },
  ] satisfies CoachingAudience[],
  audienceClosing: "If there's an interview between you and your goal — we prepare you to walk through that door and own the room.",
  differentiators: [
    { title: "1-on-1 Personalized Coaching", desc: "Every session is built around your background, your target role, and your specific interview format — not a one-size-fits-all template" },
    { title: "Real Mock Interview Simulations", desc: "Practice under realistic panel conditions, with honest, constructive feedback after every round" },
    { title: "Body Language & Communication Coaching", desc: "Because how you say it matters as much as what you say" },
    { title: "Emotional Intelligence & Confidence Building", desc: "Led by a certified Leadership & EI trainer, so you learn to manage interview anxiety, not just mask it" },
    { title: "Answer Structuring Frameworks", desc: "Learn how to structure answers (including STAR-based response techniques) so every answer sounds clear, confident, and complete" },
    { title: "Government & PSU-Specific Preparation", desc: "Panel etiquette, expected question patterns, and domain-specific readiness" },
    { title: "IT/Technical Interview Readiness", desc: "Technical Q&A practice combined with HR round confidence-building" },
    { title: "Post-Session Feedback Reports", desc: "Honest, actionable feedback after every mock round — not vague encouragement" },
  ] satisfies Differentiator[],
  process: [
    { stage: "1. Discovery Session", whatHappens: "Understand your target role, interview type, background, and current confidence gaps" },
    { stage: "2. Personalized Coaching Plan", whatHappens: "A tailored roadmap — communication, technical readiness, EQ, and interview-specific strategy" },
    { stage: "3. Skill-Building Sessions", whatHappens: "Focused 1-on-1 sessions on communication, body language, answer structuring, and domain readiness" },
    { stage: "4. Real Mock Interviews", whatHappens: "Simulated panel-style interviews with detailed, honest feedback" },
    { stage: "5. Final Readiness Round", whatHappens: "A final confidence-check mock round before your actual interview" },
  ] satisfies ProcessStage[],
  formatOptions: [
    "1-on-1 personalized coaching",
    "Fast-track single-session prep",
    "Multi-session intensive programs",
  ],
  trust: {
    headline: "Why Trust Arise Masters With Your Career Moment?",
    intro:
      "Arise Masters is founded and led by Archana Balu — a Certified Corporate Facilitator, Certified Leadership & Emotional Intelligence Trainer, and a professional with 10+ years of real IT industry experience. This isn't theoretical coaching. It's built by someone who understands what panels are actually looking for, because she's been on both sides of the professional world.",
    points: [
      "Personalized — never a copy-paste script",
      "Confidential — your prep, your pace, your comfort",
      "Honest — real feedback, not empty reassurance",
      "Outcome-focused — built to get you interview-ready, not just \"informed\"",
    ],
    closing:
      "Your interview is one of the most important moments in your career. It deserves more than YouTube videos and generic tips — it deserves a real strategy.",
  },
  cta: {
    headline: "Your Dream Role Is Waiting. Let's Make Sure You're Ready For It.",
    buttonText: "Book Your Personalized Coaching Session",
    closingLine:
      "One interview can change your career. One coaching program can change how you walk into it. Arise Masters — Your Rise Begins Here.",
  },
};
