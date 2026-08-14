import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { ActivityGrid } from "@/components/site/ActivityGrid";
import { activities } from "@/data/activities";

const title = "Team-Building Activity Library | RISE TOGETHER | Arise Masters";
const description =
  "15 signature indoor and outdoor team-building games from Arise Masters' RISE TOGETHER program — trust, communication, strategy and leadership, built for the workplace.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/programs/rise-together/activities" },
  openGraph: {
    title,
    description,
    url: "/programs/rise-together/activities",
    siteName: "Arise Masters",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ActivityLibraryPage() {
  return (
    <div className="bg-background text-ink">
      <Nav />
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-x">
          <Reveal>
            <Link
              href="/programs/rise-together"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              <ArrowLeft size={15} /> Back to RISE TOGETHER
            </Link>
          </Reveal>

          <div className="mx-auto mt-8 max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>Activity Library</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
                15 signature games. Indoor & outdoor.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Every activity in the RISE TOGETHER library is mapped to a
                real workplace outcome — trust, communication, strategy or
                leadership — and closes with a facilitated debrief.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <ActivityGrid activities={activities} />
          </div>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-4">
              <a href="/#contact" className="btn-primary">
                Request curriculum <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
      <FloatingActions />
    </div>
  );
}
