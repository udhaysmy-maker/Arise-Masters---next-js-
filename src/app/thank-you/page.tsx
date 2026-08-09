import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Thank You | Arise Masters",
  description: "Thank you for contacting Arise Masters. We have received your enquiry.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ThankYouPage() {
  return (
    <div className="bg-background text-ink">
      <Nav />
      <section className="aura relative isolate flex min-h-screen items-center overflow-hidden pt-32 pb-24">
        <div className="container-x">
          <div className="mx-auto max-w-xl text-center">
            <Reveal>
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary text-white shadow-glow">
                <CheckCircle2 size={36} strokeWidth={1.75} />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-8 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
                Thank you.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-lg font-medium text-ink-soft">
                We&apos;ve received your enquiry.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                Thanks for reaching out to Arise Masters. We&apos;ve received
                your message and our team will review it and get back to you
                within one business day.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <Link href="/" className="btn-primary mt-10 inline-flex">
                Back to website <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
