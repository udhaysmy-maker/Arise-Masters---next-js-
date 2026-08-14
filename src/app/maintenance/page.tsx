import type { Metadata } from "next";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const title = "Arise Masters — Site Maintenance";
const description =
  "Our website is temporarily unavailable while we make some improvements. We'll be back shortly.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-24 text-ink">
      {/* decorative background — matches the homepage hero treatment */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="floaty absolute -top-40 -right-32 h-[560px] w-[560px] rounded-full bg-primary/14 blur-3xl" />
        <div className="floaty-slow absolute top-1/4 -left-40 h-[480px] w-[480px] rounded-full bg-accent/35 blur-3xl" />
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,white_0%,transparent_62%)]" />
      </div>

      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        <Reveal>
          <Image
            src="/assets/logo-wordmark-tagline.png"
            alt="Arise Masters — Your Rise Begins Here"
            width={1131}
            height={195}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <span className="mt-10 grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
            <TrendingUp size={28} strokeWidth={1.6} />
          </span>
        </Reveal>

        <Reveal delay={0.14}>
          <h1 className="mt-8 font-display text-3xl leading-tight tracking-tight md:text-5xl">
            We&apos;re preparing something better.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Our website is temporarily unavailable while we make some
            improvements.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mt-2 text-lg leading-relaxed text-ink-soft">
            We&apos;ll be back shortly.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 h-px w-16 bg-primary/30" />
          <p className="mt-10 text-sm text-ink-soft">
            For urgent enquiries, reach us at{" "}
            <a
              href="mailto:arisemastersacademy@gmail.com"
              className="font-medium text-primary transition-colors hover:text-ink"
            >
              arisemastersacademy@gmail.com
            </a>
          </p>
        </Reveal>
      </div>
    </div>
  );
}
