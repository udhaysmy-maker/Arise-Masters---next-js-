import type { Metadata } from "next";

import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { FullGallery } from "@/components/site/FullGallery";
import { galleryImages } from "@/data/gallery";

const title = "Gallery | Arise Masters";
const description =
  "Explore moments from Arise Masters training sessions, workshops, events and learning experiences.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title,
    description,
    url: "/gallery",
    siteName: "Arise Masters",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-background text-ink">
      <Nav />
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionEyebrow>Gallery</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 font-display text-[2.5rem] leading-[1.04] tracking-tight md:text-[3.4rem]">
                Moments from the room.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Explore moments from our training sessions, workshops, events
                and learning experiences.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <FullGallery images={galleryImages} />
          </div>
        </div>
      </section>
    </div>
  );
}
