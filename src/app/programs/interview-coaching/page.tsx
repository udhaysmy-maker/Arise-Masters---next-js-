import type { Metadata } from "next";
import {
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { crackIt } from "@/data/crack-it";

const title = "CRACK IT | Personalized Interview Coaching | Arise Masters";
const description =
  "CRACK IT is Arise Masters' 1-on-1 interview coaching program for Government, PSU, IT and corporate roles — mock interviews, EQ coaching and honest feedback.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/programs/interview-coaching" },
  openGraph: {
    title,
    description,
    url: "/programs/interview-coaching",
    siteName: "Arise Masters",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function InterviewCoachingPage() {
  return (
    <div className="bg-background text-ink">
      <Nav />

      {/* HERO */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionEyebrow>{crackIt.programName} — Interview Coaching</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
                {crackIt.hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                {crackIt.hero.subheadline}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-base font-medium text-ink">
                {crackIt.hero.supportingLine}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8">
                <a href="/#contact" className="btn-primary">
                  {crackIt.cta.buttonText} <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="section-seam bg-gradient-to-b from-cream via-cream to-background py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Reveal>
              <SectionEyebrow>Why This Program Exists</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                {crackIt.whyExists.intro}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                {crackIt.whyExists.closing}
              </p>
            </Reveal>
          </div>
          <Stagger className="space-y-4" step={0.06}>
            {crackIt.whyExists.painPoints.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-start gap-3 card-premium !rounded-2xl p-5">
                  <AlertCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-ink-soft">{point}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>Who This Is For</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                One program. Every interview that matters.
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" step={0.06}>
            {crackIt.audience.map((a) => (
              <StaggerItem key={a.category}>
                <div className="card-premium !rounded-2xl h-full p-6">
                  <h3 className="font-display text-lg text-ink">{a.category}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.who}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-xl text-center text-sm italic leading-relaxed text-ink-soft">
              {crackIt.audienceClosing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section-seam bg-gradient-to-b from-cream via-cream to-background py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>What Makes Our Coaching Different</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                Not generic tips. Personalized strategy.
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2" step={0.06}>
            {crackIt.differentiators.map((d) => (
              <StaggerItem key={d.title}>
                <div className="flex items-start gap-3 card-premium !rounded-2xl p-6">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-ink">{d.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{d.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>Program Structure</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                A five-stage path to your final round.
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-14 space-y-4" step={0.06}>
            {crackIt.process.map((p) => (
              <StaggerItem key={p.stage}>
                <div className="card-premium !rounded-2xl flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:gap-6">
                  <span className="shrink-0 font-display text-lg text-primary sm:w-56">{p.stage}</span>
                  <p className="text-sm leading-relaxed text-ink-soft">{p.whatHappens}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-soft">
              <span className="font-medium text-ink">Format options:</span>{" "}
              {crackIt.formatOptions.join(" · ")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-seam bg-gradient-to-b from-cream via-cream to-background py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <ShieldCheck size={28} className="mx-auto text-primary" />
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                {crackIt.trust.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">{crackIt.trust.intro}</p>
            </Reveal>
          </div>

          <Stagger className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2" step={0.06}>
            {crackIt.trust.points.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-start gap-3 card-premium !rounded-2xl p-5">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-ink-soft">{point}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.14}>
            <p className="mx-auto mt-10 max-w-xl text-center text-sm italic leading-relaxed text-ink-soft">
              {crackIt.trust.closing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="card-premium !rounded-[2rem] mx-auto flex max-w-3xl flex-col items-center gap-6 p-10 text-center md:p-14">
              <h2 className="font-display text-2xl leading-tight tracking-tight md:text-3xl">
                {crackIt.cta.headline}
              </h2>
              <a href="/#contact" className="btn-primary">
                {crackIt.cta.buttonText} <ArrowUpRight size={16} />
              </a>
              <p className="text-sm leading-relaxed text-ink-soft">{crackIt.cta.closingLine}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
