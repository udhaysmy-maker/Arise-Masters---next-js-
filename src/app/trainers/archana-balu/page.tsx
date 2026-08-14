import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Award, Quote } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { archanaProfile } from "@/data/trainer-profile";

const archanaImg = "/assets/archana-balu.jpeg";

const title = "Archana Balu | Founder & Corporate Facilitator | Arise Masters";
const description =
  "Meet Archana Balu — Founder of Arise Masters, Certified HR Business Partner and Leadership & Emotional Intelligence Trainer with 10+ years of corporate experience.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/trainers/archana-balu" },
  openGraph: {
    title,
    description,
    url: "/trainers/archana-balu",
    siteName: "Arise Masters",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ArchanaBaluProfilePage() {
  return (
    <div className="bg-background text-ink">
      <Nav />

      {/* HERO */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] shadow-elevated ring-1 ring-ink/5 md:h-[520px]">
              <Image
                src={archanaImg}
                alt={`${archanaProfile.name}, ${archanaProfile.titleLine} at Arise Masters`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionEyebrow>{archanaProfile.titleLine}</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
                {archanaProfile.name}
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {archanaProfile.credentialLine}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">{archanaProfile.intro}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{archanaProfile.belief}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <a href="/#contact" className="btn-primary">
                  Book a discovery call <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY QUOTE */}
      <section className="section-seam bg-ink py-20 text-white md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote size={28} className="mx-auto text-primary" />
              <p className="mt-6 font-display text-2xl leading-snug tracking-tight md:text-3xl">
                &ldquo;{archanaProfile.philosophyQuote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                {archanaProfile.engineerBreakthroughsLine}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS + EXPERTISE */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionEyebrow>Certifications</SectionEyebrow>
            </Reveal>
            <Stagger className="mt-8 space-y-3" step={0.05}>
              {archanaProfile.certifications.map((cert) => (
                <StaggerItem key={cert}>
                  <div className="flex items-start gap-3">
                    <Award size={16} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-ink-soft">{cert}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal>
              <SectionEyebrow>Areas of Expertise</SectionEyebrow>
            </Reveal>
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2" step={0.05}>
              {archanaProfile.expertise.map((area) => (
                <StaggerItem key={area}>
                  <div className="card-premium !rounded-xl p-4">
                    <p className="text-sm font-medium text-ink">{area}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="section-seam bg-gradient-to-b from-cream via-cream to-background py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>Her Story</SectionEyebrow>
            </Reveal>
            {archanaProfile.founderStory.map((para, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <p className="mt-6 text-lg leading-relaxed text-ink-soft">{para}</p>
              </Reveal>
            ))}
            <Reveal delay={0.15}>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">{archanaProfile.closing}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <a href="/#contact" className="btn-primary">
                  Book a discovery call <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
}
