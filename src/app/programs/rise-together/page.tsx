import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Target,
  Users,
  Layers,
  ClipboardCheck,
  Award,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { riseTogether } from "@/data/rise-together";

const title = "RISE TOGETHER | Team-Building & Leadership Program | Arise Masters";
const description =
  "RISE TOGETHER is Arise Masters' signature experiential team-building and leadership program — six modules, real activities, and facilitated debriefs that turn activity into workplace action.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/programs/rise-together" },
  openGraph: {
    title,
    description,
    url: "/programs/rise-together",
    siteName: "Arise Masters",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RiseTogetherPage() {
  return (
    <div className="bg-background text-ink">
      <Nav />

      {/* HERO */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionEyebrow>Team-Building Program</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
                {riseTogether.programName}
              </h1>
            </Reveal>
            <Reveal delay={0.07}>
              <p className="mt-3 font-display text-xl italic text-primary md:text-2xl">
                &ldquo;{riseTogether.supportingTagline}&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-ink-soft">
                {riseTogether.tagline} &middot; also known as &ldquo;{riseTogether.alternateName}&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                {riseTogether.philosophy}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                {riseTogether.experientialLearningCycle.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                      {step}
                    </span>
                    {i < riseTogether.experientialLearningCycle.length - 1 && (
                      <ArrowRight size={16} className="text-ink-soft/50" />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="/#contact" className="btn-primary">
                  Request curriculum <ArrowUpRight size={16} />
                </a>
                <Link href="/programs/rise-together/activities" className="btn-ghost">
                  Explore the 15 activities <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OBJECTIVES + AUDIENCE */}
      <section className="section-seam bg-gradient-to-b from-cream via-cream to-background py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionEyebrow>Program Objectives</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                What every batch is built to achieve.
              </h2>
            </Reveal>
            <Stagger className="mt-8 space-y-4" step={0.06}>
              {riseTogether.objectives.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3">
                    <Target size={18} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-ink-soft">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal>
              <SectionEyebrow>Who This Is Built For</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                Built for teams in motion.
              </h2>
            </Reveal>
            <Stagger className="mt-8 space-y-4" step={0.06}>
              {riseTogether.audience.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3">
                    <Users size={18} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-ink-soft">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>Program Structure</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                Six modules. Modular by design — half-day, full-day, or multi-day immersion.
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-2" step={0.06}>
            {riseTogether.modules.map((mod) => (
              <StaggerItem key={mod.module}>
                <div className="card-premium !rounded-2xl h-full p-7">
                  <h3 className="font-display text-xl text-ink">{mod.module}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{mod.focus}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    <span className="font-medium text-ink">Activities:</span> {mod.activities}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    <span className="font-medium text-ink">Outcome:</span> {mod.outcome}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-ink-soft">
              {riseTogether.moduleFootnote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* DELIVERY FORMATS */}
      <section className="section-seam bg-gradient-to-b from-cream via-cream to-background py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>Delivery Formats</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                Fits your calendar, not the other way around.
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" step={0.06}>
            {riseTogether.deliveryFormats.map((f) => (
              <StaggerItem key={f.name}>
                <div className="card-premium !rounded-2xl h-full p-7">
                  <div className="flex items-center gap-2">
                    <Layers size={18} className="text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      {f.duration}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl text-ink">{f.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-xl text-center text-sm text-ink-soft">
              <span className="font-medium text-ink">Batch size:</span> {riseTogether.batchSize}
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT CLIENTS GET */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>What Every Client Gets</SectionEyebrow>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2" step={0.06}>
            {riseTogether.whatClientsGet.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 card-premium !rounded-2xl p-6">
                  <ClipboardCheck size={18} className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-ink-soft">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="card-premium !rounded-[2rem] mx-auto flex max-w-3xl flex-col items-center gap-6 p-10 text-center md:p-14">
              <Award size={28} className="text-primary" />
              <h2 className="font-display text-2xl leading-tight tracking-tight md:text-3xl">
                Ready to run RISE TOGETHER with your team?
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="/#contact" className="btn-primary">
                  Book a discovery call <ArrowUpRight size={16} />
                </a>
                <Link href="/programs/rise-together/activities" className="btn-ghost">
                  See all 15 activities <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
