"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Users,
  MessageSquare,
  Mic,
  ShieldCheck,
  Briefcase,
  UserCheck,
  TrendingUp,
  GraduationCap,
  Building2,
  Handshake,
  Wrench,
  Check,
  Star,
  Plus,
  Minus,
  MapPin,
  Phone,
  Mail,
  Award,
  Target,
  ClipboardCheck,
  Layers,
  LineChart,
  Quote,
  User,
  Rocket,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { GalleryTile } from "@/components/site/GalleryTile";
import { GalleryLightbox } from "@/components/site/GalleryLightbox";
import { featuredGalleryImages } from "@/data/gallery";

const heroImg = "/assets/archana-balu-latest.png";
const archanaImg = "/assets/archana-balu.jpeg";
const aboutImg = "/assets/about-latest.png";
const corporateImg = "/assets/corporate.png";
const collegeImg = "/assets/college.png";

export default function Home() {
  return (
    <div id="top" className="bg-background text-ink">
      <Nav />
      <Hero />
      <TrustedBy />
      <About />
      <Breakthrough />
      <MeetTrainer />
      <Programs />
      <Solutions />
      <WhyChoose />
      <Methodology />
      <Industries />
      <Stories />
      <Testimonials />
      {/* <Gallery /> temporarily hidden — uncomment to restore */}
      <FAQ />
      <CTA />
      <Contact />
      <MapSection />
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ---------- HERO ---------- */
const heroStats = [
  { n: 500, s: "+", l: "Training Sessions" },
  { n: 100, s: "+", l: "Corporate Clients" },
  { n: 1000, s: "+", l: "Professionals Trained" },
  { n: 15, s: "+", l: "Training Programs" },
];

const heroParticles = [
  { top: "16%", left: "6%", size: 3, delay: 0, dur: 9 },
  { top: "74%", left: "9%", size: 2, delay: 1.4, dur: 11 },
  { top: "28%", left: "93%", size: 3, delay: 0.6, dur: 10 },
  { top: "86%", left: "88%", size: 2, delay: 2, dur: 8 },
  { top: "8%", left: "48%", size: 2, delay: 1, dur: 12 },
  { top: "58%", left: "36%", size: 2, delay: 2.4, dur: 9 },
  { top: "42%", left: "18%", size: 2, delay: 0.8, dur: 10 },
  { top: "66%", left: "72%", size: 3, delay: 1.8, dur: 11 },
  { top: "20%", left: "76%", size: 2, delay: 0.3, dur: 9 },
  { top: "92%", left: "46%", size: 2, delay: 1.2, dur: 10 },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.4 });

  const imgX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const imgY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const cardNearX = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const cardNearY = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const cardFarX = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const cardFarY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative isolate overflow-hidden pt-24 pb-20 md:pt-28 md:pb-24"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="floaty absolute -top-40 -right-32 h-[560px] w-[560px] rounded-full bg-primary/14 blur-3xl" />
          <div className="floaty-slow absolute top-1/4 -left-40 h-[480px] w-[480px] rounded-full bg-accent/35 blur-3xl" />
          <div className="floaty absolute bottom-0 right-1/3 h-[320px] w-[320px] rounded-full bg-primary/[0.08] blur-3xl" />
          <div className="floaty-slow absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-ink/[0.05] blur-3xl" />
        </motion.div>
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,white_0%,transparent_62%)]" />
        <div className="absolute inset-x-0 top-0 h-[70vh] bg-[linear-gradient(180deg,rgba(255,255,255,0.85),transparent)]" />
        {heroParticles.map((p, i) => (
          <span
            key={i}
            className="hero-particle absolute rounded-full bg-ink/25"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT: copy, CTAs, stats */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-ink-soft backdrop-blur">
                <Sparkles size={14} className="text-primary" />
                Soft Skills Training · Corporate Training · Leadership · Placement
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl lg:text-[4.5rem]">
                Transform People.
                <br />
                Empower Teams.
                <br />
                <span className="italic text-primary">Build Future Leaders.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-ink-soft">
                We empower individuals, teams, and organizations with transformative training that builds confidence, enhances communication, and develops future-ready leaders.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn-primary">
                  Book Consultation <ArrowRight size={16} />
                </a>
                <a href="#programs" className="btn-ghost">
                  Explore Programs
                </a>
              </div>
            </Reveal>

            <Stagger
              className="mt-16 grid max-w-md grid-cols-2 gap-x-8 gap-y-10 border-t border-ink/10 pt-10"
              step={0.08}
            >
              {heroStats.map((s) => (
                <StaggerItem key={s.l}>
                  <p className="font-display text-4xl font-semibold text-ink">
                    <Counter to={s.n} suffix={s.s} />
                  </p>
                  <p className="mt-1.5 text-sm text-ink-soft">{s.l}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* RIGHT: image, floating glass cards, certification badge */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto w-fit">
              <motion.div style={{ x: imgX, y: imgY }} className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-transparent to-primary/15 blur-2xl" />
                <div className="group relative h-[52vh] max-h-[660px] min-h-[640px] w-fit overflow-hidden rounded-[2rem] shadow-float ring-1 ring-ink/5">
                  <Image
                    src={heroImg}
                    alt="Welcome poster: Archana Balu, IBTC Certified Trainer & Coach at Arise Masters"
                    width={1086}
                    height={1448}
                    priority
                    className="h-full w-auto object-contain transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
              </motion.div>

              {/* certification badge */}
              <motion.div
                style={{ x: cardNearX, y: cardNearY }}
                className="pointer-events-none absolute -left-4 -top-5 hidden sm:block md:-left-8"
              >
                <FloatingBadge icon={ShieldCheck} label="IBTC Certified Trainer & Coach" />
              </motion.div>

              {/* rating card */}
              <motion.div
                style={{ x: cardNearX, y: cardNearY }}
                className="pointer-events-none absolute -right-4 top-10 hidden sm:block md:-right-8"
              >
                <FloatingCard>
                  <p className="text-[11px] uppercase tracking-widest text-ink-soft">Rating</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="font-display text-2xl">4.9</span>
                    <Star size={15} className="fill-accent text-accent" />
                  </div>
                </FloatingCard>
              </motion.div>

              {/* satisfaction card */}
              <motion.div
                style={{ x: cardFarX, y: cardFarY }}
                className="pointer-events-none absolute -left-4 bottom-1 hidden sm:block md:-left-10"
              >
                <FloatingCard>
                  <p className="text-[11px] uppercase tracking-widest text-ink-soft">Satisfaction</p>
                  <p className="mt-1 font-display text-2xl">98%</p>
                </FloatingCard>
              </motion.div>

              {/* success metric card */}
              <motion.div
                style={{ x: cardFarX, y: cardFarY }}
                className="pointer-events-none absolute -right-4 -bottom-6 hidden sm:block md:-right-8"
              >
                <FloatingCard>
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <TrendingUp size={16} />
                    </span>
                    <div>
                      <p className="font-display text-xl leading-none">
                        <Counter to={1000} suffix="+" />
                      </p>
                      <p className="mt-1 text-[11px] text-ink-soft">Professionals Trained</p>
                    </div>
                  </div>
                </FloatingCard>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to explore"
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-2 text-ink-soft/70 transition-colors hover:text-ink md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">Scroll</span>
        <span className="relative grid h-10 w-6 place-items-center rounded-full border border-ink/15">
          <motion.span
            className="absolute top-1.5 h-1.5 w-1.5 rounded-full bg-primary"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </a>
    </section>
  );
}

function FloatingCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="glass rounded-2xl px-5 py-4 shadow-soft"
    >
      {children}
    </motion.div>
  );
}

function FloatingBadge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="glass flex items-center gap-2 rounded-full px-4 py-2.5 shadow-soft"
    >
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-white">
        <Icon size={12} />
      </span>
      <span className="whitespace-nowrap text-xs font-medium text-ink">{label}</span>
    </motion.div>
  );
}

