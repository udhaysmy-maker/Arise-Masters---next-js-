"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

export function GalleryTile({
  src,
  alt,
  title,
  width,
  height,
  onOpen,
  priority = false,
  sizes = "(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw",
}: GalleryImage & {
  onOpen: () => void;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open image: ${title}`}
      className="group relative block w-full overflow-hidden rounded-[1.75rem] text-left shadow-soft ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-elevated"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="h-auto w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="font-display text-lg text-white">{title}</span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur">
          <Maximize2 size={15} />
        </span>
      </div>
    </button>
  );
}