/* ---------- TRUSTED BY ---------- */
const clientLogos = [
  { src: "/assets/clients/bpcl.png", name: "BPCL", w: 179, h: 112 },
  { src: "/assets/clients/msme.png", name: "MSME", w: 203, h: 112 },
  { src: "/assets/clients/saveetha.png", name: "Saveetha Engineering College", w: 203, h: 112 },
  { src: "/assets/clients/sridevi.png", name: "Sridevi Arts and Science College", w: 203, h: 112 },
  { src: "/assets/clients/srm.png", name: "SRM College Vadapalani", w: 179, h: 112 },
  { src: "/assets/clients/assure.png", name: "Assure E Services", w: 203, h: 112 },
  { src: "/assets/clients/kothari.png", name: "Kothari Group of Companies", w: 203, h: 112 },
  { src: "/assets/clients/maxim.png", name: "Maxim Hydraulic", w: 203, h: 112 },
  { src: "/assets/clients/bng.png", name: "BNG Technology", w: 179, h: 112 },
  { src: "/assets/clients/pushkar.png", name: "Pushkar Properties", w: 203, h: 112 },
  { src: "/assets/clients/goodshepherd.png", name: "Good Shepherd School", w: 203, h: 112 },
  { src: "/assets/clients/mottukal.png", name: "Mottukal NGO", w: 203, h: 112 },
];

function TrustedBy() {
  return (
    <section className="section-seam border-b border-ink/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.4))] py-12 backdrop-blur-sm">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft">
          Trusted by 1000+ professionals across
        </p>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-12 pr-12">
            {[...clientLogos, ...clientLogos].map((l, i) => (
              <Image
                key={i}
                src={l.src}
                alt={l.name}
                width={l.w}
                height={l.h}
                className="h-12 w-auto shrink-0 object-contain opacity-80 transition duration-300 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-32 md:py-44">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="group relative h-[560px] w-full overflow-hidden rounded-[2rem] shadow-elevated ring-1 ring-ink/5">
              <Image
                src={aboutImg}
                alt="Arise Masters lead trainer engaging with participants"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-2xl bg-ink p-6 text-white shadow-elevated md:block">
              <p className="font-display text-3xl leading-tight">15+</p>
              <p className="mt-1 text-sm text-white/70">
                Years crafting people-first learning experiences.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionEyebrow>Our Vision & Mission</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
              India's most sought-after force in corporate human transformation.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Our brand promise: every person who walks in for training, walks
              out with their rise already begun. We're your one place for
              everything — behavioural training, personality development,
              team-building, leadership training, public speaking, emotional
              intelligence, and personalized interview coaching for
              government, PSU, IT, and corporate roles.
            </p>
          </Reveal>
          <Reveal delay={0.13}>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              <span className="font-medium text-ink">Our Mission — </span>
              At Arise Masters, we exist to turn ordinary teams into
              unstoppable ones. We combine certified expertise, experiential
              learning, and bold facilitation to build workplaces and
              transform individuals defined by trust, emotional intelligence,
              and relentless collaboration.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              ["Activity-driven learning", "High-impact learning that creates visible behavioral change — not another forgettable offsite."],
              ["Certified compliance training", "Safer, more respectful workplaces through certified POSH and POCSO training."],
              ["Entrepreneurial leaders", "Cultivating entrepreneurial thinkers and emotionally intelligent leaders at every level."],
              ["Proven ROI", "Measurable shifts in team performance — not just smiles on a feedback form."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={0.18 + i * 0.06}>
                <div className="card-premium !rounded-2xl p-6">
                  <p className="font-medium text-ink">{t}</p>
                  <p className="mt-1 text-sm text-ink-soft">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BREAKTHROUGH STATEMENT ---------- */
function Breakthrough() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="floaty-slow absolute -left-24 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="floaty absolute -right-24 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Quote size={26} className="mx-auto text-primary" strokeWidth={1.5} />
            <p className="mt-6 font-display text-3xl leading-[1.15] tracking-tight md:text-5xl">
              We don&apos;t run training sessions.
              <br />
              We engineer breakthroughs.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- MEET THE TRAINER ---------- */
const trainers = [
  {
    name: "Archana Balu",
    role: "Founder & Corporate Facilitator",
    credential: "Certified HR Business Partner & POSH/POCSO Trainer",
    bio: "10+ years across HR and corporate training — the credibility of someone who has actually lived the pressures she now helps teams overcome. Every session is bold, immersive, and built to leave a mark long after the workshop badge comes off.",
    img: archanaImg,
    href: "/trainers/archana-balu",
  },
  {
    name: "Balu E",
    role: "Leadership & Project Management Advisor",
    credential: "30+ Yrs, IGCAR (Dept. of Atomic Energy)",
    bio: "Three decades as Scientific Officer & Section Director at IGCAR — brings real-world project leadership, engineering rigour and execution discipline into every program.",
    img: null,
  },
  {
    name: "Jayaseelan Ganesan",
    role: "Entrepreneurship & Soft Skills Faculty",
    credential: "MBA, IIM Calcutta",
    bio: "45+ years across Career Launcher, NSIC (Ministry of MSME) and leading B-schools — veteran faculty in entrepreneurship, whole-brain thinking and organisational psychology.",
    img: null,
  },
];

function MeetTrainer() {
  return (
    <section className="section-seam relative overflow-hidden bg-gradient-to-b from-background via-cream to-background py-32 md:py-44">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Meet Our Trainers</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
              The practitioners behind every program.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Certified trainers and senior industry advisors bringing decades
              of real-world expertise into every room.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-24 md:grid-cols-3">
          {trainers.map((t, i) => (
            <TrainerCard key={t.name} {...t} delay={0.1 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainerCard({
  name,
  role,
  credential,
  bio,
  img,
  delay,
  href,
}: {
  name: string;
  role: string;
  credential: string;
  bio: string;
  img: string | null;
  delay: number;
  href?: string;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group relative">
        <div className="relative h-72 w-full overflow-hidden rounded-[2rem] shadow-elevated ring-1 ring-ink/5">
          {img ? (
            <Image
              src={img}
              alt={`${name}, ${role} at Arise Masters`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-accent/15 to-cream">
              <User className="h-16 w-16 text-ink/25" strokeWidth={1.25} />
            </div>
          )}
        </div>
        <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-elevated ring-1 ring-ink/5">
          <Award size={16} className="shrink-0 text-primary" />
          <p className="text-xs font-semibold leading-snug text-ink">{credential}</p>
        </div>
      </div>
      <div className="mt-10 px-1">
        <h3 className="font-display text-2xl text-ink">{name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{role}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">{bio}</p>
        {href && (
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 hover:gap-3"
          >
            View full profile
            <ArrowUpRight size={15} />
          </Link>
        )}
      </div>
    </Reveal>
  );
}

/* ---------- PROGRAMS ---------- */
const PROGRAM_THEMES = [
  {
    iconBg: "linear-gradient(135deg, var(--color-primary), color-mix(in oklab, var(--color-primary) 74%, black))",
    iconFg: "text-white",
    ring: "conic-gradient(from 0deg, var(--color-primary), transparent 28%, var(--color-primary) 52%, transparent 82%, var(--color-primary))",
    blob: "color-mix(in oklab, var(--color-primary) 20%, transparent)",
    number: "var(--color-primary)",
    accentText: "text-primary",
  },
  {
    iconBg: "linear-gradient(135deg, var(--color-accent), color-mix(in oklab, var(--color-accent) 82%, black))",
    iconFg: "text-ink",
    ring: "conic-gradient(from 0deg, var(--color-accent), transparent 28%, var(--color-accent) 52%, transparent 82%, var(--color-accent))",
    blob: "color-mix(in oklab, var(--color-accent) 32%, transparent)",
    number: "color-mix(in oklab, var(--color-accent) 55%, var(--color-ink))",
    accentText: "text-[#a9791b]",
  },
  {
    iconBg: "linear-gradient(135deg, var(--color-ink), color-mix(in oklab, var(--color-ink) 65%, white))",
    iconFg: "text-white",
    ring: "conic-gradient(from 0deg, var(--color-ink), transparent 28%, var(--color-ink) 52%, transparent 82%, var(--color-ink))",
    blob: "color-mix(in oklab, var(--color-ink) 16%, transparent)",
    number: "var(--color-ink)",
    accentText: "text-ink",
  },
] as const;

function Programs() {
  const items = [
    { icon: Users, title: "Behavioural Training", desc: "Rewire mindsets, habits and team dynamics through experiential learning." },
    { icon: TrendingUp, title: "Leadership & Emotional Intelligence", desc: "Built for leaders who refuse to settle — decisive, empathetic leadership ready for the next horizon." },
    { icon: MessageSquare, title: "Communication Skills", desc: "Clear, confident, high-impact communication for every level." },
    { icon: Sparkles, title: "Personality Development", desc: "Build the presence and polish that opens rooms." },
    { icon: Mic, title: "Public Speaking", desc: "From stage-fright to standing ovations — structured storytelling." },
    { icon: ShieldCheck, title: "POSH & POCSO Training", desc: "Certified prevention-of-harassment and child-protection training that builds a workplace people trust." },
    { icon: UserCheck, title: "Interview Skills", desc: "Interview mastery for freshers and mid-career professionals.", href: "/programs/interview-coaching" },
    { icon: Handshake, title: "Team Building", desc: "RISE TOGETHER — our signature experiential team-building program.", href: "/programs/rise-together" },
    { icon: Rocket, title: "Entrepreneurship Track", desc: "Think Like an Owner — innovation, accountability and risk-taking, built into every level of the org.", href: "/programs/rise-together" },
    { icon: Briefcase, title: "Sales Training", desc: "Consultative selling, negotiation and pipeline discipline." },
    { icon: GraduationCap, title: "Placement Training", desc: "End-to-end campus readiness — aptitude to attitude." },
    { icon: Layers, title: "Corporate Soft Skills", desc: "The behavioural fabric that holds high-performing teams together." },
    { icon: Building2, title: "Corporate HR Training", desc: "Where high-performing cultures are built — on purpose. Modernise the HR function with practitioner-led workshops." },
    { icon: Wrench, title: "Customised Workshops", desc: "Bespoke journeys built around your outcomes and audience." },
  ];

  return (
    <section id="programs" className="section-seam aura relative overflow-hidden bg-gradient-to-b from-cream via-cream to-background py-32 md:py-44">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal>
              <SectionEyebrow>Training Programs</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-2xl font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
                A studio of programs — from soft skills to leadership.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a href="#contact" className="btn-ghost self-start md:self-end">
              Request curriculum <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        <Stagger
          className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          step={0.06}
        >
          {items.map((it, i) => (
            <StaggerItem key={it.title} className="h-full">
              <ProgramCard {...it} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ProgramCard({
  icon: Icon,
  title,
  desc,
  index,
  href,
}: {
  icon: any;
  title: string;
  desc: string;
  index: number;
  href?: string;
}) {
  const theme = PROGRAM_THEMES[index % PROGRAM_THEMES.length];
  const number = String(index + 1).padStart(2, "0");
  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className="group relative block h-full rounded-[1.75rem] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:scale-[1.02]"
    >
      {/* animated rotating gradient border */}
      <div className="absolute inset-0 overflow-hidden rounded-[1.75rem]">
        <div
          className="program-ring absolute left-1/2 top-1/2 h-[220%] w-[220%] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundImage: theme.ring }}
        />
      </div>

      {/* card body */}
      <div className="program-card relative m-[1.5px] flex h-[calc(100%-3px)] flex-col overflow-hidden rounded-[calc(1.75rem-1.5px)] p-8">
        {/* accent gradient blob */}
        <div
          className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: theme.blob }}
        />

        <div className="relative flex items-start justify-between">
          <span
            className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${theme.iconFg}`}
            style={{ backgroundImage: theme.iconBg }}
          >
            <Icon size={22} strokeWidth={1.6} />
          </span>
          <span
            className="font-display text-6xl font-semibold leading-none opacity-[0.1] transition-opacity duration-500 group-hover:opacity-20"
            style={{ color: theme.number }}
          >
            {number}
          </span>
        </div>

        <h3 className="relative mt-7 font-display text-2xl leading-tight text-ink">{title}</h3>
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{desc}</p>

        <div className={`relative mt-6 flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3 ${theme.accentText}`}>
          Learn more
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Wrapper>
  );
}

/* ---------- INDUSTRIES ---------- */
function Industries() {
  const items = [
    { title: "Corporate Companies", desc: "Enterprise L&D partnerships." },
    { title: "HR Teams", desc: "Function-focused capability building." },
    { title: "Engineering Colleges", desc: "Campus-to-corporate readiness." },
    { title: "Universities", desc: "Curriculum-aligned workshops." },
    { title: "Training Institutes", desc: "Faculty & program consulting." },
    { title: "MSMEs", desc: "Right-sized leadership programs." },
    { title: "Placement Officers", desc: "Outcome-focused readiness tracks." },
    { title: "Fresh Graduates", desc: "Interview & career acceleration." },
    { title: "TN Skill Development", desc: "Government-backed skilling & entrepreneurship programs." },
  ];
  return (
    <section id="industries" className="aura relative overflow-hidden py-32 md:py-44">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionEyebrow>Industries We Serve</SectionEyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
              Built for enterprises, campuses and everything between.
            </h2>
          </Reveal>
        </div>
        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" step={0.05}>
          {items.map((it) => (
            <StaggerItem key={it.title} className="h-full">
              <div className="group flex h-full flex-col card-premium p-8">
                <p className="font-display text-2xl leading-snug text-ink">{it.title}</p>
                <p className="mt-2 text-sm text-ink-soft">{it.desc}</p>
                <div className="mt-auto pt-8">
                  <div className="h-px w-10 bg-primary/30 transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- SOLUTIONS ---------- */
function Solutions() {
  return (
    <section className="aura relative overflow-hidden py-28 md:py-40">
      <div className="container-x space-y-28 md:space-y-40">
        <SplitBlock
          eyebrow="Corporate Training Solutions"
          title="Learning journeys that move the culture needle."
          body="From onboarding cohorts to leadership summits, we design multi-format engagements that combine facilitation, coaching and reinforcement. Every program comes with a measurable KPI scorecard."
          bullets={[
            "Live in-person & virtual workshops",
            "Role-based leadership tracks",
            "POSH, DEI & compliance programs",
            "HR capability transformation",
          ]}
          image={corporateImg}
          cta="Design a program"
          reverse={false}
        />
        <SplitBlock
          eyebrow="College Placement Programs"
          title="Turning campuses into confident, hireable talent."
          body="Our placement readiness tracks blend aptitude, communication, personality and mock interview labs — delivered on campus or online across an entire academic year."
          bullets={[
            "Year-long campus engagements",
            "Aptitude, GD & interview labs",
            "Personality & etiquette modules",
            "Placement officer partnerships",
          ]}
          image={collegeImg}
          cta="Partner with us"
          reverse
        />
      </div>
    </section>
  );
}

function SplitBlock({
  eyebrow,
  title,
  body,
  bullets,
  image,
  cta,
  reverse,
}: {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  cta: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid gap-14 lg:grid-cols-2 lg:items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal>
        <div className="group relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-transparent to-primary/10 blur-2xl" />
          <div className="relative h-[460px] w-full overflow-hidden rounded-[2rem] shadow-elevated ring-1 ring-ink/5">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            />
          </div>
        </div>
      </Reveal>
      <div>
        <Reveal><SectionEyebrow>{eyebrow}</SectionEyebrow></Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-4 font-display text-4xl leading-[1.08] md:text-5xl">
            {title}
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {body}
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {bullets.map((b, i) => (
            <Reveal key={b} delay={0.15 + i * 0.05}>
              <li className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check size={12} strokeWidth={3} />
                </span>
                {b}
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.3}>
          <a href="#contact" className="btn-primary mt-10">
            {cta} <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------- WHY CHOOSE ---------- */
const WHY_ITEMS = [
  { icon: Award, title: "Industry Experts", desc: "Facilitators drawn from real leadership rooms." },
  { icon: Target, title: "Customised Training", desc: "Programs built around your outcomes." },
  { icon: MessageSquare, title: "Interactive Sessions", desc: "Experiential formats, not death-by-slides." },
  { icon: ClipboardCheck, title: "Practical Learning", desc: "Every module ends with an applied task." },
  { icon: GraduationCap, title: "Placement Focus", desc: "Career-ready graduates, hire-ready freshers." },
  { icon: Building2, title: "Corporate Experience", desc: "Deep pattern library across sectors." },
  { icon: Layers, title: "Flexible Delivery", desc: "In-person, virtual, hybrid — your call." },
  { icon: LineChart, title: "Result Driven", desc: "KPI scorecards on every engagement." },
];

const WHY_THEMES = [
  {
    iconBg: "linear-gradient(135deg, var(--color-primary), color-mix(in oklab, var(--color-primary) 70%, black))",
    iconFg: "text-white",
    glow: "color-mix(in oklab, var(--color-primary) 45%, transparent)",
    bgGradient:
      "radial-gradient(120% 120% at 0% 0%, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 55%)",
    numberHover: "group-hover:text-primary",
  },
  {
    iconBg: "linear-gradient(135deg, var(--color-accent), color-mix(in oklab, var(--color-accent) 80%, black))",
    iconFg: "text-ink",
    glow: "color-mix(in oklab, var(--color-accent) 55%, transparent)",
    bgGradient:
      "radial-gradient(120% 120% at 0% 0%, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 55%)",
    numberHover: "group-hover:text-accent",
  },
] as const;

function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink py-32 text-white md:py-44">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="floaty-slow absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
        <div className="floaty absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="container-x relative">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                <span className="h-px w-6 bg-accent" /> The Challenge
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-white md:text-5xl">
                Not another training vendor.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-lg leading-relaxed text-white/70 md:justify-self-end">
              We think like a consulting partner, deliver like a design studio,
              and measure like a product team. That's how we compound outcomes
              for our clients.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" step={0.07}>
          {WHY_ITEMS.map((it, i) => (
            <StaggerItem key={it.title} className="h-full">
              <WhyCard {...it} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function WhyCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: any;
  title: string;
  desc: string;
  index: number;
}) {
  const theme = WHY_THEMES[index % WHY_THEMES.length];
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      className="why-card group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-8"
      style={{ ["--card-glow" as string]: theme.glow } as React.CSSProperties}
    >
      {/* subtle background gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundImage: theme.bgGradient }}
      />

      <span
        className={`relative font-display text-xs tracking-[0.24em] text-white/35 transition-colors duration-500 ${theme.numberHover}`}
      >
        {number}
      </span>

      <span
        className={`relative mt-6 grid h-14 w-14 shrink-0 place-items-center rounded-2xl shadow-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3 ${theme.iconFg}`}
        style={{ backgroundImage: theme.iconBg }}
      >
        <Icon size={24} strokeWidth={1.6} />
      </span>

      <h3 className="relative mt-7 font-display text-2xl leading-tight text-white md:text-[1.7rem]">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/55 transition-colors duration-500 group-hover:text-white/85">
        {desc}
      </p>

      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
}

/* ---------- METHODOLOGY ---------- */
function Methodology() {
  const steps = [
    ["Assess", "Diagnostic interviews, surveys and skill audits."],
    ["Design", "Curriculum tailored to outcomes and audience."],
    ["Deliver", "Experiential workshops in-person or virtual."],
    ["Measure", "KPI scorecards and behavioural indicators."],
    ["Sustain", "Coaching, nudges and reinforcement loops."],
  ];
  return (
    <section id="methodology" className="section-seam aura relative overflow-hidden py-32 md:py-44">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionEyebrow>Training Methodology</SectionEyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
              A five-part rhythm behind every engagement.
            </h2>
          </Reveal>
        </div>
        <Stagger className="mt-16 grid gap-6 md:grid-cols-5" step={0.08}>
          {steps.map(([t, d], i) => (
            <StaggerItem key={t} className="h-full">
              <div className="relative h-full card-premium p-7">
                <p className="font-display text-5xl text-primary">
                  0{i + 1}
                </p>
                <p className="mt-6 font-display text-xl">{t}</p>
                <p className="mt-2 text-sm text-ink-soft">{d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- STORIES ---------- */
function Stories() {
  const stats = [
    { n: 92, s: "%", l: "Average post-program NPS across enterprise clients." },
    { n: 3, s: "×", l: "Faster interview conversion for placement cohorts." },
    { n: 78, s: "%", l: "Managers reporting behaviour shift within 60 days." },
  ];
  return (
    <section id="stories" className="section-seam relative overflow-hidden bg-gradient-to-b from-background via-cream to-cream py-32 md:py-44">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <Reveal><SectionEyebrow>Success Stories</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
                Outcomes we're proud to measure.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft md:justify-self-end">
              A snapshot of what happens when leadership commitment meets a
              well-designed learning journey.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="card-premium p-10 md:p-12">
                <p className="font-display text-6xl text-ink">
                  <Counter to={s.n} suffix={s.s} />
                </p>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-soft">
                  {s.l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  {
    quote: "Arise Masters reshaped our first-time manager program. Facilitation was world-class, and our internal NPS jumped 34 points.",
    name: "Priya Menon",
    role: "Head of L&D",
    org: "Fintech Unicorn",
    initials: "PM",
  },
  {
    quote: "The placement readiness track transformed our final year cohort. Interview conversions doubled in a single semester.",
    name: "Dr. Ramesh Iyer",
    role: "Dean",
    org: "Engineering College",
    initials: "RI",
  },
  {
    quote: "A rare partner that listens, tailors and delivers. Their POSH program set a new bar for our compliance culture.",
    name: "Anita Kapoor",
    role: "CHRO",
    org: "Manufacturing Group",
    initials: "AK",
  },
];

const AVATAR_THEMES = [
  { bg: "linear-gradient(135deg, var(--color-primary), color-mix(in oklab, var(--color-primary) 70%, black))", fg: "text-white" },
  { bg: "linear-gradient(135deg, var(--color-accent), color-mix(in oklab, var(--color-accent) 80%, black))", fg: "text-ink" },
  { bg: "linear-gradient(135deg, var(--color-ink), color-mix(in oklab, var(--color-ink) 60%, white))", fg: "text-white" },
] as const;

function Testimonials() {
  return (
    <section className="aura relative overflow-hidden py-32 md:py-44">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionEyebrow>Testimonials</SectionEyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
              Words from the leaders we work with.
            </h2>
          </Reveal>
        </div>

        {/* horizontal snap-scroll on mobile, elegant grid from md up */}
        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="w-[82%] shrink-0 snap-center sm:w-[55%] md:w-auto"
            >
              <TestimonialCard {...t} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  org,
  initials,
  index,
}: {
  quote: string;
  name: string;
  role: string;
  org: string;
  initials: string;
  index: number;
}) {
  const avatar = AVATAR_THEMES[index % AVATAR_THEMES.length];

  return (
    <figure className="testimonial-card group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-9">
      <Quote
        size={110}
        strokeWidth={0}
        className="pointer-events-none absolute -top-4 right-5 fill-ink/[0.05] transition-colors duration-500 group-hover:fill-primary/[0.09]"
        aria-hidden
      />

      <div className="relative flex gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, k) => (
          <Star key={k} size={14} className="fill-accent" />
        ))}
      </div>

      <blockquote className="relative mt-6 flex-1 font-display text-xl leading-snug text-ink">
        "{quote}"
      </blockquote>

      <figcaption className="relative mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
        <span
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-sm font-semibold shadow-md transition-transform duration-500 group-hover:scale-110 ${avatar.fg}`}
          style={{ backgroundImage: avatar.bg }}
          aria-hidden
        >
          {initials}
        </span>
        <div>
          <p className="font-medium text-ink">{name}</p>
          <p className="text-sm text-ink-soft">
            {role} <span className="text-ink-soft/50">·</span> {org}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

/* ---------- GALLERY ---------- */
// manual masonry columns — interleaved tall/square order per column so seams stagger
const GALLERY_COLUMNS = [
  [0, 3],
  [1, 2],
];

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal><SectionEyebrow>Gallery</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
                Moments from the room.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/gallery" className="btn-ghost self-start md:self-end">
              View all moments <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-sm grid-cols-1 gap-3 sm:max-w-lg sm:grid-cols-2 sm:gap-4 lg:max-w-xl">
          {GALLERY_COLUMNS.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3 sm:gap-4">
              {col.map((idx) => (
                <Reveal key={idx} delay={idx * 0.06}>
                  <GalleryTile
                    {...featuredGalleryImages[idx]}
                    onOpen={() => setLightboxIndex(idx)}
                  />
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>

      <GalleryLightbox
        images={featuredGalleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    ["Who do you typically work with?", "Corporate L&D teams, HR functions, universities, engineering colleges, MSMEs and training institutes."],
    ["Do you customise the training content?", "Yes — every engagement starts with a diagnostic and a custom curriculum built around your outcomes."],
    ["Can you deliver virtually?", "We deliver in-person, virtual and hybrid formats across India and internationally."],
    ["How do you measure outcomes?", "Every program ships with a KPI scorecard covering behavioural, business and learner satisfaction metrics."],
    ["Do you conduct POSH training?", "Yes — certified POSH prevention and awareness sessions for workplaces of all sizes."],
    ["How do we get started?", "Book a consultation — we'll scope your goals and share a proposal within a week."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-seam relative overflow-hidden bg-gradient-to-b from-cream to-background py-32 md:py-44">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Reveal><SectionEyebrow>FAQ</SectionEyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
              Frequently asked.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink-soft">
              Can't find what you're looking for?{" "}
              <a href="#contact" className="text-primary underline underline-offset-4">
                Talk to us
              </a>
              .
            </p>
          </Reveal>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {items.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <button
                key={q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full py-6 text-left"
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="font-display text-xl leading-snug text-ink md:text-2xl">
                    {q}
                  </p>
                  <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/15 text-ink">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </div>
                <div
                  className={`grid overflow-hidden text-ink-soft transition-all duration-500 ${
                    isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 pr-14">
                    <p className="pb-2 text-base leading-relaxed">{a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#f0453b_0%,#e1261c_45%,#a81810_100%)] p-10 text-white shadow-[0_40px_100px_-40px_rgba(225,38,28,0.75)] md:p-20">
            <div className="floaty absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
            <div className="floaty-slow absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  Ready when you are
                </span>
                <h2 className="mt-4 font-display text-4xl leading-[1.05] text-white md:text-6xl">
                  Your rise begins here.
                </h2>
              </div>
              <div className="md:justify-self-end">
                <p className="max-w-md text-white/85">
                  Book a 30-minute consultation with our lead facilitator and
                  walk away with a proposal tailored to your team.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Book Consultation <ArrowRight size={16} />
                  </a>
                  <a
                    href="#programs"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Explore Programs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          size: data.get("size"),
          message: data.get("msg"),
          company_website: data.get("company_website"),
        }),
      });

      const result = await res.json().catch(() => null);

      if (!res.ok || !result?.success) {
        setStatus("error");
        setErrorMsg(result?.error || "Something went wrong. Please try again.");
        return;
      }

      router.push("/thank-you");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-32 md:py-44">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Reveal><SectionEyebrow>Contact</SectionEyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
              Let's design a program together.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Share a little about your team and goals. We'll respond within
              one business day.
            </p>
          </Reveal>
          <div className="mt-10 space-y-5">
            <ContactRow icon={Mail} label="arisemastersacademy@gmail.com" />
            <ContactRow icon={Phone} label="+91 87541 89669" />
            <ContactRow icon={MapPin} label="Chennai" />
          </div>
        </div>
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="card-premium p-9 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Work email" type="email" name="email" />
              <Field label="Company" name="company" />
              <Field label="Team size" name="size" />
            </div>
            <div className="mt-5">
              <Field label="What would you like to explore?" name="msg" textarea />
            </div>
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, width: 0, opacity: 0 }}
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary mt-8 w-full sm:w-auto"
            >
              {status === "submitting" ? "Sending…" : "Send message"}{" "}
              <ArrowRight size={16} />
            </button>
            {status === "error" && (
              <p className="mt-3 text-sm text-primary">{errorMsg}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-white">
        <Icon size={16} />
      </span>
      <span className="text-ink">{label}</span>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "peer w-full rounded-2xl border border-ink/10 bg-cream/50 px-4 py-3 text-ink placeholder-transparent focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          name={name}
          placeholder={label}
          rows={4}
          required
          className={cls + " resize-none"}
        />
      ) : (
        <input type={type} name={name} placeholder={label} required className={cls} />
      )}
      <span className="pointer-events-none absolute left-3 -top-2 bg-white px-1.5 text-xs text-ink-soft transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary">
        {label}
      </span>
    </label>
  );
}

/* ---------- MAP ---------- */
function MapSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=VGN+Projects+Estates+Pvt.+Ltd.,+Y-222,+VGN+Kimberly+Towers,+2nd+Ave,+Y+Block,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040";

  return (
    <section aria-label="Location" className="py-24">
      <div className="container-x">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
            <div className="space-y-8">
              <SectionEyebrow>Location</SectionEyebrow>
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-cream/80 px-4 py-3 text-sm font-semibold text-ink shadow-soft">
                  <MapPin size={18} className="text-primary" />
                  Chennai, Tamil Nadu, India
                </div>
                <h2 className="mt-6 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
                  Find us on the map
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  Our Chennai office location is shown below. Use the map to explore the exact address and get directions instantly.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center !py-3 !px-6 text-sm"
                >
                  View on Google Maps
                  <ArrowUpRight size={16} className="ml-2" />
                </a>
                <span className="text-sm text-ink-soft">Opens in a new tab</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-ink/10 shadow-soft">
              <iframe
                title="Arise Masters Chennai location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1409.331512795473!2d80.21121296796922!3d13.084334146351367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo%2035%2C%20VGN%20Gateway%20Phase%202%2C%20Vedha%20Streeet%2C%20%20Anna%20Nagar%20%2C%20Chennai%20-%20600040!5e1!3m2!1sen!2sin!4v1786238843492!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                className="h-[420px] w-full"
                style={{ border: 0 }}
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
